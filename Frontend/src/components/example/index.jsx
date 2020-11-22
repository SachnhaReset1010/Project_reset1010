import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useStyles from "./styles";

const MultipleImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const classes = useStyles();
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  return (
    <>
      <div>
        <div className={classes.formItem}>
          <Row>
            <Col>
              <h5>Upload mặt trước</h5>
              <input
                type="file"
                multiple
                name="anhMatTruoc"
                className="form-control-file"
                aria-describedby="helpId"
                onChange={handleImageChange}
              />
            </Col>
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
                className="form-control-file"
                onChange={handleImageChange}
              />
              <div className="label-holder">
                <label htmlFor="file" className="label">
                  <i className="material-icons">add_a_photo</i>
                </label>
              </div>
            </Col>
            <div className="result">{renderPhotos(selectedFiles)}</div>

            <Col>
              <div></div>
            </Col>
          </Row>
        </div>
        <div className="my-3">
          <Row>
            <Col>
              <button className="btn btn-success">Gửi yêu cầu</button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default MultipleImageUpload;
