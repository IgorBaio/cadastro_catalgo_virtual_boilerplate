import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PriceInput from "../Components/PriceInput";
import ReactFileReader from "react-file-reader";
import { auth, db, firebase } from "../firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.dark,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
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
  moneyInput: {
    marginTop: 12,
    padding: "0 0 10px 15px",
    paddingTop: 15,
    color: `#666`,
    width: "100%",
    height: 30,
    borderWidth: "0 0 2px 0",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: 800,
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: "#666",
      fontStyle: "italic",
      fontWeight: 400,
      fontFamily: "Montserrat",
      padding: "0 0 5px 5px",
    },
  },
  styleInput: {
    fontFamily: "Montserrat",
  },
}));

const ViewProduto = () => {
  let location = useLocation();
  const [id, setId] = useState(location.state.key);
  const [nome, setNome] = useState(location.state.produto.nome);
  const [preco, setPreco] = useState(location.state.produto.preco);
  const [descricao, setDescricao] = useState(location.state.produto.descricao);
  const [categoria, setCategoria] = useState(location.state.produto.categoria);
  const [quantidade, setQuantidade] = useState(
    location.state.produto.quantidade
  );
  const [message, setMessage] = useState("Nada salvo na sessão ainda.");
  const [selectedFile, setSelectedFile] = useState(location.state.produto.file);

  const handleFiles = (files) => {
    setSelectedFile({ name: files.fileList[0].name, base64: files.base64 });
  };

  async function updateItem(toInput) {
    db.collection("produtos")
      .doc(toInput.id)
      .update({
        produto: {
          nome: toInput.nome,
          preco: toInput.preco,
          descricao: toInput.descricao,
          quantidade: toInput.quantidade,
          categoria: toInput.categoria,
          file: toInput.file,
        },
        created: firebase.firestore.FieldValue.serverTimestamp(),
      }).then(() => {
        setMessage("Dado editado com sucesso");
      })
      .catch((error) => {
        setMessage("Falha na edição");
      });
  }

  const handlePrecoChange = (event) => setPreco(event.target.value);
  const handleNomeChange = (event) => setNome(event.target.value);
  const handleDescricaoChange = (event) => setDescricao(event.target.value);
  const handleCategoriaChange = (event) => setCategoria(event.target.value);
  const handleQuantidadeChange = (event) => setQuantidade(event.target.value);

  const handleSubmit = (variables) => {
    const toInput = {
      id: id,
      nome: nome,
      preco: preco,
      descricao: descricao,
      quantidade: quantidade,
      categoria: categoria,
      file: selectedFile
    };
    updateItem(toInput);
    setNome("");
    setPreco("");
    setDescricao("");
    setCategoria("");
    setQuantidade("");
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <DashboardIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Atualização do Produto
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                value={nome}
                label="Nome"
                name="name"
                autoComplete="name"
                onChange={handleNomeChange}
                className={classes.styleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="quantidade"
                name="quantidade"
                variant="outlined"
                required
                fullWidth
                value={quantidade}
                id="quantidade"
                label="Quantidade"
                onChange={handleQuantidadeChange}
                className={classes.styleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="categoria"
                value={categoria}
                label="Categoria"
                name="categoria"
                autoComplete="categoria"
                onChange={handleCategoriaChange}
                className={classes.styleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="descricao"
                value={descricao}
                label="Descrição"
                name="descricao"
                autoComplete="descricao"
                onChange={handleDescricaoChange}
                className={classes.styleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <PriceInput
                onChange={handlePrecoChange}
                value={preco}
                preco={preco}
                setPreco={setPreco}
              />
            </Grid>
            <Grid item xs={12}>
              <ReactFileReader base64={true} handleFiles={handleFiles}>
                <Button variant="contained" component="label">
                  Enviar arquivo
                </Button>
              </ReactFileReader>
              {selectedFile && <Typography>{selectedFile.name}</Typography>}
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={handleSubmit}
          >
            Atualizar
          </Button>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
      <Link className={classes.link} to="/view">
        <Typography align="left">
          &#x2B9C; Voltar para visualizar produtos no estoque
        </Typography>
      </Link>
    </Container>
  );
};

export default ViewProduto;
