import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  description: {
    display: 'flex',
  },
  titleBox: {
    display: 'flex',
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
    width: 180,
    height: 270,
    borderRadius: '.75rem',
    '&:hover': {
      filter: 'none',
      transition: '500ms',
    },
  },
}));

export default useStyles;
