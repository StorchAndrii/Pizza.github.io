import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="0" y="267" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="430" rx="10" ry="10" width="95" height="30" />
    <rect x="127" y="420" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
