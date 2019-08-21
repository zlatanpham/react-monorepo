import React, { lazy, Suspense } from 'react';

interface LoadableProps {
  fallback: React.ReactNode | null;
}
const loadable = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  { fallback = null }: LoadableProps = { fallback: null },
) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
