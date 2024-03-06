// imports
import { create } from "zustand";
import SummaryEN from "../Summary/SummaryEN";
import SummaryUA from "../Summary/SummaryUA";
import SummaryDEU from "../Summary/SummaryDEU";
import CV from "../interface/Summary";

export interface SummaryFiles {
  SummaryEN: CV;
  SummaryUA: CV;
  SummaryDEU: CV;
}
const AllSummary: SummaryFiles = {
  SummaryEN,
  SummaryUA,
  SummaryDEU,
};
export interface LengArr {
  min: string;
  max: string;
  logo: string;
}

export interface Len {
  is: string;
  cv: CV;
  len: LengArr[];
}
export const defaultLengArr: LengArr[] = [
   { min: "EN", max: "SummaryEN", logo: "" },
   { min: "UA", max: "SummaryUA", logo: "" },
   { min: "DEU", max: "SummaryDEU", logo: "" },
];
export const Leng: Len = {
  is: "SummaryEN",
  cv: AllSummary.SummaryEN,
  len: defaultLengArr,
};
export type prev = "Desktop" | "Tablet" | "Mobile";
export type themes =
  | { lightStyle: "Light" }
  | { darkStyle: "Dark" }
  | { modernStyle: "Patriotic" };

// settings
interface PGlobalState {
  burger: boolean;
  BurgerChenge: (b: boolean) => void;
  BurgerNext: () => void;
  //
  language: Len;
  LanguageNext: (l: string, idL:string) => void;
  //
  preview: prev;
  PreviewNext: (p: prev) => void;
  //
  theme: themes;
  ThemeNext: (t: themes) => void;
  //
  print: boolean;
  Print: () => void;
}

// ()=>{}
const GlobalState = create<PGlobalState>((set, get) => ({
  burger: false,
  language: Leng,
  preview: "Desktop" as prev,
  theme: { lightStyle: "Light" } as themes,
  print: false,

  //
  Print: () => {
    set({
      print: !get().print,
    });
  },

  //
  BurgerChenge: (b) => {
    set({
      burger: b,
    });
  },
  BurgerNext: () => {
    get().BurgerChenge(!get().burger);
  },
  //
  LanguageNext: (l, idL) => {
    set({
      language: {
        ...get().language,
        is: l,
        cv:
          l && idL
            ? AllSummary[idL as keyof SummaryFiles]
            : AllSummary.SummaryEN,
      },
    });
  },
  //
  PreviewNext: (p) => {
    set({
      preview: p,
    });
  },
  //
  ThemeNext: (t) => {
    set({
      theme: t,
    });
  },
}));
export default GlobalState;
