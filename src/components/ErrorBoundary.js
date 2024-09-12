import React, { Component } from 'react';
import ErrorPage from './components/pages/ErrorPage.js'; 

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
   
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
  
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
