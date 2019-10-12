import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow, } from "enzyme";
import { Button, } from "../index";

describe("Button", () => {
  it("renders without crashing", () => {
    TestRenderer.create(<Button />);
  });

  it("sends event on click", () => {
    const mock = jest.fn();
    const button = shallow(<Button onClick={mock} />);
    button.find("button").simulate("click");
    expect(mock).toBeCalled();
  });
});
