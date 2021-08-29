import React from "react";
import { makeStyles } from "@material-ui/styles";
import { InputBase, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  inputTitleRoot: {
    padding: theme.spacing(1.5, 2, 0, 2)
  },
  bg:{
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.83)",
    width: '90px',
    background: 'linear-gradient(90deg, #F27A54 0%, #A154F2 100%)',
    padding: '8px 8px 8px 16px',
    borderRadius: '20px 20px 20px 20px',
  },
 textTitle: {
    padding: 0,
    fontWeight: 500,
    fontSize: "11px",
    color: theme.palette.text.primary,
    lineHeight: theme.spacing(0.18),
    display: "flex",
    flexWrap: "wrap",
    textTransform: "uppercase",
}
}));

export default function ({ title }) {
  const classes = useStyles();

  return (
    <>
    <div className={classes.bg}>
          <span className={classes.textTitle}>
            Assistido
          </span>
        </div>
    </>
  );
}
