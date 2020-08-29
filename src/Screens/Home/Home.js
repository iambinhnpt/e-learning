import React, { Component } from "react";
import CoursesItem from "../../Components/CoursesItems/CoursesItem";
import Axios from "axios";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center m-5">DANH SÁCH KHÓA HỌC</h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => (
              <div className="col-3 mt-5" key={index}>
                <CoursesItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSES",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
}

const mapStateToTop = (state) => {
  return {
    courseList: state.CourseReducer.course,
  };
};

export default connect(mapStateToTop)(Home);
