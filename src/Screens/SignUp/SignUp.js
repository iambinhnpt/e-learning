import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { userService } from "../../Services";
import { signupUserSchema } from "../../Services/user";

class SignUp extends Component {
  _handleSubmit = (value) => {
    userService
      .signUp(value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center m-5">Sign Up</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            email: "",
            maNhom: "GP01",
          }}
          validationSchema={signupUserSchema}
          onSubmit={this._handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label htmlFor="">Tài Khoản</label>
                <Field
                  className="form-control"
                  type="text"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan" />
              </div>
              <div className="form-group">
                <label htmlFor="">Mật Khẩu</label>
                <Field
                  className="form-control"
                  type="password"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label htmlFor="">Họ Tên</label>
                <Field
                  className="form-control"
                  type="text"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="">Số Điện Thoại</label>
                <Field
                  className="form-control"
                  type="text"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="soDT" />
              </div>
              <div className="form-group">
                <label htmlFor="">Mã Nhóm</label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <ErrorMessage name="maNhom" />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}
export default SignUp;
