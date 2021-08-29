import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  description: {
    display: 'flex',
  },
  titleBox: {
    position: 'fixed',
    left: '50px',
    top: '15px',
    fontFamily: "sans-serif",
    letterSpacing: "6px",
    fontSize: "x-large",
    "color-interpolation": "linear-gradient( 90deg , #F27A54 0%, #A154F2 100%)",
    textShadow: "0px 0px 16px rgb(0 0 0 / 83%)",
    background: "linear-gradient(90deg, #F27A54 0%, #A154F2 100%)",
    color: "transparent",
    "-webkit-background-clip": "text",
    "background-clip": "text",
    "font-variant-caps": "small-caps",
  },
  columnInfo: {
    display: 'flex',
  },
  favoriteBox: {
    display: 'flex',
  },
  idmb: {
    display: 'flex',
  },
  isfavorite: {
    width: 30,
    height: 30,
    right: -15,
    top: -15,
    position: 'absolute',
    color: 'gray',
    zIndex: theme.zIndex.drawer,
    '&:hover': {
      color: '#ff9800',
      transition: '200ms ease-out',
    },
  },
  notfavorite: {
    width: 30,
    height: 30,
    right: -15,
    top: -15,
    position: 'absolute',
    color: '#ff9800',
    '&:hover': {
      color: 'gray',
      transition: '200ms ease-out',
    },
    zIndex: theme.zIndex.drawer,
  },
  poster: {
    position: 'absolute',
    right: 200,
    width: 300,
    height: 400,
    top: 67,
    transform: 'rotate(9deg) translateZ(0)',
    borderRadius: '.75rem',
    '&:hover': {
      filter: 'none',
      transition: '500ms',
    },
  },
}));

export default useStyles;
