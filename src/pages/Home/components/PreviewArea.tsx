import React from 'react'
import { CatSprite } from '../../../components/CatSprite'

export const PreviewArea = (): JSX.Element => {
  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <CatSprite />
    </div>
  )
}
