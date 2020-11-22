import React from "react";
import useStyles from "./styles";

function Carousel() {
  const classes = useStyles();
  return (
    <div className="Carousel p-3">
      <div
        className={`carousel-banner container-fluid d-flex
        flex-column justify-content-center align-items-center
        ${classes.banner}`}
      >
        <h1>Thông tin sách ký gửi</h1>
        <ol className={`breadcrumb-banner" d-flex ${classes.breadcrums}`}>
          <li className="breadcrumb-item">
            <a className={classes.li} href="#">
              Trang chủ
            </a>
          </li>
          <li className={`breadcrumb-item active ${classes.li}`}>Ký gửi</li>
        </ol>
      </div>
    </div>
  );
}

export default Carousel;
