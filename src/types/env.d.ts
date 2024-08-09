/// <reference types="@rsbuild/core/types" />

/**
 * if you are using React JSX with typescript
 * e.g.
 *     <iconpark-icon name="xxx" />
 * include below type declaration in your project (don't forget to import React from 'react')
 *
 */
interface IconParkIconAttributes<T> extends React.HTMLAttributes<T> {
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
namespace JSX {
  interface IntrinsicElements {
    'iconpark-icon': React.DetailedHTMLProps<IconParkIconAttributes<HTMLElement>, HTMLElement>
  }
}
