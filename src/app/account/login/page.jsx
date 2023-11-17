"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleOnClick = () => {
    setSubmitting(true);
    postLogin();
  };
  async function postLogin() {
    const res = await fetch("http://localhost:1337/api/auth/local", {
      method: "post",
      body: JSON.stringify({
        identifier: email,
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
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      router.push("/account/accountUser");
    }
  }
  if (localStorage.getItem("auth") != undefined) {
    router.push("/account/accountUser");
  }

  return (
    <div className="login">
      <div className="container">
        <div className="wrapper-login">
          <h1 className="d-flex justify-content-center">Đăng Nhập</h1>
          <div className="form-login">
            <div className="item-form">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="item-form">
              <label>MẬT KHẨU</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={!email.length || !password.length}
              onClick={handleOnClick}
              className={`${
                !email.length || !password.length ? "bg-secondary" : "bg-dark"
              }`}
            >
              {isSubmitting ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Đăng Nhập"
              )}
            </button>
            <div className="item-form-action">
              <a href="/account/forgetpassword">Quên mật khẩu?</a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={2}
                  height={10}
                  viewBox="0 0 2 10"
                  fill="none"
                >
                  {" "}
                  <rect x="0.5" width={1} height={10} fill="#D0D0D0" />{" "}
                </svg>
              </span>
              <a href="/account/register">Đăng ký</a>
            </div>
            <div className="item-form-social">
              <button className="bg-danger">
                <div>
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M21.1794 9.38188L21.0734 8.93234H11.3028V13.0677H17.1406C16.5345 15.9458 13.722 17.4608 11.4247 17.4608C9.75313 17.4608 7.99109 16.7577 6.82484 15.6275C6.20953 15.0217 5.71974 14.3005 5.38353 13.5051C5.04731 12.7098 4.87126 11.856 4.86547 10.9925C4.86547 9.25062 5.64828 7.50828 6.78734 6.36219C7.92641 5.21609 9.64672 4.57484 11.3572 4.57484C13.3161 4.57484 14.72 5.615 15.245 6.08938L18.1836 3.16625C17.3216 2.40875 14.9534 0.5 11.2625 0.5C8.41484 0.5 5.68437 1.59078 3.68844 3.58016C1.71875 5.53906 0.699219 8.37172 0.699219 11C0.699219 13.6283 1.66391 16.3194 3.57266 18.2938C5.61219 20.3994 8.50063 21.5 11.4748 21.5C14.1809 21.5 16.7459 20.4397 18.5741 18.5159C20.3713 16.6222 21.3008 14.0019 21.3008 11.255C21.3008 10.0986 21.1845 9.41187 21.1794 9.38188Z"
                      fill="white"
                    />{" "}
                  </svg>
                  <span className="ms-2">Đăng Nhập Bằng Google</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
