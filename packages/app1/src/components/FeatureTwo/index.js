import React, { Suspense, lazy } from 'react'
import { ErrorBoundary } from "../Errors"

const SecondWidget = lazy(() => import('app3/Widget'))

const FeatureTwo = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback="...">
        <SecondWidget />
      </Suspense>
    </ErrorBoundary>
  )
}

export { FeatureTwo }
