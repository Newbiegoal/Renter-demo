// react imports
"use client";
import React, { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";

import Productcard from "@/components/productcard";
// outside imports

const productList = [
  {
    id: 1,
    img: require("./../../public/me.jpg"),
    title: "Home",
    price: "12$",
    discription:
      "How are ",
    discount: 10,
    catagroy: "Cook",
    country: "Spain",
  },
  {
    id: 2,
    img: require("./../../public/two.jpg"),
    title: "Bad cooker",
    price: "1$",
    discription:
      "How i can help fd fd f de rertrt r  trttr you sir what the hell",
    discount: null,
    catagroy: "Nothing",
    country: "Veitname",
  },
  {
    id: 3,
    img: require("./../../public/cool.png"),
    title: "Kitchen",
    price: "120$",
    discription: "How are you my kitchen that is cool sir",
    discount: 6,
    catagroy: "foods",
    country: "United states",
  },
  {
    id: 4,
    img: require("./../../public/two.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "School",
    country: "Egypt",
  },
  {
    id: 5,
    img: require("./../../public/two.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "How are you my How are you mahmoud Good Gemma kitchen that is cool sir",
    discount: null,
    catagroy: "sports",
    country: "Japan",
  },
  {
    id: 6,
    img: require("./../../public/3.jpg"),
    title: "Kitchen",
    price: "10$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "international",
    country: "Korea",
  },
  {
    id: 7,
    img: require("./../../public/two.jpg"),
    title: "Home",
    price: "12$",
    discription:
      "How are you my kitchen that is cool sir ow are you my kitchen that is cool sir",
    discount: 10,
    catagroy: "Cook",
    country: "Spain",
  },
  {
    id: 8,
    img: require("./../../public/two.jpg"),
    title: "Bad cooker",
    price: "1$",
    discription:
      "How i can help fd fd f de rertrt r  trttr you sir what the hell",
    discount: null,
    catagroy: "Nothing",
    country: "Veitname",
  },
  {
    id: 9,
    img: require("./../../public/cool.png"),
    title: "Kitchen",
    price: "120$",
    discription: "How are you my kitchen that is cool sir",
    discount: 6,
    catagroy: "foods",
    country: "United states",
  },
  {
    id: 10,
    img: require("./../../public/two.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "School",
    country: "Egypt",
  },
  {
    id: 11,
    img: require("./../../public/apple.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "How are you my How are you mahmoud Good Gemma kitchen that is cool sir",
    discount: null,
    catagroy: "sports",
    country: "Japan",
  },
  {
    id: 12,
    img: require("./../../public/bg.jpg"),
    title: "Kitchen",
    price: "10$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "international",
    country: "Korea",
  },
  {
    id: 13,
    img: require("./../../public/me.jpg"),
    title: "Home",
    price: "12$",
    discription:
      "How are you my kitchen that is cool sir ow are you my kitchen that is cool sir",
    discount: 10,
    catagroy: "Cook",
    country: "Spain",
  },
  {
    id: 14,
    img: require("./../../public/two.jpg"),
    title: "Bad cooker",
    price: "1$",
    discription:
      "How i can help fd fd f de rertrt r  trttr you sir what the hell",
    discount: null,
    catagroy: "Nothing",
    country: "Veitname",
  },
  {
    id: 15,
    img: require("./../../public/cool.png"),
    title: "Kitchen",
    price: "120$",
    discription: "How are you my kitchen that is cool sir",
    discount: 6,
    catagroy: "foods",
    country: "United states",
  },
  {
    id: 16,
    img: require("./../../public/two.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "School",
    country: "Egypt",
  },
  {
    id: 17,
    img: require("./../../public/two.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "How are you my How are you mahmoud Good Gemma kitchen that is cool sir",
    discount: null,
    catagroy: "sports",
    country: "Japan",
  },
  {
    id: 18,
    img: require("./../../public/3.jpg"),
    title: "Kitchen",
    price: "10$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "international",
    country: "Korea",
  },
  {
    id: 19,
    img: require("./../../public/two.jpg"),
    title: "Home",
    price: "12$",
    discription:
      "How are you my kitchen that is cool sir ow are you my kitchen that is cool sir",
    discount: 10,
    catagroy: "Cook",
    country: "Spain",
  },
  {
    id: 20,
    img: require("./../../public/two.jpg"),
    title: "Bad cooker",
    price: "1$",
    discription:
      "How i can help fd fd f de rertrt r  trttr you sir what the hell",
    discount: null,
    catagroy: "Nothing",
    country: "Veitname",
  },
  {
    id: 21,
    img: require("./../../public/cool.png"),
    title: "Kitchen",
    price: "120$",
    discription: "How are you my kitchen that is cool sir",
    discount: 6,
    catagroy: "foods",
    country: "United states",
  },
  {
    id: 22,
    img: require("./../../public/two.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "School",
    country: "Egypt",
  },
  {
    id: 23,
    img: require("./../../public/apple.jpg"),
    title: "Kitchen",
    price: "120$",
    discription:
      "How are you my How are you mahmoud Good Gemma kitchen that is cool sir",
    discount: null,
    catagroy: "sports",
    country: "Japan",
  },
  {
    id: 24,
    img: require("./../../public/bg.jpg"),
    title: "Kitchen",
    price: "10$",
    discription:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
    discount: null,
    catagroy: "international",
    country: "Korea",
  },
];
const CountryList = [
  "Egypt",
  "Veitname",
  "China",
  "Korea",
  "Japan",
  "Spain",
  "United states",
];

const productCategoryList = [
  "Cook",
  "School",
  "sports",
  "international",
  "products",
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filtredList, setFiltredList] = useState<any>();

  const HandleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue.trim() !== null || searchValue.trim() !== "") {
      const newList = productList.filter((item) => {
        return (
          item.title.startsWith(searchValue) ||
          item.discription.startsWith(searchValue) ||
          item.title.includes(searchValue) ||
          item.discription.includes(searchValue)
        );
      });
      setFiltredList(newList);
    }
  }, [searchValue]);
  const [checkedState, setCheckedState] = useState(
    new Array(CountryList.length).fill(false)
  );
  const [
    checkedStateProductCategory,
    setCheckedStatePriceProdcutCategory,
  ] = useState(new Array(productCategoryList.length).fill(false));

  const handleOnChange = (types: string, position: number) => {
    if (types == "country") {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);
    } else if (types == "product") {
      const updatedCheckedState = checkedStateProductCategory.map(
        (item, index) => (index === position ? !item : item)
      );

      setCheckedStatePriceProdcutCategory(updatedCheckedState);
    }
  };

  return (
    <div className="flex justify-start w-full items-start">
      {/* sidebar home  */}
      <div
        className={`w-0 md:w-[270px] h-[90vh] bg-zinc-700 text-white  left-0 top-[60px] overflow-y-scroll pb-8
      fixed 
        }`}
      >
        {/* product filter first section  */}

        <ul className="p-1 mt-5 border-y-2 border-solid border-white ">
          <li>
            <span className="indent-2 block text-lg w-fit shadow-sm shadow-gray-500">
              Country
            </span>
            <ul className="p-1">
              {CountryList.map((country, index) => {
                return (
                  <li
                    key={index}
                    className="indent-4 text-md p-2 cursor-pointer flex gap-1 justify-start  items-center"
                  >
                    <label
                      className="cursor-pointer ml-2 text-gray-70"
                      htmlFor={country}
                    >
                      {country}
                    </label>
                    <input
                      className="form-checkbox h-4 w-4 text-blue-600 bg-zinc-300 cursor-pointer"
                      style={{ color: "white" }}
                      type="checkbox"
                      name={country}
                      id={country}
                      tabIndex={index}
                      value={country}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange("country", index)}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        {/* product filter first section  */}

        <ul className="p-1 mt-5 border-y-2 border-solid border-white ">
          <li>
            <span className="indent-2 block text-lg w-fit shadow-sm shadow-gray-500">
              Category
            </span>
            <ul className="p-1">
              {productCategoryList.map((product, index) => {
                return (
                  <li
                    key={index}
                    className="indent-4 text-md p-2 cursor-pointer flex gap-1 justify-start  items-center"
                  >
                    <label
                      className="cursor-pointer ml-2 text-gray-70"
                      htmlFor={product}
                    >
                      {product}
                    </label>
                    <input
                      className="form-checkbox h-4 w-4 text-blue-600 bg-zinc-300 cursor-pointer"
                      style={{ color: "white" }}
                      type="checkbox"
                      name={product}
                      id={product}
                      tabIndex={index}
                      value={product}
                      checked={checkedStateProductCategory[index]}
                      onChange={() => handleOnChange("product", index)}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>

      {/* home page content  */}

      <div className="sm:ml-0 md:ml-[270px] flex-1 ">
        {/* search filter filed  */}

        <div className="flex flex-col lg:flex-row  p-1 my-6 justify-center items-center gap-3 lg:gap-1 w-full px-l md:px-5">
          <div className="flex justify-center items-center gap-1 border-solid border-2 border-zinc-400 rounded-full py-1 px-2 w-full md:w-auto max-w-[600px] flex-1 ">
            <BsSearch size={20} />
            <input
              value={searchValue}
              onChange={HandleInputChange}
              type="text"
              name="productName"
              id="productName"
              className="border-none outline-none indent-2 flex-1"
              placeholder="Search  prodcuts"
            />
          </div>
          {/* price filter inputs  */}

          <div className="flex select-none justify-center items-center gap-2">
            <h1 className="indent-2 px-1">Price</h1>
            {/* min price  */}

            <select
              id="countries"
              className="bg-gray-50 min-w-[50px] cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Mix</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="1000">1000</option>
            </select>
            {/* max price  */}

            <select
              id="countries"
              className="bg-gray-50 min-w-[50px]   border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Max</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
            </select>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap justify-center items-start mt-4 gap-2 ">
          {searchValue.trim().length > 0
            ? filtredList.map(
                ({
                  img,
                  country,
                  price,
                  title,
                  id,
                  discount,
                  discription,
                }: any) => {
                  return (
                    <Productcard
                      img={img}
                      country={country}
                      title={title}
                      price={price}
                      id={id}
                      discription={discription}
                      discount={discount}
                      key={id}
                    />
                  );
                }
              )
            : productList.map((product, index) => {
                return (
                  <Productcard
                    img={product.img}
                    country={product.country}
                    title={product.title}
                    price={product.price}
                    id={product.id}
                    key={product.id}
                    discription={product.discription}
                    discount={product.discount}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}
