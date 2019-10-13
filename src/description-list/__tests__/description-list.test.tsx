import React from "react";
import TestRenderer from "react-test-renderer";

import { DescriptionList } from "../index";

describe("DescriptionList", () => {
  it("renders without crashing", () => {
    TestRenderer.create(<DescriptionList items={[]} />);
  });

  it("renders a title and description each row", () => {
    const dl = TestRenderer.create(<DescriptionList items={[
      { label: "label-1", description: "description-1", },
      { label: "label-2", description: "description-2", },
      { label: "label-3", description: "description-3", },
      { label: "label-4", description: "description-4", }
    ]}
    />);

    expect(dl).toMatchSnapshot();
  });

  it("renders multiple title and a description each row", () => {
    const dl = TestRenderer.create(<DescriptionList items={[
      { label: ["label-1a", "label-1b", "label1c"], description: "description-1", },
      { label: ["label-2a", "label-2b", "label2c"], description: "description-2", },
      { label: ["label-3a", "label-3b", "label3c"], description: "description-3", },
      { label: ["label-4a", "label-4b", "label4c"], description: "description-4", }
    ]}
    />);

    expect(dl).toMatchSnapshot();
  });

  it("renders a title and multiple description each row", () => {
    const dl = TestRenderer.create(<DescriptionList items={[
      { label: "label-1", description: ["description-1a", "description-1b", "description-1c"], },
      { label: "label-2", description: ["description-2a", "description-2b", "description-2c"], },
      { label: "label-3", description: ["description-3a", "description-3b", "description-3c"], },
      { label: "label-4", description: ["description-4a", "description-4b", "description-4c"], }
    ]}
    />);

    expect(dl).toMatchSnapshot();
  });
});
