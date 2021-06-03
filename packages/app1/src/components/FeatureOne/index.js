import React, { Suspense, lazy } from 'react'
import { ErrorBoundary } from "../Errors"

const FirstWidget = lazy(() => import('app2/Widget'))

const FeatureOne = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback="...">
        <FirstWidget />
      </Suspense>
    </ErrorBoundary>
  )
}

export { FeatureOne }
