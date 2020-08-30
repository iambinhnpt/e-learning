import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CoursesItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card text-left p-2">
        <img
          className=""
          src={item.hinhAnh}
          alt="src ảnh bị lỗi"
          style={{ width: "100%", height: 200 }}
        />
        <p className="lead font-weight-bold">{item.tenKhoaHoc}</p>
        <p className="lead">Intructor: {item.nguoiTao.hoTen}</p>
        <p className="lead">Views: {item.luotXem}</p>
        <Link
          to={`/detail/${this.props.item.maKhoaHoc}`}
          className="btn btn-success"
        >
          Go to detail
        </Link>
      </div>
    );
  }
}
