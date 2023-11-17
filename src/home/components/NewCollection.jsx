import { useEffect, useState } from "react";
import Product from "./Product";
import CollectionTab from "./CollectionTab";

const NewCollection = () => {
  const [activeTab, setActiveTab] = useState(0);
  // let [productList, setProductList] = useState([]);
  let [categories, setCategory] = useState([]);

  const fetchcategory = async () => {
    const res = await fetch(
      "http://localhost:1337/api/categories?populate[products][populate]=*"
    );
    const data = await res.json();
    const cates = data.data.map((c) => ({
      name: c.attributes.category_name,
      collection: c.attributes.products.data.map((p) => ({
        title: p.attributes.Name,
        price: p.attributes.price,
        images: p.attributes.Product_Image.data.map(
          (i) => `http://localhost:1337${i.attributes.url}`
        ),
        createdAt: p.attributes.createdAt,
        id: p.id,
      })),
    }));
    cates.forEach((c) =>
      c.collection.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
    setCategory(cates);
  };

  useEffect(() => {
    fetchcategory();
  }, []);

  return (
    <section className="new-collection">
      <div className="container">
        <div className="heading-content d-flex justify-content-between mb-3">
          <div>
            <h3>HÀNG MỚI VỀ</h3>
          </div>
          <CollectionTab
            tabs={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="item-collection">
          {/* {tabs[activeTab].collection.map()} */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 left-banner">
              <a></a>
              <img
                src="https://file.hstatic.net/200000642007/file/mlb_newarrivals_rtw_w36_c224d1e0c7f44d8c9bb7adeb6a824609.jpg"
                alt="image collection"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 right-collection row">
              {categories[activeTab]?.collection.slice(0, 4).map((i, index) => (
                <Product item={i} key={index} className="col-md-6 mb-4" />
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
