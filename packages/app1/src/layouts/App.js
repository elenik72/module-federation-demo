import React from 'react'
import { Layout } from 'antd';

import { Sidebar } from './Sidebar'
import { Content } from './Content'

const App = () => {
  return (
    <React.StrictMode>
      <Layout>
        <Sidebar />
        <Content />
      </Layout>
    </React.StrictMode>
  )
}

export { App }
