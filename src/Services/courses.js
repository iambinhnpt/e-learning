import Axios from "axios";
class CourseSerVices {
  fetchCourse() {
    return Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09",
    });
  }
  fetchCourseDetail(id) {
    return Axios({
      method: "GET",
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    });
  }
}
export default CourseSerVices;
