import { Component, createElement, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: () => JSX.Element;
  logger?: (error: unknown, info: unknown) => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    if (this.props.logger) {
      this.props.logger(error, info);
    }
  }

  render() {
    const { children, fallback } = this.props;

    if (this.state.hasError) {
      return createElement(fallback);
    }

    return children;
  }
}

export default ErrorBoundary;
