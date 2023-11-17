"use client";

import Breadcrumb from "@/collection/component/Breadcrumb";
import Dropdown from "@/collection/component/Dropdown";
import Product from "@/home/components/Product";
import { useEffect, useState } from "react";
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const categories = {
  apparel: {
    name: "Quần Áo",
    title:
      "Bộ sưu tập Quần Áo MLB tại MLB Việt Nam - Thời trang thể thao đa dạng.",
    des: "MLB Việt Nam tự hào giới thiệu bộ sưu tập Áo MLB với thiết kế đa dạng từ áo phông, áo hoodie đến áo khoác, sử dụng chất liệu thoáng khí và co giãn để mang đến sự thoải mái và linh hoạt khi bạn vận động. Khám phá bộ sưu tập Quần Áo MLB và tạo nên phong cách thể thao đẳng cấp và nổi bật.",
  },
  cap: {
    name: "Mũ nón",
    title:
      "Bộ sưu tập Mũ Nón MLB - Sự kết hợp hoàn hảo giữa thể thao và thời trang. ",
    des: "Chúng tôi mang đến cho bạn những chiếc nón thương hiệu MLB vừa trendy vừa tiện ích. Với một loạt kiểu dáng và màu sắc đa dạng đến từ các kiểu nón bóng chày, nón beret, nón bucket bạn có thể tạo nên phong cách riêng và tự tin khi diện nón MLB. Khám phá bộ sưu tập Mũ Nón MLB và thể hiện cá tính của bạn thông qua phụ kiện thể thao này.  ",
  },
  shoes: {
    name: "Giày Dép",
    title: "Bộ sưu tập Giày MLB - Thời trang thể thao đa dạng. ",
    des: "Bộ sưu tập Giày MLB bao gồm các loại giày như giày sandals, giày sneakers, giày lười và giày mule thời trang. Các dòng sản phẩm nổi bật trong bộ sưu tập này bao gồm Monogram, Chunky Jogger, Big Ball Chunky, Chunky Liner và Playball. Mỗi dòng sản phẩm đều có những đặc điểm riêng, phù hợp với nhu cầu và phong cách của từng người.  ",
  },
  bag: {
    name: "Túi",
    title: "Bộ sưu tập Túi MLB - Phụ kiện thời trang đẳng cấp. ",
    des: "Với họa tiết và logo của thương hiệu MLB đặc trưng, các chiếc túi MLB tạo nên điểm nhấn độc đáo và thu hút ánh nhìn. Từ các túi nhỏ gọn và tiện lợi đến túi lớn và đa năng, MLB mang đến sự đa dạng để bạn lựa chọn. Hãy khám phá bộ sưu tập Túi MLB và tạo nên diện mạo cá nhân độc đáo và phong cách thời thượng.  ",
  },
  accessories: { name: "Phụ Kiện" },
};

const Apparel = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState({
    name: "price",
    value: "asc",
  });
  const fetchcategory = async () => {
    const res = await fetch(
      `http://localhost:1337/api/products?populate=Product_Image&filters[category][slug]=${params.category}&sort[${sort.name}]=${sort.value}`
    );
    const data = await res.json();
    const product = data.data.map((p) => ({
      title: p.attributes.Name,

      images: p.attributes.Product_Image.data.map(
        (i) => `http://localhost:1337${i.attributes.url}`
      ),
      price: p.attributes.price,
      createAt: p.attributes.createAt,
    }));
    setProducts(product);
    // const cates = data2.data.map((c) => ({
    //   name: c.attributes.category_name,
    //   collection: c.attributes.products.data.map((p) => ({
    //     title: p.attributes.Name,
    //     price: p.attributes.price,
    //     images: p.attributes.Product_Image.data.map(
    //       (i) => `http://localhost:1337${i.attributes.url}`
    //     ),
    //   })),
    // }));
    // cates.forEach((c) =>
    //   c.collection.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    // );
    // setCategories(cates);
  };
  useEffect(() => {
    fetchcategory();
  }, [sort]);

  return (
    <>
      <div className="main-title-collection text-center">
        <h1>{categories[params.category].name}</h1>
      </div>
      <div className="description-collection">
        <div className="container">
          <div className="des-collection">
            <p className="text-center">{categories[params.category].title}</p>
            <p className="description text-center">
              {categories[params.category].des}
            </p>
          </div>
        </div>
      </div>
      <div className="title-collection">
        <div className="container">
          <div className="tittle-collection-inner d-flex justify-content-between">
            <Breadcrumb />
            <DropdownButton
              id="dropdown-basic-button"
              title="Sắp xếp"
              variant="light"
            >
              <DropdownItem
                onClick={() => setSort({ name: "price", value: "asc" })}
                className={
                  sort.name === "price" &&
                  sort.value === "asc" &&
                  "bg-secondary"
                }
              >
                Giá: Tăng dần
              </DropdownItem>
              <DropdownItem
                onClick={() => setSort({ name: "price", value: "desc" })}
                className={
                  sort.name === "price" &&
                  sort.value === "desc" &&
                  "bg-secondary"
                }
              >
                Giá: Giảm dần
              </DropdownItem>
              <DropdownItem
                onClick={() => setSort({ name: "createdAt", value: "desc" })}
                className={
                  sort.name === "createAt" &&
                  sort.value === "desc" &&
                  "bg-secondary"
                }
              >
                Mới nhất
              </DropdownItem>
              <DropdownItem
                onClick={() => setSort({ name: "createdAt", value: "asc" })}
                className={
                  sort.name === "createAt" &&
                  sort.value === "asc" &&
                  "bg-secondary"
                }
              >
                Cũ nhất
              </DropdownItem>
            </DropdownButton>
          </div>
        </div>
      </div>
      <div className="content-collection">
        <div className="container">
          <div className="row">
            {products.map((i, index) => (
              <Product key={index} item={i} className="col-sm-3" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Apparel;
