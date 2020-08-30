const { courseService } = require("../../Services");
const { createAction } = require("./action");
const { FETCH_COURSES, FETCH_DETAIL } = require("../Const/Const");

export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchCourseDetail = (id) => {
  return (dispatch) => {
    courseService
      .fetchCourseDetail(id)
      .then((res) => dispatch(createAction(FETCH_DETAIL, res.data)))
      .catch((err) => console.log(err));
  };
};
