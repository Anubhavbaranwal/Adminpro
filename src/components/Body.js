import React, { useEffect, useState } from "react";
import Header from "./Header";
import Maincontainer from "./container.js";

import { useDispatch } from "react-redux";
import addlist from "./utils/Dataslice.js";

const Bodyy = () => {
  const [data, setdata] = useState(null);
  const getDetails = async () => {
    const data = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    const json = await data.json();
    console.log(json);
    setdata(json);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="bg-black h-screen">
      <Header />
      <Maincontainer data={data} />
    </div>
  );
};

export default Bodyy;
