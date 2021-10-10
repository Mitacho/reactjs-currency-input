import React from "react";

import { StyleSheet } from "../styles";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {};

export default function Title(props: Props): JSX.Element {
  return (
    <h1
      {...props}
      style={{
        ...styles.title,
        ...props.style,
      }}
    >
      {props.children}
    </h1>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#E8EAED",
  },
});
