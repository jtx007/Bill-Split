import React from "react";
import { Link } from "@reach/router";

const Navlink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "ui navlink active link green large item" : "ui navlink link large item"
      }
    }}
  />
);

export default Navlink;
