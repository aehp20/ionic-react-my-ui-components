import styled from 'styled-components'

import { MyUIIcon } from './MyUIIcon'

export const StyledMyUICustomIcon = styled(MyUIIcon)`
  font-size: 24px;
  padding: 8px;
  color: var(--my-ui-icon-color);
`

export const StyledMyUICustomIconCircle = styled(StyledMyUICustomIcon)`
  border-radius: 50%;
  background: var(--my-ui-icon-background);
`
