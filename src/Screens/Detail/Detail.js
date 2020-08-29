import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    const { courseDetail } = this.props;
    return (
      <div>
        <img src={courseDetail.hinhAnh} alt="hinhAnh"></img>
        <p>{courseDetail.tenKhoaHoc}</p>
      </div>
    );
  }

  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=001",
    })
      .then((res) =>
        this.props.dispatch({
          type: "FETCH_DETAIL",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err.response));
  }
}

const mapStateToProps = (state) => {
  return {
    courseDetail: state.CourseReducer.courseDetail || {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      hinhAnh: "",
      nguoiTao: {
        taiKhoan: "",
        hoTen: "",
      },
    },
  };
};

export default connect(mapStateToProps)(Detail);
