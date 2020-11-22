import Axios from "axios";
export function postImageEstate() {
  return async function (dispatch) {
    try {
      const res = await Axios({
        method: "POST",
        url: "",
        data: {},
      });
      if (res.status === 200 || res.status === 201) {
        alert("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
}
