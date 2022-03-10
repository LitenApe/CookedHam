import * as React from 'react';

export type PropsOf<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<T, React.ComponentPropsWithoutRef<T>>;

export type AsProps<T extends React.ElementType> = {
  as?: T;
};

export type ExtendableProps<ExtendedProps, OverrideProps> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>;

export type InheritableElementProps<
  T extends React.ElementType,
  P
> = ExtendableProps<PropsOf<T>, P>;

export type DynamicProps<T extends React.ElementType> = AsProps<T> &
  React.ComponentPropsWithoutRef<T>;
