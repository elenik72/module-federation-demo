import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"

import * as Components from "./components";
import * as Layouts from "./layouts";

const Root = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layouts.App />
      </Router>
    </ErrorBoundary>
  )
}

export default Root
