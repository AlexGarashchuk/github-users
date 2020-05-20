import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  nav: {
    display: "flex",
    color: "#000",
    justifyContent: "center",
    padding: '20px 0',
  },
  item: {
    width: '30px',
    height: '30px',
    padding: "5px 5px",
    margin: "0 5px",
    boxSizing: "border-box",
    cursor: 'pointer'
  },
  activeItem: {
    width: '30px',
    height: '30px',
    padding: "5px 10px",
    margin: "0 5px",
    boxSizing: "border-box",
    borderRadius: "100%",
    border: "1px solid #000",
    cursor: 'pointer'
  },
}));

export default function Pagination({
  userPerPage,
  totalUsers,
  paginate,
  currentPage,
}) {
  const classes = useStyles();
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? classes.activeItem : classes.item
            }
          >
            <p onClick={() => paginate(number)}>{number}</p>
          </li>
        ))}
      </nav>
    </div>
  );
}
