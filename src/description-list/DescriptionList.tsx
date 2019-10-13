import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { uniqueId } from "../utils/uniqueId";

interface DLItems {
  label: string | string[];
  description: string | string[];
}

interface Props {
  items: DLItems[];
  className?: string;
}

type DescriptionListProps = Props
& React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;

export function DescriptionList({ className, items, ...rest }: DescriptionListProps): ReactElement {
  const modifiers = cookedNames("ch-description-list", className);
  const componentId = uniqueId("ch-dl_");

  return (
    <dl className={modifiers} {...rest}>
      {items.map(({ label, description, }) => {
        const titles = typeof label === "string"
          ? [label]
          : label;
        const descriptions = typeof description === "string"
          ? [description]
          : description;

        return (
          <div key={`dl-${componentId}-${uniqueId()}`}>
            {titles.map(title => <dt key={`dt-${title}-${uniqueId()}`}>{title}</dt>)}
            {descriptions.map(desc => <dd key={`dd-${componentId}-${uniqueId()}`}>{desc}</dd>)}
          </div>
        );
      })}
    </dl>
  );
}
