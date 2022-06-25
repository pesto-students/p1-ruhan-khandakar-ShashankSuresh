import { memo } from "react";

import styles from "./button.module.css";

const marginMapping = {
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
};
const paddingMapping = {
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
};

const Button = ({
  children,
  bgColor,
  textColor = "#000",
  fontWeight = "normal",
  ...props
}) => {
  const getPaddingOrMargin = () => {
    const styles = {};
    const allProperties = [
      ...Object.keys(marginMapping),
      ...Object.keys(paddingMapping),
    ];
    allProperties.forEach((property) => {
      if (props[property]) {
        const actualProperty =
          marginMapping[property] || paddingMapping[property];
        styles[actualProperty] = props[property];
      }
    });

    return styles;
  };

  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontWeight,
        ...getPaddingOrMargin(),
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
