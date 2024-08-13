import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  trelloCustom: {},

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#fff",
        },
        active: {
          color: "red",
        },
      },
    },
    dark: {
      palette: {
        active: {
          color: "yellow",
        },
      },
    },
  },

  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          border: "1px solid #F19953",
        },
      },
    },
  },
});

export default theme;
