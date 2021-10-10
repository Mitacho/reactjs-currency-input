import React from "react";

import { StyleSheet } from "../styles";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

export default function Container(props: Props): JSX.Element {
  return (
    <div
      {...props}
      style={{
        ...styles.container,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "0.25rem",
  },
});
