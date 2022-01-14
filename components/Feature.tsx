import { FC } from 'react';
import { sbEditable, SbEditableBlok } from '@storyblok/storyblok-editable';

interface Props {
  blok: SbEditableBlok;
}

const Feature: FC<Props> = ({ blok }) => (
  <div className='column feature' {...sbEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
