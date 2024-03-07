// imports
import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { Fragment, useEffect, useState } from "react";
// import {
//     About,
//   Awards,
//   Education,
//   Experience,
//   FullName,
//   Interests,
//   Project,
//   Skills,
//   Social,
// } from "../../../interface/Summary";
import ExperienceX from "./ExperienceX";
import AboutX from "./AboutX";

// type IO = Experience
//     | Education
//     | Skills
//     | Interests
//     | Project
//     | Awards
//     | Social
//     | FullName
//     | Social
//     | About;

//  component => c
//  object => o
//  variant => v
export interface PlayList {
  c: string | string[] | [] | {};
  v:
    | "Experience"
    | "Education"
    | "Skills"
    | "Interests"
    | "Project"
    | "Awards"
    | "Social"
    | "FullName"
    | "Social"
    | "About";
  // o: IO;
  sx?: SxProps<Theme>;
  sxFirstChild?: SxProps<Theme>;
  sxAllChildren?: SxProps<Theme>;
  sxLastChild?: SxProps<Theme>;
}
// settings
interface PContent {
  name: string;
  title: string;
  sxTitle: SxProps<Theme>;
  playList: PlayList | undefined;
  children: React.ReactNode;
}

// ()=>{}
const Content = ({
  name = "",
  title = "",
  sxTitle,
  playList,
  children,
}: Partial<PContent>) => {
   const RenderPlayList = (playList: PlayList) => {
     const { v } = playList;

     switch (v) {
       case "Experience":
         console.log("Experience:");
         return <ExperienceX playList={playList} />;
       case "Education":
         console.log("Education:");
         return <>2</>;
       case "Skills":
         console.log("Skills:");
         return <>3</>;
       case "Interests":
         console.log("Interests:");
         return <>4</>;
       case "Project":
         console.log("Project:");
         return <>5</>;
       case "Awards":
         console.log("Awards:");
         return <>6</>;
       case "Social":
         console.log("Social:");
         return <>7</>;
       case "FullName":
         console.log("FullName:");
         return <>8</>;
       case "About":        
         return <AboutX playList={playList} />;
       default:
         console.log("Unknown type");
         return <>!!! Unknown type</>;
     }
   };

  return (
    <Box id={name !== "" ? name : title} sx={sxTitle}>
      {children}
      {title !== "" && <Typography>{title}</Typography>}
      {playList && RenderPlayList(playList)}
    </Box>
  );
};
export default Content;
