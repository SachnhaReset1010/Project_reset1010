import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    logo: {
      width: "130px",
    },
    button: {
      width: "30px",
      padding: "3px",
    },
    menuIcon: {
      width: "100%",
    },
    headerIcon: {
      width: "1.4em",
    },
    collapse: {
      position: "fixed",
      right: "0",
      maxWidth: "30%",
      top: "0",
    },
  };
});
export default useStyles;
