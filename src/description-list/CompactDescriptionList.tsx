import React, { ReactElement } from "react";
import cookedNames from "cookednames";

import { uniqueId } from "../utils/uniqueId";

interface DLItems {
  label: string;
  description: string;
  highlight?: boolean;
  style?: "underline" | "line-through" | "bold";
}

interface Props {
  items: DLItems[];
  className?: string;
}

type CompactDescriptionListProps = Props
& React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;

export function CompactDescriptionList({
  className,
  items,
  ...rest
}: CompactDescriptionListProps): ReactElement {
  const modifiers = cookedNames(
    "ch-description-list",
    "ch-compact-description-list",
    className
  );

  return (
    <dl className={modifiers} {...rest}>
      {items.map(({
        label, description, highlight, style,
      }) => {
        const modifiers = cookedNames({ highlight, }, style);
        return (
          <div key={`dl-${label}-${uniqueId()}`} className={modifiers}>
            <dt>{label}</dt>
            <dd>{description}</dd>
          </div>
        );
      })}
    </dl>
  );
}
