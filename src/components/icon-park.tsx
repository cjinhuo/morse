type IconParkProps = {
  name: string
  size?: string
  width?: string
  height?: string
  color?: string
  stroke?: string
  fill?: string
  rtl?: string
  spin?: string
}
export default function IconPark(props: IconParkProps) {
  // todo 修复类型错误 env.d.ts
  return (
    <iconpark-icon
      {...props}
      size='1.6rem'
      style={{ transition: 'color 0.1s' }}
      class='text-skin-neutral-6 hover:text-skin-neutral-3'></iconpark-icon>
  )
}
