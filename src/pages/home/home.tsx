import PageHeading from '../../components/page-heading'
import useMobile from '../../hooks/useMobile'
import { useTypingStats } from '../../hooks/useTypingStats'
import { useCopy } from '../../shared/preferences'
import { MORSE_EXAMPLE } from '../../shared/sentences'
import MorseTyper from './morse-typer'

const sample = 'WHET HATH G'

export default function Home() {
  const mobile = useMobile()
  const t = useCopy()
  const practice = useTypingStats('morse', MORSE_EXAMPLE, sample)
  return (
    <section className='morse-page page'>
      <PageHeading
        title={t('摩尔斯训练', 'Morse training')}
        description={t(
          '轻点空格为点，长按为划，停顿半秒确认。',
          'Tap Space for a dot, hold for a dash, pause half a second to confirm.'
        )}
        eyebrow='TRANSMIT / 01'
        mobileTitle={t('找到你的发报节奏。', 'Find your rhythm.')}
        mobileDescription={t('轻点输入「点」，长按输入「划」。', 'Tap for a dot. Hold for a dash.')}
      />
      <MorseTyper key={practice.session.text + practice.round} practice={practice} mobile={mobile} />
    </section>
  )
}
