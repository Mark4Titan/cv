// imports
import { Fragment, useEffect, useState } from 'react';
import { PlayList } from './Content';

// settings
interface PAboutX {
  playList: PlayList;
}

// ()=>{}
const AboutX = ({ playList }: PAboutX) => {
  console.log("About playList:", playList);
  return <Fragment>About</Fragment>;
};
export default AboutX;