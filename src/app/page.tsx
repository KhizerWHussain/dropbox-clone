import dynamic from "next/dynamic";
import React from "react";
const Base = dynamic(() => import("@/pageComponents/Base"), { ssr: true });

const Home = () => {
  return <Base />;
};

export default Home;
