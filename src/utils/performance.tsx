import React from 'react';

// Performance monitoring utilities

export interface PerformanceMetrics {
  renderTime: number;
  interactionTime: number;
  formSubmissionTime: number;
  loadTime: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTiming(key: string): void {
    this.metrics.set(`${key}_start`, performance.now());
  }

  endTiming(key: string): number {
    const startTime = this.metrics.get(`${key}_start`);
    if (!startTime) {
      console.warn(`No start time found for key: ${key}`);
      return 0;
    }
    
    const duration = performance.now() - startTime;
    this.metrics.set(key, duration);
    this.metrics.delete(`${key}_start`);
    
    // Log slow operations in development
    if (process.env.NODE_ENV === 'development' && duration > 100) {
      console.warn(`Slow operation detected: ${key} took ${duration.toFixed(2)}ms`);
    }
    
    return duration;
  }

  getMetric(key: string): number | undefined {
    return this.metrics.get(key);
  }

  getAllMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  clearMetrics(): void {
    this.metrics.clear();
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const monitor = PerformanceMonitor.getInstance();
  
  return {
    startTiming: (key: string) => monitor.startTiming(key),
    endTiming: (key: string) => monitor.endTiming(key),
    getMetric: (key: string) => monitor.getMetric(key),
    getAllMetrics: () => monitor.getAllMetrics(),
  };
};

// High-order component for performance monitoring
export const withPerformanceMonitoring = <P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) => {
  const WrappedComponent = React.forwardRef<any, P>((props, ref) => {
    const monitor = usePerformanceMonitor();
    
    React.useEffect(() => {
      monitor.startTiming(`${componentName}_render`);
      return () => {
        monitor.endTiming(`${componentName}_render`);
      };
    }, [monitor]);
    
    return React.createElement(Component, { ...props, ref } as any);
  });
  
  WrappedComponent.displayName = `withPerformanceMonitoring(${componentName})`;
  return WrappedComponent;
};

// Utility functions
export const measureFormSubmission = async (
  submitFn: () => Promise<void>,
  formName: string
): Promise<void> => {
  const monitor = PerformanceMonitor.getInstance();
  monitor.startTiming(`${formName}_submission`);
  
  try {
    await submitFn();
  } finally {
    const duration = monitor.endTiming(`${formName}_submission`);
    console.log(`Form ${formName} submission took ${duration.toFixed(2)}ms`);
  }
};

export const measureRenderTime = (componentName: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      const monitor = PerformanceMonitor.getInstance();
      monitor.startTiming(`${componentName}_${propertyKey}`);
      
      const result = originalMethod.apply(this, args);
      
      monitor.endTiming(`${componentName}_${propertyKey}`);
      return result;
    };
    
    return descriptor;
  };
};