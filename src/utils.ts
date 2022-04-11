import { ReactComponent } from "*.svg";
import { CSSProperties } from "react";

export type Icon = typeof ReactComponent;

const css = (v: CSSProperties) => v;

export const reactStyles = {
  colFlex: css({
    display: "flex",
    flexDirection: "column",
  }),
  rowFlex: css({ display: "flex", flexDirection: "row" }),
  centerAll: css({
    alignItems: "center",
    justifyContent: "center",
  }),
};

export const cssStyles = {
  colFlex: `
    display: flex;
    flex-direction: column;
  `,
  rowFlex: `
    display: flex;
    flex-direction: row;
  `,
  centerAll: `
    align-items: center;
    justify-content: center;
  `,
};
