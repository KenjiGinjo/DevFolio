'use client'

import type { SVGProps } from 'react'
import * as React from 'react'

function SvgDottedCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={75} height={75} fill="none" aria-hidden="true" {...props}>
      <path strokeDasharray="2 2" d="M74 37.5A36.5 36.5 0 1 0 37.5 74" />
    </svg>
  )
}
export default SvgDottedCircle
