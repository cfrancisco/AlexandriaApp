import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    paddingTop: 60,
  },
  notFound: {
    marginTop: '80px',
    textAlign: 'center',
    "font-variant-caps": "small-caps",
    paddingBotton: 10,
  },
  areaTitle: {
    marginLeft: '20%',
    "font-variant-caps": "small-caps",
    marginBottom: "30px",
  },
  movieIcon: {
    paddingTop: '5px',
    color: '#a869e8',
  },
  rootMovieList: {
    display: 'flex',
    marginLeft: '20%',
    marginRight: '20%',
    flexWrap: 'wrap',
    '& div:nth-child(odd)': {
      transform: 'rotate(2deg) translateZ(0)',
      transition: '0.5s',
      '&:hover': {
        transform: 'rotate(0deg) translateZ(0) scale(1.2)',
        zIndex: theme.zIndex.appBar,
      },
    },
    '& div:nth-child(even)': {
      transform: 'rotate(-2deg) translateZ(0)',
      transition: '0.5s',
      '&:hover': {
        transform: 'rotate(0deg) translateZ(0) scale(1.2)',
        zIndex: theme.zIndex.appBar,
      },
    },
  },
}));

export default useStyles;
