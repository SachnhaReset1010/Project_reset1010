import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useStyles from "./styles";
import "./style.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Axios from "axios";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

const UploadHomeInfo = () => {
  let [selectedFiles, setSelectedFiles] = useState(null);
  let [linkImg, setLinkImg] = useState(null);
  let [selectedFiles2, setSelectedFiles2] = useState(null);
  let [linkImg2, setLinkImg2] = useState(null);
  const classes = useStyles();
  let currentLink = "";
  const handleUpload = (e) => {
    // let fileMatTruoc = listImgFront;
    // let fileNoiThat = listImgFurniture;
    // console.log(fileMatTruoc);
    // console.log(fileNoiThat);
    // let formdata = new FormData();
    // for (var i = 0; i < fileMatTruoc.length; i++) {
    //   formdata.append("imageFrontHouse", fileMatTruoc[i]);
    // }
    // for (var i = 0; i < fileNoiThat.length; i++) {
    //   formdata.append("imageFurniture", fileNoiThat[i]);
    // }
    // formdata.append("name", "Thao Truong");
    // console.log("mattruoc", formdata.getAll("imageFrontHouse"));
    // console.log("ngoinha", formdata.getAll("imageFurniture"));
    Axios({
      url: `/extractText`,
      method: "POST",
      headers: {
        authorization: ``,
      },
      data: selectedFiles2,
    })
      .then((res) => {})
      .catch((error) => {
        // console.log(error);
      });
    Axios({
      url: `/detectObject`,
      method: "POST",
      headers: {
        authorization: ``,
      },
      data: selectedFiles,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.id === "anhMatTruoc") {
      setSelectedFiles((selectedFiles = e.target.files[0]));
      setLinkImg((linkImg = URL.createObjectURL(e.target.files[0])));
    } else {
      setSelectedFiles2((selectedFiles2 = e.target.files[0]));
      setLinkImg2((linkImg2 = URL.createObjectURL(e.target.files[0])));
    }
  };
  // URL.createObjectURL(e.target.files[0])
  const handleDelete = (item) => {};

  const renderPhotosFront = () => {
    return (
      <div className="div-photo-pre">
        <img className="photo-preview" src={linkImg} />
      </div>
    );
  };
  const renderPhotosFur = () => {
    return (
      <div className="div-photo-pre">
        <img className="photo-preview" src={linkImg2} />
      </div>
    );
  };

  return (
    <>
      <div>
        <div className={classes.formItem}>
          <Row>
            <Col xs={12}>
              <h5>Upload mặt trước nghà</h5>
              <input
                type="file"
                id="anhMatTruoc"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <div className="label-holder">
                <label htmlFor="anhMatTruoc" className="label">
                  <CameraAltIcon />
                </label>
              </div>
            </Col>
            <div className="result pl-5 ">
              <Row>{renderPhotosFront()}</Row>
            </div>
          </Row>
        </div>
        <div
          className={`d-flex justiy-content-around my-3 ${classes.formItem}`}
        >
          <Row>
            <Col xs={12}>
              <h5>Upload ảnh trong nhà</h5>
              <input
                type="file"
                multiple
                id="anhTrongNha"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <div className="label-holder">
                <label htmlFor="anhTrongNha" className="label">
                  <CameraAltIcon />
                </label>
              </div>
            </Col>
            <div className="result pl-5">
              <Row>{renderPhotosFur()}</Row>
            </div>
          </Row>
        </div>
        <div className="my-3">
          <Row>
            <Col>
              <button
                className="btn btn-success"
                onClick={(e) => handleUpload(e)}
              >
                Gửi yêu cầu
              </button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="notice1 notice col-xl-6">
        <div className="card">
          <h3 className="text-center notice-subtitle">Cảnh báo sai địa chỉ</h3>
          <div className="card-body">
            <h4 className="card-title">
              Chúng tôi phát hiện địa chỉ bạn cung cấp không đúng với địa chỉ
              trên ảnh, vui lòng điều chỉnh lại!
            </h4>
            <p className="card-text">
              <span>Địa chỉ cung cấp:</span>
              <input type="text" className="m-3" />
              <br />
              <span>Địa chỉ trên ảnh:</span>
              <input />
              *Lưu ý nhập 2 input giống nhau.
              <button className="btn"></button>
            </p>
            <button className="btn">Đồng ý</button>
          </div>
        </div>
      </div>
      <div className="notice2 notice col-xl-6">
        <div className="card">
          <h3 className="text-center notice-subtitle">
            Cảnh báo sai hiện trạng
          </h3>
          <div className="card-body">
            <h4 className="card-title">
              Hiện trạng nhà phố bạn cung cấp không đúng với hiện trạng trên ảnh
              nội thất, vui lòng điều chỉnh lại
            </h4>
            <p className="card-text">
              <span>Hiện trạng cung cấp</span>
              <img />
              <span>Hiện trạng trên ảnh</span>
              <img />
            </p>
            <button className="btn">Đồng ý</button>
          </div>
        </div>
      </div>
      <div className="notice3 notice col-xl-6">
        <div className="card">
          <h3 className="text-center notice-subtitle">Cảnh báo Giá bán</h3>
          <div className="card-body">
            <h4 className="card-title">
              Giá bán sản phẩm nhà phố bạn đăng tải đang thấp hơn 40% so với nhà
              phố tương tự trong khu vực. Vui lòng ghi rõ lý do và xác nhận hoặc
              đính chính lại thông tin
            </h4>
            <br />
            <span>
              Trong trường hợp bạn không thể định giá, vui lòng tham khảo giá
              bán <a href="#">Tại đây</a>
            </span>
            <div className="card-text">
              <Dropdown>
                <Dropdown.Toggle variant="#23727F" id="dropdown-basic">
                  Lý do
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Sổ chung</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Lộ giới hẻm</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Quy hoạch giải tỏa
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Chấp nhận bán thấp do cần tiền
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="btn">Xác nhận đúng</button>
              <button className="btn">Đính chính</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadHomeInfo;
