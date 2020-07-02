import React, { HTMLAttributes } from 'react'
import { IonicReactProps } from '@ionic/react/dist/types/components/IonicReactProps'
import { IonIcon } from '@ionic/react'
import { save, trash } from 'ionicons/icons'

// TODO: remove this import when Ionic adds this in types/components.d.ts
import { IIonIconProps } from './MyUIIcon-Types'

export function MyUIIcon(
  props: IIonIconProps & IonicReactProps & HTMLAttributes<HTMLIonIconElement>,
) {
  return <IonIcon {...props} />
}

export function MyUISaveIcon() {
  return <MyUIIcon icon={save}></MyUIIcon>
}

export function MyUITrashIcon() {
  return <MyUIIcon icon={trash}></MyUIIcon>
}
