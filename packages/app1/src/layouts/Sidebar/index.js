import 'antd/dist/antd.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { routes } from "../../routes"

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to={routes.featureOne}>Фича1</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to={routes.featureTwo}>Фича2</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export { Sidebar }
