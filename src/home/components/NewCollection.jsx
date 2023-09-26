import { useState } from "react";

const tabs = [
  {
    name: "QUẦN ÁO",
    collection: [],
  },
  {
    name: "NÓN",
  },
  {
    name: "GIÀY",
  },
  {
    name: "TÚI",
  },
];

const items = [
  {
    title: "123",
    colors: [],
    images: [],
  },
  {
    title: "123",
    colors: [],
    images: [],
  },
  {
    title: "321",
    colors: [],
    images: [],
  },
  {
    title: "231",
    colors: [],
    images: [],
  },
];

const NewCollection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="new-collection">
      <div className="container">
        <div className="heading-content d-flex justify-content-between">
          <div>
            <h3>HÀNG MỚI VỀ</h3>
          </div>
          <div className="sub-tab d-flex">
            {tabs.map((t, index) => (
              <div
                className={`item-slider-sub ${activeTab === index && "active"}`}
                onClick={() => setActiveTab(index)}
              >
                {t.name}
              </div>
            ))}
          </div>
        </div>
        <div className="item-collection">
          {/* {tabs[activeTab].collection.map()} */}
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assets/img/logo/imgcollection.webp"
                alt="image collection"
              />
            </div>
            <div className="col-md-6 right-collection">
              <div className="row">
                {items.map((i) => (
                  <div className="col-sm-6">
                    <picture>
                      <source />
                      <img />
                    </picture>
                    <h4></h4>
                    <div>
                      {i.colors.map((c) => (
                        <></>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewCollection;
