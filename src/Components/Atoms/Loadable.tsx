import React, { Suspense } from 'react';

// project imports
import { Loader } from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

export const Loadable = (Component: React.ComponentType) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
