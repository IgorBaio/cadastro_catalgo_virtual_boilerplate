import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  withStyles,
  Typography,
  Fade,
} from "@material-ui/core";
import useStyles from "./styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    borderBottomWidth: 0,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#e4e4e4",
    },
    borderBottomWidth: 2
  },
}))(TableRow);

export default function TablesList(props) {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      elevation={4}
      className={classes.tableContainer}
    >
      <Table style={{ borderCollapse: "inherit" }} className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow>
            {props.dataHeader?.map((item, index) => {
              let style = {
                paddingTop: 15,
                paddingBottom: 15,
              };

              return (
                <TableCell
                  className={classes.textHeader}
                  align={item.align || "left"}
                  style={style}
                >
                  {item.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataRows?.map((row, index) => (
            <StyledTableRow style={{ borderCollapse: "inherit" }}>
              <Fade in={true} timeout={2000}>
                <>
                  {props.dataHeader?.map((column) => {
                    let style = {
                      paddingTop: 15,
                      paddingBottom: 15,
                    };

                    return (
                      <StyledTableCell
                        style={style}
                        align={column.align || "left"}
                        scope="row"
                      >
                        <Typography className={classes.contentText}>
                          {row[column.id].content}
                        </Typography>
                      </StyledTableCell>
                    );
                  })}
                </>
              </Fade>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
