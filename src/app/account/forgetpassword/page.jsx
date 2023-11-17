const Forgetpassword = () => {
  return (
    <div className="layout-form-account">
      <div className="container">
        <div className="wrapper-login">
          <div className="form-forgot">
            <h2>Quên Mật Khẩu</h2>
            <div className="content-form">
              <div className="item-form">
                <label className="new-label">Phục hồi mật khẩu</label>
                <input
                  required=""
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="item-form mt-3">
                <button type="submit">Gửi</button>
              </div>
              <div class="item-form-action">
                <a href="/account/login" class="back-login">
                  Quay về đăng nhập
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="10"
                    viewBox="0 0 2 10"
                    fill="none"
                  >
                    {" "}
                    <rect
                      x="0.5"
                      width="1"
                      height="10"
                      fill="#D0D0D0"
                    ></rect>{" "}
                  </svg>
                </span>
                <a href="/account/register" title="Đăng ký">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forgetpassword;
