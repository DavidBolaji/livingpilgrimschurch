import { Skeleton } from "antd";
import React from "react";
import ImageGallery from "react-image-gallery";
import Layout from "../Layout/Layout";
import "./index.css";

const images = [
  {
    original:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399843/PHOTO-2022-12-25-20-48-29_qsppos.jpg",
    thumbnail:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399843/PHOTO-2022-12-25-20-48-29_qsppos.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399842/PHOTO-2022-12-25-20-47-28_laemjm.jpg",
    thumbnail:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399842/PHOTO-2022-12-25-20-47-28_laemjm.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-47-26_g2jm81.jpg",
    thumbnail:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-47-26_g2jm81.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399842/PHOTO-2022-12-25-20-47-37_qoanp8.jpg",
    thumbnail:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399842/PHOTO-2022-12-25-20-47-37_qoanp8.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-46-41_gh3z1s.jpg",
    thumbnail:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-46-41_gh3z1s.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399842/PHOTO-2022-12-25-20-47-32_efczvw.jpg",
    thumbnail:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399842/PHOTO-2022-12-25-20-47-32_efczvw.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-46-41_kosmqn.jpg",
    thumbnail:
      "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-46-41_kosmqn.jpg",
  },
  // {
  // original: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-47-26_g2jm81.jpg",
  // thumbnail: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672399841/PHOTO-2022-12-25-20-47-26_g2jm81.jpg",
  // },
];

const Gallery = () => {
  return (
    <Layout heading={"Gallery"} bg={"#fff"} id={"Gallery"}>
      <div className="gallery">
        <ImageGallery autoPlay onImageLoad={() => <Skeleton />} items={images} />;
      </div>
    </Layout>
  );
};

export default Gallery;
