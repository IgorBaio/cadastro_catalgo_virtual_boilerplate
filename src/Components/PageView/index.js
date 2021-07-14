import React from "react";
import { Link, withRouter } from "react-router-dom";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import Logo from "../../svg/Logo";
import Dimensions from "react-dimensions";

function PageView(props) {
  const hasHeader = props.hasHeader === true ? true : false;
  const hasFooter = props.footer || false;
  const hasStyleButton = props.hasStyleButton === true ? true : false;

  const styles = useStyles();

  const goHome = () => {
    props.history.push("/");
  };

  return (
    <div id="wrapper" className={styles.container}>
      {hasHeader && (
        <>
          <div
            className={
              props.containerWidth <= 400
                ? styles.bgHeaderMobile
                : props.containerWidth <= 515
                ? styles.bgHeaderSecondMobile
                : styles.bgHeader
            }
          ></div>
          <div
            className={
              props.containerWidth <= 500 ? styles.headerMobile : styles.header
            }
          >
            <Container maxWidth="lg">
              <div
                className={
                  props.containerWidth <= 400
                    ? styles.headerTopMobile
                    : styles.headerTop
                }
              >
                <Link onClick={goHome} className={styles.logo}>
                  {" "}
                  <Logo className={styles.logoContent} />
                </Link>
                <div
                  className={
                    props.containerWidth <= 500
                      ? styles.infoUserMobile
                      : styles.infoUser
                  }
                >
                  <span
                    className={
                      props.containerWidth <= 500
                        ? styles.candidatoMobile
                        : styles.candidato
                    }
                  >
                    <strong>Igor Baio </strong>
                    Teste de Front-end
                  </span>
                  {hasStyleButton && (
                    <div
                      className={
                        props.containerWidth <= 500
                          ? styles.divCbMobile
                          : styles.divCb
                      }
                      onClick={() =>
                        props.history.push({
                          pathname: "/estilo",
                        })
                      }
                    >
                      <span
                        className={
                          props.containerWidth <= 500
                            ? styles.userLabelMobile
                            : styles.userLabel
                        }
                      >
                        <strong>CB </strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {props.subHeader && (
                <div
                  className={styles.subHeader}
                  style={
                    props.containerWidth <= 500 ? { marginTop: "10%" } : {}
                  }
                >
                  <div>{props.subHeader || null}</div>
                </div>
              )}
            </Container>
          </div>
        </>
      )}
      <div className={styles.page} style={props.stylePage}>
        <Container maxWidth="lg">
          <div>{props.pageContent || null}</div>
          {hasFooter && props.footer}
        </Container>
      </div>

      <div style={{ margin: 10, padding: 10 }} />
    </div>
  );
}

export default Dimensions()(withRouter(PageView));
