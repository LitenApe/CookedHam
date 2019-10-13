import React from "react";
import TestRenderer from "react-test-renderer";

import { CompactDescriptionList } from "../index";

describe("CompactDescriptionList", () => {
  it("renders without crashing", () => {
    TestRenderer.create(<CompactDescriptionList items={[]} />);
  });

  it("renders a title and description each row", () => {
    const dl = TestRenderer.create(<CompactDescriptionList items={[
      { label: "label-1", description: "description-1", },
      { label: "label-2", description: "description-2", },
      { label: "label-3", description: "description-3", },
      { label: "label-4", description: "description-4", }
    ]}
    />);

    expect(dl).toMatchSnapshot();
  });
});
