"use client";
import Breadcrumb from "@/collection/component/Breadcrumb";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Register = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();
  // useEffect(() => {});
  // const handleRegistration = () => {
  //   setRegistered(true);
  // };

  const handleSubmit = (e) => {
    setSubmitting(true);
    postRegister();
    e.preventDefault();
    // handleRegistration();
  };
  async function postRegister() {
    const res = await fetch("http://localhost:1337/api/auth/local/register", {
      method: "post",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 200) {
      localStorage.setItem("auth", data.jwt);
      router.push("/account/login");
    }

    localStorage.getItem("auth");
  }
  return (
    <div className="register">
      <div className="breadcrumb-container">
        <Breadcrumb />
      </div>
      <form className="layout-register-account" onSubmit={handleSubmit}>
        <div className="content-register">
          <div className="heading-account">Thông tin đăng ký</div>
          <div className="note-register">
            Đăng ký thành viên và nhận ngay ưu đãi 10% cho đơn hàng đầu tiên
            <br />
            Nhập mã: <b>MLBWELCOME</b>
          </div>
          <div className="d-flex justify-content-center">
            <div className="info-register">
              <div className="item-input-form">
                <label>Tên Tài Khoản</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Tên tài khoản"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="item-input-form">
                <label>Mật khẩu</label>
                <div className="item-input-form-inner">
                  <div className="password-wrapper">
                    <input
                      required=""
                      className="form-input"
                      type="password"
                      placeholder="Mật khẩu"
                      size={30}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* <div className="password-wrapper">
                    <input
                      required=""
                      className="form-input"
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                      size={30}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div> */}
                </div>
              </div>
              <div className="item-input-form">
                <label>Email</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Nhập Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="action-register">
            <button
              type="submit"
              disabled={
                !username.length || !password.length || !password.length
              }
              className={`${
                !username.length || !email.length || !password.length
                  ? "bg-secondary"
                  : "bg-dark"
              }`}
            >
              {isSubmitting ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Đăng Ký"
              )}
            </button>
          </div>
          <span className="d-flex justify-content-center">
            Bạn đã có tài khoản ?<a href="/account/login">Đăng nhập</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Register;
