import React from "react";
import Layout from "../Layout/Layout";
import PastorList from "./PastorList";

const Pastors = () => {
  return (
    <Layout bg={"#fff"} color={"#0a2540"} heading={"Meet our Pastors"}>
      <PastorList />
    </Layout>
  );
};

export default Pastors;
