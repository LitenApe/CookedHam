import { ComponentProps } from 'react';

/**
 * Redeclare forwardRef to better support generic types
 */
declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export type HTMLTags = keyof JSX.IntrinsicElements;

export type DynamicProps<T extends HTMLTags> = {
  as?: T;
} & ComponentProps<T>;
