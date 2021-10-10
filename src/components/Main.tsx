import React from "react";

import { StyleSheet } from "../styles";

type Props = React.HTMLAttributes<HTMLElement> & {};

export default function Main(props: Props): JSX.Element {
  return (
    <main
      {...props}
      style={{
        ...styles.main,
        ...props.style,
      }}
    >
      {props.children}
    </main>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",

    backgroundColor: "#202124",
    color: "#BDC1C6",
  },
});
