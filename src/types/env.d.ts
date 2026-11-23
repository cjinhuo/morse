/// <reference types="@rsbuild/core/types" />

import type * as React from 'react'

interface IconParkIconAttributes<T> extends React.HTMLAttributes<T> {
  class?: string
  // 包含打包的图标id
  'icon-id'?: '57' | '58' | '59' | '61' | '62' | '63'
  // 包含打包的图标标识
  name?: string
  size?: string
  width?: string
  height?: string
  color?: string
  stroke?: string
  fill?: string
  rtl?: string
  spin?: string
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconpark-icon': React.DetailedHTMLProps<IconParkIconAttributes<HTMLElement>, HTMLElement>
    }
  }
}
