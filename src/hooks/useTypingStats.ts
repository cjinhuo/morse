import { useCallback, useRef, useState } from 'react'
import type { TypingStatsData } from '../components/typing-stats'
import { CHAR_STATUS } from '../shared/constants'

export interface UseTypingStatsReturn {
  /** 统计数据 */
  stats: TypingStatsData
  /** 开始统计 */
  startStats: () => void
  /** 记录输入事件 */
  recordInput: (status: CHAR_STATUS, inputChar?: string, expectedChar?: string) => void
  /** 记录退格事件 */
  recordBackspace: () => void
  /** 完成统计 */
  finishStats: () => void
  /** 重置统计 */
  resetStats: () => void
}

interface InputEvent {
  status: CHAR_STATUS
  inputChar?: string
  expectedChar?: string
  timestamp: number
}

export function useTypingStats(): UseTypingStatsReturn {
  const [stats, setStats] = useState<TypingStatsData>({
    totalChars: 0,
    correctChars: 0,
    errorChars: 0,
    startTime: null,
    endTime: null,
    isCompleted: false
  })
  
  // 使用ref来存储输入历史，避免状态更新导致的性能问题
  const inputHistoryRef = useRef<InputEvent[]>([])
  const backspaceCountRef = useRef(0)
  
  const startStats = useCallback(() => {
    const now = Date.now()
    setStats({
      totalChars: 0,
      correctChars: 0,
      errorChars: 0,
      startTime: now,
      endTime: null,
      isCompleted: false
    })
    inputHistoryRef.current = []
    backspaceCountRef.current = 0
  }, [])
  
  const recordInput = useCallback((status: CHAR_STATUS, inputChar?: string, expectedChar?: string) => {
    const event: InputEvent = {
      status,
      inputChar,
      expectedChar,
      timestamp: Date.now()
    }
    
    inputHistoryRef.current.push(event)
    
    setStats(prev => {
      const newStats = { ...prev }
      
      // 增加总字符数
      newStats.totalChars += 1
      
      // 根据状态更新计数
      if (status === CHAR_STATUS.correct) {
        newStats.correctChars += 1
      } else if (status === CHAR_STATUS.error) {
        newStats.errorChars += 1
      }
      
      return newStats
    })
  }, [])
  
  const recordBackspace = useCallback(() => {
    backspaceCountRef.current += 1
    
    // 退格时需要减少相应的计数
    setStats(prev => {
      if (prev.totalChars <= 0) return prev
      
      const newStats = { ...prev }
      newStats.totalChars -= 1
      
      // 查找最后一个输入事件来确定要减少哪个计数
      const lastEvent = inputHistoryRef.current[inputHistoryRef.current.length - 1]
      if (lastEvent) {
        if (lastEvent.status === CHAR_STATUS.correct && newStats.correctChars > 0) {
          newStats.correctChars -= 1
        } else if (lastEvent.status === CHAR_STATUS.error && newStats.errorChars > 0) {
          newStats.errorChars -= 1
        }
        
        // 从历史记录中移除最后一个事件
        inputHistoryRef.current.pop()
      }
      
      return newStats
    })
  }, [])
  
  const finishStats = useCallback(() => {
    setStats(prev => ({
      ...prev,
      endTime: Date.now(),
      isCompleted: true
    }))
  }, [])
  
  const resetStats = useCallback(() => {
    setStats({
      totalChars: 0,
      correctChars: 0,
      errorChars: 0,
      startTime: null,
      endTime: null,
      isCompleted: false
    })
    inputHistoryRef.current = []
    backspaceCountRef.current = 0
  }, [])
  
  return {
    stats,
    startStats,
    recordInput,
    recordBackspace,
    finishStats,
    resetStats
  }
}

// 导出一些有用的统计计算函数
export const calculateWPM = (correctChars: number, timeMinutes: number): number => {
  return timeMinutes > 0 ? Math.round((correctChars / 5) / timeMinutes) : 0
}

export const calculateAccuracy = (correctChars: number, totalChars: number): number => {
  return totalChars > 0 ? (correctChars / totalChars) * 100 : 0
}

export const calculateCPM = (correctChars: number, timeMinutes: number): number => {
  return timeMinutes > 0 ? Math.round(correctChars / timeMinutes) : 0
}

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}