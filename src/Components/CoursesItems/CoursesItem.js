import React, { Component } from "react";

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
        <button className="btn btn-success">Go to detail</button>
      </div>
    );
  }
}
