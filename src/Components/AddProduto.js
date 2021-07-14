import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReactFileReader from "react-file-reader";
import { auth, db, firebase } from "../firebase";
import PriceInput from "../Components/PriceInput";
import logo from "../assets/imgs/uwn.png";
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
    width: "100%", // Fix IE 11 issue.
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
    marginRight: "0%",
    alignSelf: "flex-end",
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

export default function AddProduto() {
  const classes = useStyles();
  const [firstLoad, setLoad] = useState(true);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preco, setPreco] = useState(null);

  const handleNomeChange = (event) => setNome(event.target.value);
  const handleDescricaoChange = (event) => setDescricao(event.target.value);
  const handleCategoriaChange = (event) => setCategoria(event.target.value);
  const handleQuantidadeChange = (event) => setQuantidade(event.target.value);
  const [message, setMessage] = useState("Nada salvo na sessão ainda.");


  async function setProduto(toInput) {
    db.collection("produtos")
      .add({
        produto: {
          nome: toInput.nome,
          preco: toInput.preco,
          descricao: toInput.descricao,
          quantidade: toInput.quantidade,
          categoria: toInput.categoria,
          file: toInput.file,
        },
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setMessage("Dado cadastrado com sucesso");
      })
      .catch((error) => {
        setMessage("Falha no cadastro");
      });
  }

  const handleFiles = (files) => {
    setSelectedFile({ name: files.fileList[0].name, base64: files.base64 });
  };
  const handleSubmit = (variables) => {
    const toInput = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      quantidade: quantidade,
      categoria: categoria,
      file: selectedFile,
    };
    setProduto(toInput);
    setNome("");
    setPreco(null);
    setDescricao("");
    setCategoria("");
    setQuantidade("");
    setSelectedFile(null);
  };

  if (firstLoad) {
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img style={{ height: 80, width: 80 }} src={logo} />
        <Typography component="h1" variant="h5">
          Cadastro Produto
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
                multiline
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
                onChange={(e) => {
                  setPreco(e.target.value);
                }}
                setPreco={setPreco}
                preco={preco}
                value={preco}
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
            Salvar
          </Button>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>

        <Link className={classes.link} to="/view">
          <Typography align="right">
            Visualizar produtos no estoque &#10148;
          </Typography>
        </Link>
      </div>
    </Container>
  );
}
