import React, { Component } from "react";
import CoursesItem from "../../Components/CoursesItems/CoursesItem";
import { connect } from "react-redux";
import { fetchCourses } from "../../Redux/Actions/user";
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
    this.props.dispatch(fetchCourses());
  }
}

const mapStateToTop = (state) => {
  return {
    courseList: state.CourseReducer.course,
  };
};

export default connect(mapStateToTop)(Home);
