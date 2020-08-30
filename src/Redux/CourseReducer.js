import { FETCH_COURSES, FETCH_DETAIL } from "./Const/Const";

const initialState = {
  course: [],
  courseDetail: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      state.course = action.payload;
      return { ...state };
    case FETCH_DETAIL:
      console.log(action.payload);
      state.courseDetail = action.payload;
      return { ...state };

    default:
      return state;
  }
};
