import React from "react";
import { select } from "@storybook/addon-knobs";

const options = {
  Tin: "tin",
  LitenApe: "liten-ape"
};

export function themeSelector(storyFn) {
  return (
    <div className={select("Theme", options, "liten-ape")}>{storyFn()}</div>
  );
}
