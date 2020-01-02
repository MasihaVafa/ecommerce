import React, { Component } from "react";
import { Badge, Icon, Popover } from "antd";
import "./asset/base.scss";
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar  navbar-light bg-light">
        <a className="navbar-brand ml-5">LOGO</a>
        <form className="form-inline">
          <Popover
            placement="bottomRight"
            title={text}
            content={content}
            trigger="click"
          >
            <Badge count={3}>
              <button className="btn btn-outline-success my-1 my-sm-0">
                <Icon className="navbarIcon" type="shopping-cart" />
              </button>
            </Badge>
          </Popover>
          <Popover
            placement="bottomRight"
            title={text}
            content={content}
            trigger="click"
          >
            <button className="btn btn-outline-secondary  ml-4 my-1 mr-sm-4">
              <Icon className="navbarIcon" type="user" />
            </button>
          </Popover>
        </form>
      </nav>
    );
  }
}
export default Navbar;
