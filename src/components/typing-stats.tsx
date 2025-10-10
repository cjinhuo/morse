import { memo, useEffect, useState } from 'react'
import styled from 'styled-components'

const StatsContainer = styled.div`
  background: var(--color-neutral-10);
  border: 1px solid var(--color-neutral-8);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  .dark &, body[theme-mode="dark"] & {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background: var(--color-neutral-9);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.1);
  }
  
  .dark &:hover, body[theme-mode="dark"] &:hover {
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.3);
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-neutral-2);
    margin-bottom: 0.25rem;
    background: linear-gradient(135deg, var(--color-link-href), #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--color-neutral-5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
  
  .stat-description {
    font-size: 0.75rem;
    color: var(--color-neutral-6);
    margin-top: 0.25rem;
  }
`

const ProgressBar = styled.div<{ percentage: number; color: string }>`
  width: 100%;
  height: 10px;
  background: var(--color-neutral-8);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.percentage}%;
    background: linear-gradient(90deg, ${props => props.color}, ${props => props.color}dd);
    border-radius: 6px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`

export interface TypingStatsData {
  /** 总字符数 */
  totalChars: number
  /** 正确字符数 */
  correctChars: number
  /** 错误字符数 */
  errorChars: number
  /** 开始时间 */
  startTime: number | null
  /** 结束时间 */
  endTime: number | null
  /** 是否完成 */
  isCompleted: boolean
}

export interface TypingStatsProps {
  data: TypingStatsData
  className?: string
}

export default memo(function TypingStats({ data, className }: TypingStatsProps) {
  const [currentTime, setCurrentTime] = useState(Date.now())

  // 实时更新当前时间用于计算实时WPM
  useEffect(() => {
    if (!data.startTime || data.isCompleted) return

    const timer = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    return () => clearInterval(timer)
  }, [data.startTime, data.isCompleted])

  // 计算统计数据
  const stats = (() => {
    const { totalChars, correctChars, errorChars, startTime, endTime, isCompleted } = data

    // 准确率
    const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 0

    // 计算时间（秒）
    const timeMs = isCompleted && endTime && startTime
      ? endTime - startTime
      : startTime
        ? currentTime - startTime
        : 0
    const timeSeconds = timeMs / 1000
    const timeMinutes = timeSeconds / 60

    // WPM (Words Per Minute) - 标准计算方式：正确字符数 / 5 / 分钟数
    const wpm = timeMinutes > 0 ? Math.round((correctChars / 5) / timeMinutes) : 0

    // CPM (Characters Per Minute) - 每分钟字符数
    const cpm = timeMinutes > 0 ? Math.round(correctChars / timeMinutes) : 0

    // 错误率
    const errorRate = totalChars > 0 ? (errorChars / totalChars) * 100 : 0

    // 格式化时间显示
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60)
      const secs = Math.floor(seconds % 60)
      return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return {
      wpm,
      cpm,
      accuracy: Math.round(accuracy * 10) / 10, // 保留一位小数
      errorRate: Math.round(errorRate * 10) / 10,
      time: formatTime(timeSeconds),
      totalChars,
      correctChars,
      errorChars
    }
  })()

  return (
    <StatsContainer className={className}>
      <StatItem>
        <div className="stat-value">{stats.wpm}</div>
        <div className="stat-label">WPM</div>
        <div className="stat-description">
          Words Per Minute
        </div>
      </StatItem>
      
      <StatItem>
        <div className="stat-value">{stats.cpm}</div>
        <div className="stat-label">CPM</div>
        <div className="stat-description">
          Characters Per Minute
        </div>
      </StatItem>

      <StatItem>
        <div className="stat-value">{stats.accuracy}%</div>
        <div className="stat-label">Accuracy</div>
        <ProgressBar 
          percentage={stats.accuracy} 
          color={stats.accuracy >= 95 ? '#10b981' : stats.accuracy >= 85 ? '#f59e0b' : '#ef4444'}
        />
      </StatItem>
      
      <StatItem>
        <div className="stat-value">{stats.errorChars}</div>
        <div className="stat-label">Errors</div>
        <div className="stat-description">
          {stats.errorRate}% Error Rate
        </div>
      </StatItem>

      <StatItem>
        <div className="stat-value">{stats.time}</div>
        <div className="stat-label">Time</div>
        <div className="stat-description">
          {data.isCompleted ? 'Completed' : 'In Progress'}
        </div>
      </StatItem>
      
      <StatItem>
        <div className="stat-value">{stats.correctChars}/{stats.totalChars}</div>
        <div className="stat-label">Progress</div>
        <ProgressBar 
          percentage={stats.totalChars > 0 ? (stats.correctChars / stats.totalChars) * 100 : 0} 
          color="var(--color-link-href)"
        />
      </StatItem>
    </StatsContainer>
  )
})