import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow, } from "enzyme";
import { RadioButton, } from "../index";
import * as util from "../../../utils";

jest.mock("../../../utils");

describe("RadioButton", () => {
  beforeEach(() => {
    const mock = jest.spyOn(util, "newId");
    mock.mockReturnValue("radio-1");
  });

  it("renders without crashing", () => {
    TestRenderer.create(<RadioButton label="label" />);
  });

  it("renders with label", () => {
    const radiobutton = TestRenderer.create(<RadioButton label="label" />);
    expect(radiobutton).toMatchSnapshot();
  });

  it("is checked when 'checked' prop is passed", () => {
    const radiobutton = TestRenderer.create(<RadioButton label="label" checked />);
    expect(radiobutton).toMatchSnapshot();
  });

  it("is disabled when 'disabled' prop is passed", () => {
    const radiobutton = TestRenderer.create(<RadioButton label="label" disabled />);
    expect(radiobutton).toMatchSnapshot();
  });

  it("sends change event on change", () => {
    const mockFn = jest.fn();
    const radiobutton = shallow(<RadioButton label="label" onChange={mockFn} />);
    radiobutton.find("input").simulate("change");
    expect(mockFn).toBeCalled();
  });

  it("sends radio value on change", () => {
    const mockFn = jest.fn();
    const radiobutton = shallow(<RadioButton label="label" value="value" onChange={mockFn} />);
    radiobutton.find("input").simulate("change");
    expect(mockFn.mock.calls[0][1]).toBe("value");
  });

  it("sends 'true' on change when not checked", () => {
    const mockFn = jest.fn();
    const radiobutton = shallow(<RadioButton label="label" value="value" onChange={mockFn} />);
    radiobutton.find("input").simulate("change");
    expect(mockFn.mock.calls[0][2]).toBeTruthy();
  });

  it("sends 'false' on change when checked", () => {
    const mockFn = jest.fn();
    const radiobutton = shallow(<RadioButton label="label" value="value" onChange={mockFn} checked />);
    radiobutton.find("input").simulate("change");
    expect(mockFn.mock.calls[0][2]).toBeFalsy();
  });
});
