import { sbEditable, SbEditableBlok } from '@storyblok/storyblok-editable';
import { FC } from 'react';

interface Props {
  blok: SbEditableBlok;
}

const Teaser: FC<Props> = ({ blok }) => {
  return <h2 {...sbEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
