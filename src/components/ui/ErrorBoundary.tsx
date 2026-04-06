import React from 'react';
import Button from './Button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center bg-[#0D1117] px-4">
          <div className="text-center max-w-md">
            <div className="text-5xl mb-6">⚠️</div>
            <h1 className="text-2xl font-bold text-[#F0F6FC] font-[Syne,sans-serif] mb-3">
              Something went wrong
            </h1>
            <p className="text-[#8B949E] text-base mb-6">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <Button variant="red" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
