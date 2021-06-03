import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Layout } from 'antd';

import { routes } from "../../routes"
import * as Components from "../../components";

const { Content: AntContent, Footer } = Layout;

const Content = () => {
  return (
    <Layout >
      <AntContent style={{ margin: '24px 16px 0' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: "calc(100vh - 94px)", background: "#fff" }}
        >
          <Switch>
            <Route exact path={routes.root} component={Components.Main} />
            <Route exact path={routes.featureOne} component={Components.FeatureOne} />
            <Route exact path={routes.featureTwo} component={Components.FeatureTwo} />
          </Switch>
        </div>
      </AntContent>
      <Footer style={{ textAlign: 'center' }}>
        Module Federation ©2021
      </Footer>
    </Layout>
  )
}

export { Content }
