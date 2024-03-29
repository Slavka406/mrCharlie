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
  'menuUA/Str1.jpg',
  'menuUA/str2.jpg',
  'menuUA/str3.jpg',
  'menuUA/str4.jpg',
  'menuUA/str5.jpg',
  'menuUA/str6.jpg',
  'menuUA/str7.jpg',
  'menuUA/str8.jpg',
  'menuUA/str9.jpg',
  'menuUA/str10.jpg',
  'menuUA/str11.jpg',
  'menuUA/str12.jpg',
  'menuUA/str13.jpg',
  'menuUA/str14.jpg'
]

const menuEN = [
  'menuEN/Str1.jpg',
  'menuEN/str2.jpg',
  'menuEN/str3.jpg',
  'menuEN/str4.jpg',
  'menuEN/str5.jpg',
  'menuEN/str6.jpg',
  'menuEN/str7.jpg',
  'menuEN/str8.jpg',
  'menuEN/str9.jpg',
  'menuEN/str10.jpg',
  'menuEN/str11.jpg',
  'menuEN/str12.jpg',
  'menuEN/str13.jpg',
  'menuEN/str14.jpg'
]

const alcogol = [
  'alcogol/Alkogol1.jpg',
  'alcogol/Alkogol2.jpg',
  'alcogol/Alkogol3.jpg',
  'alcogol/Alkogol4.jpg'
]

const banquet = [
  'banquet/banquet0.jpg',
  'banquet/banquet1.jpg',
  'banquet/banquet2.jpg'
]

const asianCuisine = [
  'asianCuisine/asianMenu1.jpg',
  'asianCuisine/asianMenu2.jpg',
  'asianCuisine/asianMenu3.jpg',
  'asianCuisine/asianMenu4.jpg',
  'asianCuisine/asianMenu5.jpg',
  'asianCuisine/asianMenu6.jpg',
  'asianCuisine/asianMenu7.jpg',
  'asianCuisine/asianMenu8.jpg',
  'asianCuisine/asianMenu9.jpg',
  'asianCuisine/asianMenu10.jpg',
  'asianCuisine/asianMenu11.jpg',
  'asianCuisine/asianMenu12.jpg',
  'asianCuisine/asianMenu13.jpg',
  'asianCuisine/asianMenu14.jpg',
  'asianCuisine/asianMenu15.jpg',
  'asianCuisine/asianMenu16.jpg',
  'asianCuisine/asianMenu17.jpg',
  'asianCuisine/asianMenu18.jpg',
  'asianCuisine/asianMenu19.jpg',
  'asianCuisine/asianMenu20.jpg',
  'asianCuisine/asianMenu21.jpg',
  'asianCuisine/asianMenu22.jpg',
  'asianCuisine/asianMenu23.jpg',
  'asianCuisine/asianMenu24.jpg',
  'asianCuisine/asianMenu25.jpg',
  'asianCuisine/asianMenu26.jpg',
]
// const thaiMenu = [
//   'thaiMenu/thaiMenu1.jpg',
//   'thaiMenu/thaiMenu2.jpg',
//   'thaiMenu/thaiMenu3.jpg',
//   'thaiMenu/thaiMenu4.jpg',
//   'thaiMenu/thaiMenu5.jpg',
//   'thaiMenu/thaiMenu6.jpg',
//   'thaiMenu/thaiMenu7.jpg',
//   'thaiMenu/thaiMenu8.jpg',
// ]

const wine = ['wine/redWine.jpg', 'wine/whiteWine.jpg']

// const sushi = [
//   'sushi/sushi1.jpg',
//   'sushi/sushi2.jpg',
//   'sushi/sushi3.jpg',
//   'sushi/sushi4.jpg',
//   'sushi/sushi5.jpg',
//   'sushi/sushi6.jpg',
//   'sushi/sushi7.jpg',
//   'sushi/sushi8.jpg'
// ]

const barCard = [
  'barCard/barCard1.jpg',
  'barCard/barCard2.jpg',
  'barCard/barCard3.jpg',
  'barCard/barCard4.jpg',
  'barCard/barCard5.jpg',
  'barCard/barCard6.jpg',
  'barCard/barCard7.jpg',
  'barCard/barCard8.jpg'
]

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
            <TabPane tab={language === EN ? 'Menu' : 'Меню'} key="1">
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
                <TabPane tab="Алкоголь" key="3">
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
                <TabPane tab="Винa" key="4">
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
                <TabPane tab="Барна карта" key="5">
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
                      {barCard.map((item, index) => (
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
                <TabPane tab="Банкетне" key="6">
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
                <TabPane tab="Азіатська кухня" key="7">
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
                      {asianCuisine.map((item, index) => (
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
                {/* <TabPane tab="Тайське меню" key="7">
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
                </TabPane> */}
                {/* <TabPane tab="Суші" key="8">
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
                      {sushi.map((item, index) => (
                        <Image
                          key={index}
                          preview={false}
                          width="100%"
                          src={item}
                        />
                      ))}
                    </div>
                  </div>
                </TabPane> */}
              </>
            )}

            {/* <TabPane tab="Банкет" key="3">
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
