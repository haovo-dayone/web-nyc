"use client";
import { useEffect, useState } from "react";
import CollectionTab from "./CollectionTab";
import Carousel from "react-multi-carousel";
import Product from "./Product";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const BestSelling = () => {
  const [activeTab, setActiveTab] = useState(0);
  let [categories, setCategories] = useState([]);

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
        id: p.id,
      })),
    }));
    // cates.forEach((c) =>
    //   c.collection.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    // );
    setCategories(cates);
  };
  useEffect(() => {
    fetchcategory();
  }, []);

  return (
    <section className="best-selling">
      <div className="container ">
        <div className="heading-content d-flex justify-content-between mb-3">
          <div>
            <h3>Hàng Bán Chạy</h3>
          </div>
          <CollectionTab
            tabs={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="container">
        {categories[activeTab] && (
          <Carousel responsive={responsive} centerMode infinite>
            {/* <div className="d-flex"> */}
            {/* <div> */}
            {categories[activeTab].collection.map((i) => (
              <Product item={i} key={i.title} />
            ))}
            {/* </div> */}
            {/* </div> */}
            {/* <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div> */}
          </Carousel>
        )}
      </div>
    </section>
  );
};
export default BestSelling;
