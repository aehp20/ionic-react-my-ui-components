import { IMyUIComponentProps } from './types'

import React from 'react'

export function MyUITest(props: IMyUIComponentProps) {
  return <div>{props.children}</div>
}
