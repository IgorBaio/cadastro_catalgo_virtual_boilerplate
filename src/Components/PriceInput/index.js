import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

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

export default ({
    value,
    onChange,
    setPreco,
preco,
})=> {
  const classes = useStyles();

 

  const handleMoneyBlur = () => {
    // if (!preco || preco === "R$ 0") {
    //   // setAlert()
    //   setPreco("");
    // } else if (typeof preco === "string") {
    //   if (preco === "0,00") return;
    //   setPreco(
    //     parseFloat(preco.replace(".", "").replace(",", ".").replace("R$", ""))
    //   );
    // }
  };

 
  const defaultMaskOptions = {
    prefix: "R$ ",
    // suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
    decimalLimit: 2, // how many digits allowed after the decimal
    // integerLimit: 10, // limit length of integer numbers
    requireDecimal: false,
    allowNegative: false,
    allowLeadingZeroes: false,
  };

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
    <MaskedInput
      mask={currencyMask}
      className={classes.moneyInput}
      id={"price"}
      onChange={onChange}
      value={value}
      label={"Preço"}
      placeholder="R$ 00,00"
      onBlur={handleMoneyBlur}
    />
  );
}
