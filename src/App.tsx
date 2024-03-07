import { Fragment, useRef } from "react";
import "./App.css";
import {
  Box,
  createTheme,
  useTheme,
  Button,
  ThemeProvider,
  Container,
  Paper,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import GlobalState from "./GlobalState/GlobalState";
import CastomSelect, {
  SelectCB,
  itemsArr,
} from "./element/SelectText/CastomSelect";
import Header from "./components/header/Header";
import { LanguageNext } from "./GlobalState/SliseGlobalState";
import Content from "./components/header/content/Content";

function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const language = GlobalState((s) => s.language);
  // console.log("language", language);

  const newTheme = createTheme(theme, {
    typography: {
      h1: { fontSize: "3rem" },
      h2: { fontSize: "2rem" },
      h3: { fontSize: "1.5rem" },
      h4: { fontSize: "1.25rem" },
      h5: { fontSize: "1rem" },
      h6: { fontSize: "0.75rem" },
      body1: { fontSize: "1rem" },
      body2: { fontSize: "0.75rem" },
      subtitle1: { fontSize: "1rem" },
      subtitle2: { fontSize: "0.75rem" },
    },
    shadows: [
      ...theme.shadows.slice(0, 24),
      "-4px 2px 3px 0px rgb(255 255 255 / 12%), 0px 3px 3px 0px rgb(255 255 255 / 45%), 4px 0px 3px 0px rgb(255 255 255 / 12%), 0px -7px 13px 0px rgb(255 255 255 / 12%)",
    ],
  });
  const printComponent = useReactToPrint({
    content: () => printRef.current,
  });

  const Print = () => {
    console.log("print on");
    setTimeout(() => {
      printComponent();
    }, 0);
    setTimeout(() => {
      console.log("print off");
    }, 500);
  };

  const selectArr: itemsArr[] = language.len.map((le) => ({
    label: le.min,
    itemId: le.max,
    avatar: le.logo,
  }));

  const NextSelect = (selectCB: SelectCB) => {
    LanguageNext(selectCB.label, selectCB.itemId);
  };

  return (
    <ThemeProvider theme={newTheme}>
      <Box className='App'>
        <Header>
          <Fragment>
            <CastomSelect
              name='language select'
              sx={{ width: 60 }}
              arrValue={selectArr}
              value={selectArr[0].itemId}
              CastomSelectCb={NextSelect}
            />
            <Button variant='contained' color='primary' onClick={Print}>
              PDF
            </Button>
          </Fragment>
        </Header>
        <Box ref={printRef}>
          <Container
            sx={{
              marginBottom: 10,
              maxWidth: newTheme.breakpoints.values.xl,
              pr: 0,
              pl: 0,
            }}>
            <Paper
              sx={{
                minHeight: "100px",
                width: "100%",
                pb: 4,
                pt: 4,
                pl: 1,
                pr: 1,
                boxShadow: newTheme.shadows[24],
              }}>
              <Content title='title' playList={{ v: "About", c: {} }} />
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
