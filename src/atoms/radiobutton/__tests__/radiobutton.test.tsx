import React from "react";
import TestRenderer from "react-test-renderer";

import { RadioButton, } from "../index";

describe("RadioButton", (): void => {
  it("renders without crashing", (): void => {
    TestRenderer.create(<RadioButton label="label" />);
  });

  it("renders with label", (): void => {
    const radiobutton = TestRenderer.create(<RadioButton label="label" />);
    expect(radiobutton).toMatchSnapshot();
  });

  it("is checked when 'checked' prop is passed", (): void => {
    const radiobutton = TestRenderer.create(<RadioButton label="label" checked />);
    expect(radiobutton).toMatchSnapshot();
  });

  it("is disabled when 'disabled' prop is passed", (): void => {
    const radiobutton = TestRenderer.create(<RadioButton label="label" disabled />);
    expect(radiobutton).toMatchSnapshot();
  });
});
