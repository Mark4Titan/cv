// imports
import { Fragment, useEffect, useState } from 'react';
import { PlayList } from './Content';

// settings
interface PExperienceX {
  playList: PlayList
}

// ()=>{}
const ExperienceX = ({ playList }: PExperienceX) => {
     console.log("Experience playList:", playList);
  return <Fragment>Experience</Fragment>;
};
export default ExperienceX;