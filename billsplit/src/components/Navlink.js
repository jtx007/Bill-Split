import React from "react";
import { Link } from "@reach/router";

const Navlink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "ui active link large item" : "ui link large item"
      }
    }}
  />
);

export default Navlink;
