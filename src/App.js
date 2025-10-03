/* eslint-disable prettier/prettier */

import "antd/dist/antd.css"
import "animate.css"

import { Button, Dropdown, Grid, Image, Menu, Tabs, Typography } from "antd"
import {
  alcogol,
  asianCuisine,
  banquet,
  barCard,
  menuEN,
  menuUA,
  wine,
} from "./data/images"

import { DownOutlined } from "@ant-design/icons"
import React from "react"
import { useState } from "react"

const UA = "UA"
const EN = "EN"

// images are imported from ./data/images

const menuMap = {
  EN: menuEN,
  UA: menuUA,
}

const { TabPane } = Tabs
const { Title } = Typography
const { useBreakpoint } = Grid

function App() {
  const screens = useBreakpoint()
  const [language, setLanguage] = useState(UA)

  const languageMenu = (
    <Menu
      onClick={(e) => {
        setLanguage(e?.key)
      }}
    >
      <Menu.Item key={EN}>{EN}</Menu.Item>
      <Menu.Item key={UA}>{UA}</Menu.Item>
    </Menu>
  )

  const tabs = [
    {
      key: "menu",
      label: language === EN ? "Menu" : "Меню",
      images: menuMap[language],
    },
  ]

  if (language === UA) {
    tabs.push(
      { key: "alcogol", label: "Алкоголь", images: alcogol },
      { key: "wine", label: "Вина", images: wine },
      { key: "bar", label: "Барна карта", images: barCard },
      { key: "banquet", label: "Банкетне", images: banquet },
      { key: "asian", label: "Азіатська кухня", images: asianCuisine }
    )
  }

  const Gallery = ({ images }) => (
    <div
      className={"animate__animated  animate__backInRight"}
      style={{ display: "flex", justifyContent: "center", width: "100vw" }}
    >
      <div
        style={{
          overflowY: "auto",
          height: "calc(100vh - 120px)",
          width: "100vw",
        }}
      >
        {images.map((item, index) => (
          <Image key={index} preview={false} width="100%" src={item} />
        ))}
      </div>
    </div>
  )
  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          backgroundColor: "#e2d2bf",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 8px 8px 8px",
        }}
      >
        <Title level={3} style={{ color: "#522e24", marginBottom: 0 }}>
          Mr. Charlie
        </Title>

        <Dropdown overlay={languageMenu}>
          <Button>
            {language} <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <Tabs
        className="responsive-tabs"
        type="card"
        size={screens.xs ? "small" : "middle"}
        tabBarGutter={8}
        defaultActiveKey="menu"
      >
        {tabs.map(({ key, label, images }) => (
          <TabPane tab={label} key={key}>
            <Gallery images={images} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default App
