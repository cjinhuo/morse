import type { Score } from '../shared/practice'
import { useCopy } from '../shared/preferences'

export default function TypingStats({ score }: { score: Score }) {
  const t = useCopy()
  const metrics = [
    [t('输入速度', 'Typing speed'), score.wpm, 'WPM'],
    [t('每分钟字符', 'Characters per minute'), score.cpm, 'CPM'],
    [t('准确率', 'Accuracy'), score.accuracy, '%'],
    [t('错误字符', 'Errors'), score.errors, 'CHAR'],
    [t('已用时间', 'Elapsed time'), score.time, ''],
  ] as const
  return (
    <dl className='metrics'>
      {metrics.map(([name, value, unit]) => (
        <div key={name}>
          <dt>{name}</dt>
          <dd>
            <span>{value}</span>
            {unit && <small className='meta'>{unit}</small>}
          </dd>
        </div>
      ))}
    </dl>
  )
}
