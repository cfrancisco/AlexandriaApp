import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.bgColor,
    zIndex: theme.zIndex.drawer,
    boxShadow: 'none',
    width: '100%',
    height: '80px',
    paddingTop: '15px',
  },
  titlePage: {
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
  hide: {
    display: 'none',
  },
  children: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
