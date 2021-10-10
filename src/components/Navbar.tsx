import React from "react";

import { StyleSheet } from "../styles";

type Props = React.HTMLAttributes<HTMLElement> & {};

export default function Navbar(props: Props): JSX.Element {
  return (
    <nav
      {...props}
      style={{
        ...styles.nav,
        ...props.style,
      }}
    >
      {props.children}
    </nav>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,

    backgroundColor: "#303134",
    color: "#E8EAED",

    padding: "0.75rem",
  },
});
