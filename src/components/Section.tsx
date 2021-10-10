import React from "react";

import { StyleSheet } from "../styles";

type Props = React.HTMLAttributes<HTMLElement> & {};

export default function Section(props: Props): JSX.Element {
  return (
    <section
      {...props}
      style={{
        ...styles.section,
        ...props.style,
      }}
    >
      {props.children}
    </section>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: "0.25rem",
  },
});
