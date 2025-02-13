import React from 'react'
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderNav = () => {
  return (
    <>
    <Header style={{ display: "flex", alignItems: "center" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={[
              {
                key: 1,
                label: `Retro`,
              },
            ]}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header></>
  )
}

export default HeaderNav