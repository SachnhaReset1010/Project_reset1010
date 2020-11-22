import { makeStyles } from "@material-ui/core";
import banner from "../../assets/img/banner.jpeg";
const useStyles = makeStyles(() => {
  return {
    banner: {
      backgroundImage: `url(${banner})`,
      backgroundPosition: "center",
      height: "300px",
      backgroundSize: "cover",
      borderRadius: "16px",
      color: "#fff",
    },
    breadcrums: {
      listStyleType: "none",
    },
    li: {
      color: "#fff",
      textDecoration: "none",
    },
  };
});
export default useStyles;
