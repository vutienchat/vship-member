import type { ThemeOptions } from '@mui/material';
import type { VShip } from 'theme';

const neutral = {
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
};

const vShip: VShip = {
  search: {
    main: '#079EC2',
  },
  link: {
    main: '#3277F0',
  },
  product: {
    main: '#1b5f83',
    hover: '#ed8b00',
    important: '#FF3945',
    important2: '#FF393999',
    bg: '#f5f5f5',
    shadow: '0px 1px 3px rgb(3 0 71 / 9%)',
    shadowHover: '0px 8px 45px rgb(3 0 71 / 9%)',
  },
  text: {
    important: '#FF3945',
    important2: '#FF393999',
    disabled: '#999',
    disabled2: '#ccc',
    gray: '#7a7a7a',
    orange: '#FF6800',
    lightBlue: '#089CD0',
    darkOrange: '#ee4d2d',
  },
  border: {
    main: '#E6E8F0',
    lightGray: '#bdbdbd',
    lightBlue: '#0088FF',
    darkOrange: '#ee4d2d',
  },
  searchCatagorySelect: {
    border: '1px solid #dadde9',
    color: 'rgba(0, 0, 0, 0.87)',
    background: 'rgba(217, 217, 217, 0.50)',
  },
  background: {
    lightBlue: '#D8E0F5',
    gray: '#f9f9f9',
    white: '#FFF',
    darkOrange: '#ee4d2d',
    lightOrange: '#fff3f3',
  },
  tos: {
    menuBackground:
      'linear-gradient(180deg, rgba(9, 99, 110, 0.57) 0%, rgba(7, 115, 194, 0.57) 100%)',
  },
  footer: {
    background: '#1B3459',
    color: '#C7C9D9',
  },
};

const background = {
  default: '#F9FAFC',
  paper: '#FFFFFF',
};

const primary = {
  main: '#aa0a0a',
  light: '#4B6DBD',
  dark: '#000314',
  contrastText: '#FFFFFF',
};

const secondary = {
  main: '#C5C5C5',
  light: '#3FC79A',
  dark: '#0B815A',
  contrastText: '#1B3459',
};

const success = {
  main: '#14B8A6',
  light: '#43C6B7',
  dark: '#0E8074',
  contrastText: '#FFFFFF',
};

const info = {
  main: '#2196F3',
  light: '#64B6F7',
  dark: '#0B79D0',
  contrastText: '#FFFFFF',
};

const warning = {
  main: '#FFB020',
  light: '#FFBF4C',
  dark: '#B27B16',
  contrastText: '#FFFFFF',
};

const error = {
  main: '#D14343',
  light: '#DA6868',
  dark: '#922E2E',
  contrastText: '#FFFFFF',
};

const text = {
  primary: '#121828',
  secondary: '#65748B',
  disabled: 'rgba(55, 65, 81, 0.48)',
};

const action = {
  active: neutral[500],
  focus: 'rgba(55, 65, 81, 0.12)',
  hover: 'rgba(55, 65, 81, 0.04)',
  selected: 'rgba(55, 65, 81, 0.08)',
  disabledBackground: 'rgba(55, 65, 81, 0.12)',
  disabled: 'rgba(55, 65, 81, 0.26)',
};

const divider = '#E6E8F0';

const light: ThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 0.75,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedInherit: {
          color: neutral[100],
          backgroundColor: vShip.product.main,
          '&:hover': {
            backgroundColor: vShip.text.lightBlue,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          borderBottom: `1px solid ${divider}`,
        },
        head: {
          backgroundColor: neutral[200],
          '.MuiTableCell-root': {
            color: neutral[700],
          },
          borderBottom: `1px solid ${divider}`,
          fontWeight: 700,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: action.hover,
        },
      },
    },
  },
  palette: {
    mode: 'light',
    action,
    background,
    divider,
    error,
    info,
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
    vShip,
  },
  shadows: [
    'none',
    '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
  ],
};

export default light;
