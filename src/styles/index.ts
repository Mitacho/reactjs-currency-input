import { CSSProperties } from "react";

interface StyleSheetRules {
  [key: string]: CSSProperties;
}

export class StyleSheet {
  static create<Styles extends StyleSheetRules>(styles: Styles): Styles {
    return styles;
  }
}
