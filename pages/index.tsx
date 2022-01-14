import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import DynamicComponent from '../components/DynamicComponent';
import Storyblok from '../lib/Storyblok';
import { StoryData } from 'storyblok-js-client';

interface Props {
  story: StoryData;
}

const Home: NextPage<Props> = (props) => {
  const story = props.story;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <h1>{props.story ? props.story.name : 'My Site'}</h1>
      </header>

      <main>
        <DynamicComponent blok={story.content} />
      </main>
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home';
  // load the published content outside of the preview mode
  let sbParams = {
    version: 'draft', // or 'published'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = 'draft';
    // @ts-ignore-next-line
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default Home;
