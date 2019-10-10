import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow, } from "enzyme";
import { Radio, } from "../index";
import * as util from "../../../utils";

jest.mock("../../../utils");

describe("Radio", () => {
  beforeEach(() => {
    const mock = jest.spyOn(util, "newId");
    mock.mockReturnValue("radio-1");
  });

  it("renders without crashing", () => {
    TestRenderer.create(<Radio label="label" />);
  });

  it("renders with label", () => {
    const radio = TestRenderer.create(<Radio label="label" />);
    expect(radio).toMatchSnapshot();
  });

  it("is checked when 'checked' prop is passed", () => {
    const radio = TestRenderer.create(<Radio label="label" checked />);
    expect(radio).toMatchSnapshot();
  });

  it("is disabled when 'disabled' prop is passed", () => {
    const radio = TestRenderer.create(<Radio label="label" disabled />);
    expect(radio).toMatchSnapshot();
  });

  it("sends change event on change", () => {
    const mockFn = jest.fn();
    const radio = shallow(<Radio label="label" onChange={mockFn} />);
    radio.find("input").simulate("change");
    expect(mockFn).toBeCalled();
  });

  it("sends radio value on change", () => {
    const mockFn = jest.fn();
    const radio = shallow(<Radio label="label" value="value" onChange={mockFn} />);
    radio.find("input").simulate("change");
    expect(mockFn.mock.calls[0][1]).toBe("value");
  });

  it("sends 'true' on change when not checked", () => {
    const mockFn = jest.fn();
    const radio = shallow(<Radio label="label" value="value" onChange={mockFn} />);
    radio.find("input").simulate("change");
    expect(mockFn.mock.calls[0][2]).toBeTruthy();
  });

  it("sends 'false' on change when checked", () => {
    const mockFn = jest.fn();
    const radio = shallow(<Radio label="label" value="value" onChange={mockFn} checked />);
    radio.find("input").simulate("change");
    expect(mockFn.mock.calls[0][2]).toBeFalsy();
  });
});
