import type { ThemeOptions } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    s300: true;
    s465: true;
    sm: true;
    s700: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const base: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      s300: 300,
      s465: 465,
      sm: 600,
      s700: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: 8,
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: 'hidden',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 16,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        input: {
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16,
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
        color: 'primary',
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: 'small',
        color: 'primary',
      },
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
        spacing: 1,
      },
    },
  },
  direction: 'ltr',
  shape: {
    borderRadius: 5,
  },
};

export default base;
