import { sbEditable, SbEditableBlok } from '@storyblok/storyblok-editable'
import {FC} from 'react'
import DynamicComponent from './DynamicComponent'

interface Props {
  blok: SbEditableBlok;
}

const Grid:FC<Props> = ({blok}) => {
  return (
    <div className="grid" {...sbEditable(blok)}>
      {blok.columns.map((blok: any) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  )
}

export default Grid
