import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    formItem: {
      border: "1px solid #DCDCDC",
      borderRadius: "8px",
      padding: "3px 10px",
    },
    listCheckbox: {
      listStyleType: "none",
      color: "#23727F",
      fontWeight: "500",
    },

    loaiNha: {
      borderRadius: "4px",
      padding: "0px 7px 0px 2px",
      minHeight: "32px",
    },
    nhaThue: {
      color: "#237F63",
    },
    li: {
      paddingRight: "10px",
      margin: 0,
    },
    checkbox: {
      backgroundC: "#fff",
      "&:hover": {
        background: "transparent",
      },
    },
  };
});
export default useStyles;
