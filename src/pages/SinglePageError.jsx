import React from "react";
import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  // return <h2>error.message</h2>;
  return <h2>there is an error...</h2>
};

export default SinglePageError;
