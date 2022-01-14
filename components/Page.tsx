import { FC } from 'react';
import DynamcComponent from './DynamicComponent';
import { SbEditableBlok } from '@storyblok/storyblok-editable';

interface Props {
  blok: SbEditableBlok
}

const Page: FC<Props> = ({ blok }) => (
  <main>
    {blok.body
      ? blok.body.map((blok: any) => <DynamcComponent blok={blok} key={blok._uid} />)
      : null}
  </main>
);

export default Page;
