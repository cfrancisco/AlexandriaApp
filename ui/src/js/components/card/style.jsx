import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    rating: {
      fontWeight: 700,
      top: '10px',
      left: '10px',
      position: 'absolute',
      background: '#333333',
      letterSpacing: '1.1px',
      borderRadius: '50%',
      padding: '6px 5px 3px 5px',
      color: '#ffffff',
      fontSize: '13px',
    },
    title: {
      fontWeight: 700,
      letterSpacing: '1.1px',
      position: 'absolute',
      left: '20px',
      top: '30px',
    },
    year: {
      letterSpacing: '1.1px',
      position: 'absolute',
      fontSize: '11px',
      right: '10px',
      top: '8px',
    },
    poster: {
      width: 180,
      height: 270,
      borderRadius: '.75rem',
      '&:hover': {
        filter: 'none',
        transition: '500ms',
      },
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
    rootCard: {
      width: 180,
      height: 270,
      position: 'relative',
      cursor: 'pointer',
      overflow: 'unset',
      minWidth: 180,
      margin: '5px',
      borderRadius: '.75rem',
      boxShadow:
        '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    },
    hoverCard: {
      width: '180px',
      border: '0 solid',
      cursor: 'pointer',
      bottom: '0px',
      color: 'white',
      position: 'absolute',
      transition: '0.5s',
      height: '30px',
      overflow: 'hidden',
      transform: 'none !important',
      fontFamily: 'inherit',
      borderTop: '4px solid #673ab7',
      borderRadius: '10px 10px 10px 10px',
      background: '#000000b5',
      boxShadow:
        '-4px - 10px 20px 8px rgb(0 0 0 / 19 %), -1px - 19px 9px 0px rgb(0 0 0 / 23 %)',
      '&:hover': {
        height: '120px',
        transform: 'none !important',
      },
    },
    actions: {
      height: 273,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'normal',
      flexDirection: 'column',
    },
    media: {
      height: 140,
      width: '100%',
    },
  };
});

export default useStyles;
