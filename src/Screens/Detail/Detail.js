import React, { Component } from "react";
import { connect } from "react-redux";
import { FETCH_DETAIL } from "../../Redux/Const/Const";
import { courseService } from "../../Services";
import { createAction } from "../../Redux/Actions/action";
import { fetchCourseDetail } from "../../Redux/Actions/user";

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
    this.props.dispatch(fetchCourseDetail(this.props.match.params.courseID));
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
