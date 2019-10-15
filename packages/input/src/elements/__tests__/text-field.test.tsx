import React from "react";
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";

import { TextField } from "../TextField";

describe("TextField", () => {
  it("renders without crashing", () => {
    TestRenderer.create(<TextField />);
  });

  it("sends event on change", () => {
    const mock = jest.fn();
    const input = shallow(<TextField onChange={mock} />);

    expect(mock).toBeCalledTimes(0);
    input.find("input").simulate("change", { target: { value: "123", }, });
    expect(mock).toBeCalled();
  });
});
