import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nisi quibusdam nam explicabo molestias.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nisi quibusdam nam explicabo molestias.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nisi quibusdam nam explicabo molestias.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-100 py-3">
      <div className="container">
        <div className="text-left mb-24">
          <div className="justify-centet text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-4xl text-primary mb-2">
              Top Rated Products For You
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold mb-2">
              Best Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              vero, quisquam aut quas omnis doloribus. Quidem, iusto, corrupti
              tenetur reiciendis illo, fugit dolor sequi non reprehenderit
              quisquam nulla incidunt possimus distinctio praesentium?
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center pt-12">
              {ProductsData.map((data) => (
                <div
                  key={data.id}
                  data-aos="zoom-in"
                  className="rounded-2xl pb-2 text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[450px]"
                >
                  <div>
                    <img
                      src={data.img}
                      alt="img"
                      className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary pb-2"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
