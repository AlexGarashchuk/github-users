import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  nav: {
    display: "flex",
    color: "#000",
    justifyContent: 'center'
  },
  item: {
    padding: "5px 10px",
    margin: "0 5px",
    boxSizing: "border-box",
  },
  activeItem: {
    borderRadius: "100%",
    border: "1px solid #000",
  }
}));

export default function Pagination({ userPerPage, totalUsers, paginate, currentPage }) {
  debugger;
  const classes = useStyles();
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
 
    pageNumbers.push(i);
  }
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.item}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
}
