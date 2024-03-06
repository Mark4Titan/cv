// imports
import { Box, useTheme, Container } from "@mui/material";

// settings
interface PHeader {
  children: React.ReactNode;
}

// ()=>{}
const Header = ({ children }: Partial<PHeader>) => {
    const theme = useTheme();
    
  return (
    <header>
      <Container
        sx={{
          marginBottom: 10,
          maxWidth: theme.breakpoints.values.xl,
          pr: 0,
          pl: 0,
        }}>
        <Box
          sx={{
            backgroundColor: theme.palette.success[theme.palette.mode],
            display: "flex",
            justifyContent: "center",
            gridGap: 20,
            alignItems: "center",
            height: 55,
            boxShadow: theme.shadows[6],
          }}>
          {children}
        </Box>
      </Container>
    </header>
  );
};
export default Header;
