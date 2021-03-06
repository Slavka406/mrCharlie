/* eslint-disable prettier/prettier */

import 'antd/dist/antd.css'
import 'animate.css'

import { Button, Dropdown, Grid, Image, Menu, Tabs, Typography } from 'antd'
import { Col, Row } from '@qonsoll/react-design'

import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'

const UA = 'UA'
const EN = 'EN'

const menuUA = [
  'menuUA/Str1.jpeg',
  'menuUA/str2.jpeg',
  'menuUA/str3.jpeg',
  'menuUA/str4.jpeg',
  'menuUA/str5.jpeg',
  'menuUA/str6.jpeg',
  'menuUA/str7.jpeg',
  'menuUA/str8.jpeg',
  'menuUA/str9.jpeg',
  'menuUA/str10.jpeg',
  'menuUA/str11.jpeg',
  'menuUA/str12.jpeg',
  'menuUA/str13.jpeg',
  'menuUA/str14.jpeg'
]

const menuEN = [
  'menuEN/Str1.jpg',
  'menuEN/str2.jpg',
  'menuEN/str3.jpg',
  'menuEN/str4.jpg',
  'menuEN/str5_.jpg',
  'menuEN/str6_.jpg',
  'menuEN/str7_.jpg',
  'menuEN/str8_.jpg',
  'menuEN/str9_.jpg',
  'menuEN/str10_.jpg',
  'menuEN/str11_.jpg',
  'menuEN/str12_.jpg',
  'menuEN/str13_.jpg',
  'menuEN/str14_.jpg'
]

const alcogol = [
  'alcogol/Alkogol1.jpg',
  'alcogol/Alkogol2.jpg',
  'alcogol/Alkogol3.jpg',
  'alcogol/Alkogol4.jpg'
]

const banquet = [
  'banquet/banquet0.jpg',
  'banquet/banquet1.jpeg',
  'banquet/banquet2.jpeg'
]

const thaiMenu = [
  'thaiMenu/thaiMenu.jpeg',
  'thaiMenu/thaiMenu2.jpeg'
]

const wine = ['wine/redWine.jpg', 'wine/whiteWine.jpg']

const menuMap = {
  EN: menuEN,
  UA: menuUA
}

const { TabPane } = Tabs
const { Title } = Typography
const { useBreakpoint } = Grid

function App() {
  const screens = useBreakpoint()
  const [language, setLanguage] = useState(UA)

  const menu = (
    <Menu
      onClick={(e) => {
        setLanguage(e?.key)
      }}>
      <Menu.Item key={EN}>{EN}</Menu.Item>
      <Menu.Item key={UA}>{UA}</Menu.Item>
    </Menu>
  )

  return (
    <div style={{ backgroundImage: '0001.jpg' }}>
      <Row
        v="center"
        display="flex"
        style={{
          padding: '8px 8px 8px 8px',
          background: '#e2d2bf',
          marginBottom: '8px'
        }}>
        <Col>
          <Title level={3} style={{ color: '#522e24', marginBottom: 0 }}>
            Mr. Charlie
          </Title>
        </Col>
        <Col cw="auto">
          <Dropdown overlay={menu}>
            <Button>
              {language} <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0 8px 0 8px'
        }}>
        <Col>
          <Tabs type="card" defaultActiveKey="1" style={{
                    width: screens.xxl
                      ? '50%'
                      : screens.xl
                      ? '60%'
                      : screens.lg
                      ? '70%'
                      : screens.md
                      ? '80%'
                      : screens.sm
                      ? '90%'
                      : screens.xs && '100vw'
                  }}>
            <TabPane tab={language === EN ? 'Menu' : '????????'} key="1">
              <div
                className={'animate__animated  animate__backInRight'}
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <div
                  style={{
                    overflowY: 'auto',
                    height: 'calc(100vh - 120px)',
                    width: screens.xxl
                      ? '50%'
                      : screens.xl
                      ? '60%'
                      : screens.lg
                      ? '70%'
                      : screens.md
                      ? '80%'
                      : screens.sm
                      ? '90%'
                      : screens.xs && '100vw'
                  }}>
                  {menuMap[language].map((item, index) => (
                    <Image
                      key={index}
                      preview={false}
                      width="100%"
                      src={item}
                    />
                  ))}
                </div>
              </div>
            </TabPane>
            {language === UA && (
              <>
                <TabPane tab="????????????????" key="3">
                  <div
                    className={'animate__animated  animate__backInRight'}
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                    <div
                      style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 120px)',
                        width: screens.xxl
                          ? '50%'
                          : screens.xl
                          ? '60%'
                          : screens.lg
                          ? '70%'
                          : screens.md
                          ? '80%'
                          : screens.sm
                          ? '90%'
                          : screens.xs && '100%'
                      }}>
                      {alcogol.map((item, index) => (
                        <Image
                          key={index}
                          preview={false}
                          width="100%"
                          src={item}
                        />
                      ))}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="??????a" key="4">
                  <div
                    className={'animate__animated  animate__backInRight'}
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                    <div
                      style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 120px)',
                        width: screens.xxl
                          ? '50%'
                          : screens.xl
                          ? '60%'
                          : screens.lg
                          ? '70%'
                          : screens.md
                          ? '80%'
                          : screens.sm
                          ? '90%'
                          : screens.xs && '100%'
                      }}>
                      {wine.map((item, index) => (
                        <Image
                          key={index}
                          preview={false}
                          width="100%"
                          src={item}
                        />
                      ))}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="????????????????" key="5">
                  <div
                    className={'animate__animated  animate__backInRight'}
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                    <div
                      style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 120px)',
                        width: screens.xxl
                          ? '50%'
                          : screens.xl
                          ? '60%'
                          : screens.lg
                          ? '70%'
                          : screens.md
                          ? '80%'
                          : screens.sm
                          ? '90%'
                          : screens.xs && '100%'
                      }}>
                      {banquet.map((item, index) => (
                        <Image
                          key={index}
                          preview={false}
                          width="100%"
                          src={item}
                        />
                      ))}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="?????????????? ????????" key="6">
                  <div
                    className={'animate__animated  animate__backInRight'}
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                    <div
                      style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 120px)',
                        width: screens.xxl
                          ? '50%'
                          : screens.xl
                          ? '60%'
                          : screens.lg
                          ? '70%'
                          : screens.md
                          ? '80%'
                          : screens.sm
                          ? '90%'
                          : screens.xs && '100%'
                      }}>
                      {thaiMenu.map((item, index) => (
                        <Image
                          key={index}
                          preview={false}
                          width="100%"
                          src={item}
                        />
                      ))}
                    </div>
                  </div>
                </TabPane>
              </>
            )}

            {/* <TabPane tab="????????????" key="3">
              <Image
                width='100%'
                src="menuUA/Str1.jpg"
              />
            </TabPane> */}
          </Tabs>
        </Col>
      </Row>
    </div>
  )
}

export default App
