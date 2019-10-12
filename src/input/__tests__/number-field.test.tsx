import React from "react";
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";

import { TextField, NumberField } from "../index";

describe("NumberField", () => {
  it("renders without crashing", () => {
    TestRenderer.create(<NumberField />);
  });

  it("sends event on change", () => {
    const mock = jest.fn();
    const input = shallow(<NumberField onChange={mock} />);

    expect(mock).toBeCalledTimes(0);
    input.find(TextField).simulate("change", { target: { value: "123", }, });
    expect(mock).toBeCalled();
  });

  it("prop attribute 'value' is sent to input element", () => {
    const input = shallow(<NumberField value="123" />);
    expect(input.find(TextField).props().value).toBe("123");
  });

  it("change value propagate up", () => {
    const mock = jest.fn();
    const input = shallow(<NumberField onChange={mock} />);

    expect(mock).toBeCalledTimes(0);
    input.find(TextField).simulate("change", { target: { value: "123", }, });
    expect(mock.mock.calls[0][1]).toBe("123");
  });

  it("non-digits are filtered out upstream", () => {
    const mock = jest.fn();
    const input = shallow(<NumberField onChange={mock} />);

    expect(mock).toBeCalledTimes(0);
    input.find(TextField).simulate("change", { target: { value: "1a 2b 3b", }, });
    expect(mock.mock.calls[0][1]).toBe("123");
  });

  it("non-digits are filtered out downstream", () => {
    const input = shallow(<NumberField value="1a 2b 3b" />);
    expect(input.find(TextField).props().value).toBe("123");
  });
});
