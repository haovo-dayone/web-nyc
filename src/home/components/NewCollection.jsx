import { useEffect, useState } from "react";
import Product from "./Product";
import CollectionTab from "./CollectionTab";
const items = [
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect1.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect2.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/3.webp",
      "/assets/img/collection/newcollect3.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/4.webp",
      "/assets/img/collection/newcollect4.webp",
    ],
  },
];

const items2 = [
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect1.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect2.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/3.webp",
      "/assets/img/collection/newcollect3.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/4.webp",
      "/assets/img/collection/newcollect4.webp",
    ],
  },
];

const tabs = [
  {
    name: "QUẦN ÁO",
    collection: items,
  },
  {
    name: "NÓN",
    collection: items2,
  },
  {
    name: "GIÀY",
    collection: items,
  },
  {
    name: "TÚI",
    collection: items,
  },
];
const NewCollection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="new-collection">
      <div className="container">
        <div className="heading-content d-flex justify-content-between mb-3">
          <div>
            <h3>HÀNG MỚI VỀ</h3>
          </div>
          <CollectionTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="item-collection">
          {/* {tabs[activeTab].collection.map()} */}
          <div className="row">
            <div className="left-banner">
              <img
                src="https://file.hstatic.net/200000642007/file/mlb_newarrivals_rtw_w36_c224d1e0c7f44d8c9bb7adeb6a824609.jpg"
                alt="image collection"
              />
            </div>
            <div className="right-collection row">
              {tabs[activeTab].collection.map((i) => (
                // <div className="product col-sm-6 mb-4">
                //   <div className="product__images">
                //     <img src="/assets/img/collection/1.webp"></img>
                //     <img src="/assets/img/collection/newcollect1.webp"></img>
                //   </div>
                //   <div className="bg-white">
                //     <h4 className="p-2">{i.title}</h4>
                //     <div className="d-flex ps-2">
                //       {i.colors.map((c) => (
                //         <div
                //           className="color m-1"
                //           style={{ backgroundColor: c }}
                //         ></div>
                //       ))}
                //     </div>
                //   </div>
                // </div>
                <Product item={i} />
              ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewCollection;
