import React, { useState } from "react";
import useStyles from "./styles";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Collapse from "react-bootstrap/Collapse";
import { Button } from "react-bootstrap";
import icMenu from "../../assets/img/ic-menu.svg";
function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="header__content container-fluid p-3">
        <div className="row">
          <div className="header__left col-6">
            <img
              src="https://sachnha.todo.vn/images/svg/ic-logo.svg"
              alt="logo"
              className={classes.logo}
            />
          </div>
          <div className="header__right col-6 d-flex justify-content-end align-items-center">
            <div className="contact mx-2">
              <abbr title="Liên hệ">
                <a href="#">
                  <MenuBookIcon className={classes.headerIcon} />
                </a>
              </abbr>
            </div>
            <div className="account ">
              <a href="">
                <AccountCircleIcon className={classes.headerIcon} />
              </a>
              <span>Sách Nhà</span>
            </div>
            <div className="collapse__menu mx-2 ml-3">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="light"
                className={classes.button}
              >
                <img src={icMenu} alt="MenuIcon" className={classes.menuIcon} />
              </Button>
              <Collapse
                in={open}
                className={classes.collapse}
                onClick={() => setOpen(!open)}
              >
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
