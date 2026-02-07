import { createTheme,type ThemeOptions } from "@mui/material/styles";

const commonTheme: ThemeOptions = {
  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
  },
};

/* ---------- Light Theme ---------- */
export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#394188",
    },
    secondary: {
      main: "#DBDEFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#394188",
    },
    error: {
      main: "#E70909",
    },
    success: {
      main: "#077707",
    },
  },
});

/* ---------- Dark Theme ---------- */
export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#DBDEFF",
    },
    secondary: {
      main: "#394188",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#DBDEFF",
    },
    error: {
      main: "#E70909",
    },
    success: {
      main: "#077707",
    },
  },
});
