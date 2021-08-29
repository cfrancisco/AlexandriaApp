import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  description: {
    color: 'white',
    lineHeight: 2,
    paddingBottom: "50px !important",
    display: "flex",
  },
  loading: {
    margin: 'auto',
    width: '100px !important',
    height: '100px !important',
  },
  page: {
    background: "linear-gradient( 90deg , #313131 0%, #000000 100%)",
    paddingTop: 60,
    height: '100vh',
  },
  chipRating: {
    background: "#fdf3ff",
    color: "#673ab7",
    fontWeight: 900,
  },
  chip: {
    fontWeight: 900,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px',
  },
  titleBox: {
    fontFamily: "sans-serif",
    letterSpacing: "2px",
    padding: '19px',
    fontSize: '44px',
    "color-interpolation": "linear-gradient( 90deg , #F27A54 0%, #A154F2 100%)",
    textShadow: "0px 0px 16px rgb(0 0 0 / 83%)",
    background: "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
    color: "transparent",
    "-webkit-background-clip": "text",
    "background-clip": "text",
    "font-variant-caps": "small-caps",
  },
  columnInfo: {
    color: '#7b7b7b',
    lineHeight: 2,
    display: "block",
  },
  link: {
    color: 'gray',
    background: "linear-gradient( 90deg , #313131 0%, #000000 100%)",
    padding: 20,
    display: 'flex',
  },
  minorInfos: {
    letterSpacing: '1px',
    fontWeight: 'bold',
    fontVariant: "all-small-caps",
    color: 'lightgray',
    padding: 20,
  },
  idmb: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  isfavorite: {
    width: 30,
    height: 30,
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
    color: '#ff9800',
    '&:hover': {
      color: 'gray',
      transition: '200ms ease-out',
    },
    zIndex: theme.zIndex.drawer,
  },
  poster: {
    position: 'absolute',
    right: '5%',
    top: '5%',
    width: 300,
    height: 400,
    top: 67,
    transform: 'rotate(9deg) translateZ(0)',
    filter: 'drop-shadow(2px 4px 6px black)',
    borderRadius: '.75rem',
    '&:hover': {
      filter: 'none',
      transition: '500ms',
    },
  },
}));

export default useStyles;
