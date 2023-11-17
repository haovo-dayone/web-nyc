const Styling = () => {
  const product = [
    {
      link: "",
      image:
        "https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg",
    },
    {
      link: "",
      image:
        "https://file.hstatic.net/200000642007/file/mlb-styling-banner-5_w42_528x612_baf1bcf79a414773a03de8353470fd3e.jpg",
    },
    {
      link: "",
      image:
        "https://file.hstatic.net/200000642007/file/mlb-styling-banner-1_w42_528x612_f3d8aede035e4696ab920ce323677370.jpg",
    },
    {
      link: "",
      image:
        "https://file.hstatic.net/200000642007/file/mlb-styling-banner-3_w42_528x612_842244657fee422895bbef55622ebfc2.jpg",
    },
    {
      link: "",
      image:
        "https://file.hstatic.net/200000642007/file/mlb-styling-banner-6_w42_528x612_fa19d7eb41dc42eb937d682edd4fade5.jpg",
    },
    {
      link: "",
      image:
        "https://file.hstatic.net/200000642007/file/mlb-styling-banner-2_w42_528x612_9bf070c8dbf64d94852877c73db29795.jpg",
    },
  ];
  return (
    <section className="styling">
      <div className="container">
        <div className="heading-styling ">
          <h3>MLB STYLING</h3>
        </div>
        <div className="list-styling">
          {product.map((p) => (
            <div className="list-item">
              <a href="#">
                <picture>
                  {/* <source
                    class=" lazyloading"
                    media="(min-width:992px)"
                    srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                    data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                  />
                  <source
                    class=" lazyloading"
                    media="(max-width:991px)"
                    srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                    data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                  /> */}
                  <img
                    class=" ls-is-cached lazyloaded"
                    src={p.image}
                    // data-src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                    alt=""
                  />
                </picture>
                <span className="item-read-more">Xem Ngay</span>
              </a>
            </div>
          ))}

          {/* <div className="list-item">
            <a href="">
              <picture>
                <source
                  class=" lazyloading"
                  media="(min-width:992px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                />
                <source
                  class=" lazyloading"
                  media="(max-width:991px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                />
                <img
                  class=" ls-is-cached lazyloaded"
                  src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  data-src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  alt=""
                />
              </picture>
              <span>Xem Ngay</span>
            </a>
          </div>
          <div className="list-item">
            <a href="">
              <picture>
                <source
                  class=" lazyloading"
                  media="(min-width:992px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                />
                <source
                  class=" lazyloading"
                  media="(max-width:991px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                />
                <img
                  class=" ls-is-cached lazyloaded"
                  src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  data-src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  alt=""
                />
              </picture>
              <span>Xem Ngay</span>
            </a>
          </div>
          <div className="list-item">
            <a href="">
              <picture>
                <source
                  class=" lazyloading"
                  media="(min-width:992px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                />
                <source
                  class=" lazyloading"
                  media="(max-width:991px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                />
                <img
                  class=" ls-is-cached lazyloaded"
                  src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  data-src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  alt=""
                />
              </picture>
              <span>Xem Ngay</span>
            </a>
          </div>
          <div className="list-item">
            <a href="">
              <picture>
                <source
                  class=" lazyloading"
                  media="(min-width:992px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                />
                <source
                  class=" lazyloading"
                  media="(max-width:991px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                />
                <img
                  class=" ls-is-cached lazyloaded"
                  src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  data-src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  alt=""
                />
              </picture>
              <span>Xem Ngay</span>
            </a>
          </div>
          <div className="list-item">
            <a href="">
              <picture>
                <source
                  class=" lazyloading"
                  media="(min-width:992px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_528x612_4ff1092ba803496b8d4a3c2eb9c0f23b.jpg"
                />
                <source
                  class=" lazyloading"
                  media="(max-width:991px)"
                  srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                  data-srcset="https://file.hstatic.net/200000642007/file/mlb-styling-banner-4_w42_410x475_97bed3d9613e42ceaaf641359c6b4907.jpg"
                />
                <img
                  class=" ls-is-cached lazyloaded"
                  src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  data-src="https://file.hstatic.net/200000642007/file/loading-6-banner_2fbe3bb1c3fe45e48fbe401e5335e4c4.jpg"
                  alt=""
                />
              </picture>
              <span className="item-read-more">Xem Ngay</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Styling;
