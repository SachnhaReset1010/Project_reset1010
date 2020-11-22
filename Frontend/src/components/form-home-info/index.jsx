import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Checkbox from "@material-ui/core/Checkbox";
import Dropdown from "react-bootstrap/Dropdown";
import useStyles from "./styles";
function FormHouseInfo() {
  const classes = useStyles();
  return (
    <div>
      <div className="form__content form p-3">
        <Row>
          <Col sx={12}>
            <Row>
              <div
                className={`d-flex justify-content-around align-items-center my-2 w-100 ${classes.formItem}`}
              >
                <h5 className="mb-0"> Loại giao dịch</h5>
                <ul className={`mb-0 d-flex ${classes.listCheckbox}`}>
                  <li className={classes.li}>
                    <div className={`nhaBan ${classes.loaiNha}`}>
                      <Checkbox
                        id="transaction_type_buy"
                        // onChange={handleChange}
                        // inputProps={{ "aria-label": "primary checkbox" }}
                        className={classes.checkbox}
                      />
                      <label className="m-0" htmlFor="transaction_type_buy">
                        <span />
                        Sách bán
                      </label>
                    </div>
                  </li>
                  <li className={classes.li}>
                    <div
                      className={`nhaThue ${classes.loaiNha} ${classes.nhaThue}`}
                    >
                      <Checkbox
                        id="transaction_type_rent"
                        // onChange={handleChange}
                        // inputProps={{ "aria-label": "secondary checkbox" }}
                        className={classes.checkbox}
                      />
                      <label className="m-0" htmlFor="transaction_type_rent">
                        <span />
                        Sách thuê
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </Row>
          </Col>

          <Col xs={12}>
            <Row>
              <div
                className={`d-flex justify-content-around align-items-center my-2 w-100 px-3 ${classes.formItem}`}
              >
                <h5>Đầu Sách</h5>
                <Dropdown>
                  <Dropdown.Toggle variant="#23727F" id="dropdown-basic">
                    Nhà Phố
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Nhà Phố</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Biệt Thự</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Đất nền và Kho xưởng
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Row>
          </Col>
          <Col xs={12}>
            <Row>
              <div
                className={`d-flex justify-content-center align-items-center my-2 w-100 px-3 ${classes.formItem}`}
              >
                <Col>
                  <h5 className="text-center">Giá sách</h5>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Giá bán (vnd)"
                    className="mb-3 mr-3"
                  />
                  <input type="text" placeholder="Giá thuê (vnd/tháng)" />
                </Col>
              </div>
            </Row>
          </Col>
          <Col xs={12}>
            <Row></Row>
          <div
                className={`d-flex justify-content-around align-items-center my-2 w-100 px-3 ${classes.formItem}`}
              >
                
                </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FormHouseInfo;
