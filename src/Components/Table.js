import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import { auth, db, firebase } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Dimensions from "react-dimensions";
import logo from "../assets/imgs/uwn.png";
const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: 15,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.dark,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `10px`,
    height: "100%",
    width: "99%",
    marginTop: theme.spacing(7),
  },
  link: {
    marginTop: 25,
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#CCC",
    boxShadow: "0 3px 5px 2px rgba(120, 120, 120, .3)",
  },
}));

const SimpleTable = (props) => {
  const classes = useStyles();
  const [data, updateData] = useState([]);
  const [firstLoad, setLoad] = useState(true);
  let isLoading = true;
  const [messagesCollection, loadingMessages, error] = useCollection(
    db.collection("produtos").orderBy("created", "desc").limit(500)
  );
  useEffect(() => {
    const newMessages =
      messagesCollection?.docs
        .map((doc) => {
          return {
            ...doc.data(),
            key: doc.id,
          };
        })
        .reverse() || [];

    updateData(newMessages);
    console.log(newMessages);
  }, [messagesCollection]);

  async function deleteFunc(toInput) {
    console.log(toInput);
    db.collection("produtos")
      .doc(toInput)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  if (firstLoad) {
    setLoad(false);
  }

  if (data.length > 0) isLoading = false;
  const preparaId = (id) => {
    deleteFunc(id);
  };

  if (props.containerWidth <= 500) {
    return (
      <div className={classes.paper}>
        <img style={{ height: 80, width: 80 }} src={logo} />
        <Typography component="h1" variant="h5">
          Lista de produtos
        </Typography>

        {isLoading ? (
          <CircularProgress />
        ) : (
          <TableContainer
            style={{
              width: "100vw",
              margin: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component={Paper}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    className={classes.header}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row) => (
                  <TableRow key={row.produto.nome}>
                    <TableCell align="center">
                      <img
                        style={{ height: 100, width: 100 }}
                        src={row.produto.file.base64 || row.produto.file}
                      />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", marginRight: 10 }}
                        >
                          NOME:{" "}
                        </Typography>
                        <Typography>{" " + row.produto.nome}</Typography>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", marginRight: 10 }}
                        >
                          CATEGORIA:{" "}
                        </Typography>
                        <Typography>{" " + row.produto.categoria}</Typography>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", marginRight: 5 }}
                        >
                          DESCRI????O:{" "}
                        </Typography>
                        <Typography>{" " + row.produto.descricao}</Typography>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", marginRight: 5 }}
                        >
                          QUANTIDADE:{" "}
                        </Typography>
                        <Typography>{" " + row.produto.quantidade}</Typography>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", marginRight: 5 }}
                        >
                          PRE??O:{" "}
                        </Typography>
                        <Typography>{" " + row.produto.preco}</Typography>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginRight: "30%",
                          marginLeft: "30%",
                        }}
                      >
                        <Link
                          to={{ pathname: "/produto_view", state: row }}
                          id={row.produto.key}
                          name={row.produto.nome}
                          style={{ display: "flex", flex: 1 }}
                        >
                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            preventDefault
                            className={classes.submit}
                            onClick={() => {}}
                          >
                            <EditIcon />
                          </Button>
                        </Link>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          preventDefault
                          className={classes.submit}
                          onClick={() => preparaId(row.key)}
                          style={{ display: "flex", flex: 1, marginLeft: "5%" }}
                        >
                          X
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Link className={classes.link} to="/add">
          <Typography align="left">
            &#x2B9C; Voltar para o cadastro de produtos
          </Typography>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.paper}>
      <img style={{ height: 80, width: 80 }} src={logo} />
      <Typography component="h1" variant="h5">
        Lista de produtos
      </Typography>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <TableContainer
          style={{
            width: "100vw",
            margin: "0 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.header}>
                  Nome
                </TableCell>
                <TableCell align="center" className={classes.header}>
                  Categoria
                </TableCell>
                <TableCell align="center" className={classes.header}>
                  Descri????o
                </TableCell>
                <TableCell align="center" className={classes.header}>
                  Quantidade
                </TableCell>
                <TableCell align="center" className={classes.header}>
                  Imagem
                </TableCell>
                <TableCell align="center" className={classes.header}>
                  Pre??o
                </TableCell>
                <TableCell align="center" className={classes.header}>
                  Editar
                </TableCell>
                <TableCell align="center" className={classes.header}>
                  Apagar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row?.produto?.nome}>
                  <TableCell align="center">{row?.produto?.nome}</TableCell>
                  <TableCell align="center">{row?.produto?.categoria}</TableCell>
                  <TableCell align="center">{row?.produto?.descricao}</TableCell>
                  <TableCell align="center">{row?.produto?.quantidade}</TableCell>
                  <TableCell align="center">
                    <img
                      style={{ height: 100, width: 100 }}
                      src={row?.produto?.file?.base64 || row?.produto?.file}
                    />
                  </TableCell>
                  <TableCell align="center">{row.produto.preco}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={{ pathname: "/produto_view", state: row }}
                      id={row?.produto?.key}
                      name={row?.produto?.nome}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        preventDefault
                        className={classes.submit}
                        onClick={() => {}}
                      >
                        <EditIcon />
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      preventDefault
                      className={classes.submit}
                      onClick={() => preparaId(row?.key)}
                    >
                      X
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Link className={classes.link} to="/add">
        <Typography align="left">
        &#171; Voltar para o cadastro de produtos
        </Typography>
      </Link>
    </div>
  );
};
export default Dimensions()(SimpleTable);
