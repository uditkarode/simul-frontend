import { ReactComponent } from "*.svg";
import { css } from "@emotion/css";
import { CSSProperties } from "react";

export type Icon = typeof ReactComponent;

const csss = (v: CSSProperties) => v;

export const reactStyles = {
  colFlex: csss({
    display: "flex",
    flexDirection: "column",
  }),
  rowFlex: csss({ display: "flex", flexDirection: "row" }),
  centerAll: csss({
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

// local root div style (root component for all screens)
export const ulroot = css`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
