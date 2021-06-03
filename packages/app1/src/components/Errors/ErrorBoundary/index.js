import 'antd/dist/antd.css';

import React from 'react';
import { Spin, Skeleton } from 'antd';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Skeleton loading={this.state.hasError} active />
    }

    return this.props.children;
  }
}
