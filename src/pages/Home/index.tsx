import React from "react";
import { Helmet } from "react-helmet";
import About from "../../components/About/About";
import Counselling from "../../components/Counselling/Counselling";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
// import { Button } from "antd";
import Header from "../../components/Header/Header";
import HelpLine from "../../components/HelpLine";
import Hero from "../../components/Hero/Hero";
// import Testimony from "../../components/Testimony/Testimony";
import Video from "../../components/VideoCard/Video";
// import AOS from "aos";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <title>David - Full-Stack Developer</title> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="author" content="Living Pilgrims Pentecostal Ministry" />
        <meta name="keywords" content="Living Pilgrims Pentecostal Minstry church" />
        {/* <link rel="icon" href="./assets/images/dav.jpg" /> */}
        <meta
          name="description"
          content="  Living Pilgrims Pentecostal Ministries is a church headquartered in
            Itakpe, Camp 1, National Iron Ore Mining Company’s Staff Quarters,
            Kogi State, Nigeria, with Pastor Christopher Omatsola Sillo as the
            General Overseer."
        />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="LPPM - Making Christ Known" />
        <meta property="og:locale" content="en_GB" />
        {/* <title data-rh="true">David - Full-Stack Developer</title> */}
        <meta data-rh="true" property="og:type" content="website" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta
          data-rh="true"
          property="og:title"
          content="LPPM (Living Pilgrims Pentecostal Ministry) - Making Christ Known"
        />
        {/* <meta data-rh="true" property="og:image" content="/images/blaiti.png" /> */}
      </Helmet>
      <div>
        <Header />
        <Hero />
        <HelpLine />
        <About />
        <Gallery />
        <Counselling />
        <Video />
        {/* <Testimony /> */}
        <Footer />
        {/* <Button type="primary">Submit</Button> */}
      </div>
    </>
  );
};

export default Home;
