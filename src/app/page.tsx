import dynamic from "next/dynamic";
import React from "react";
const Base = dynamic(() => import("@/pageComponents/Base"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return <Base />;
};

export default Home;
