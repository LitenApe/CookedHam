import React from "react";

import { storiesOf } from "@storybook/react";

import { DescriptionList, CompactDescriptionList } from "../../../packages";

const stories = storiesOf("Atoms/DescriptionList", module);

stories.add("DescriptionList", () => (
  <DescriptionList items={[
    {
      label: [
        "Braun Nurnberg",
        "Heliopan",
        "Keiser Fototechnick"
      ],
      description: "Manufacturer of photo equipments",
    },
    {
      label: "Braun Nurnberg",
      description: [
        "Canon",
        "Casio",
        "Fujifilm",
        "Fujinon",
        "Hasselblad"
      ],
    },
    {
      label: "Heliopan",
      description: "IMAX",
    },
    {
      label: "Keiser Fototechnick",
      description: [
        "Kodak",
        "Leica",
        "Nikon",
        "Olympus",
        "Panasonic",
        "Pentax",
        "Polaroid",
        "Zeiss"
      ],
    },
    {
      label: "Former producers of cameras or lenses and filters",
      description: [
        "Bronica",
        "Bell & Howell",
        "Ducati",
        "Honeywell",
        "Konica"
      ],
    }
  ]}
  />
));

stories.add("CompactDescriptionList", () => (
  <CompactDescriptionList items={[
    { label: "Blackmagic Design", description: "Australia", },
    { label: "Phase One", description: "Denmark", style: "underline", },
    { label: "Leica", description: "Germany", },
    { label: "Canon", description: "Japan", },
    { label: "Fujifilm", description: "Japan", highlight: true, },
    { label: "Nikon", description: "Japan", },
    { label: "Olympus", description: "Japan", },
    { label: "Ricoh", description: "Japan", style: "bold", },
    { label: "Sigma", description: "Japan", },
    { label: "Sony", description: "Japan", style: "line-through", },
    { label: "Hasselblad", description: "Sweden", }
  ]}
  />
));
