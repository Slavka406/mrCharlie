import { Tabs, Typography, Row, Col, Image, Grid } from 'antd';
import 'antd/dist/antd.css';
import "animate.css"

const { TabPane } = Tabs;
const { Title } = Typography;
const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();

  function callback(key) {
    console.log(key); 
  }

const menu = [
  "mrCharlie/Str1.jpg",
  "mrCharlie/str2.jpg",
  "mrCharlie/str3.jpg",
  "mrCharlie/str4.jpg",
  "mrCharlie/str5.jpg",
  "mrCharlie/str6.jpg",
  "mrCharlie/str7.jpg",
  "mrCharlie/str8.jpg",
  "mrCharlie/str9.jpg",
  "mrCharlie/str10.jpg",
  "mrCharlie/str11.jpg",
  "mrCharlie/str12.jpg",
  "mrCharlie/str13.jpg",
  "mrCharlie/str14.jpg"
]

const alcogol = [
  "mrCharlie/Alkogol1.jpg",
  "mrCharlie/Alkogol2.jpg",
  "mrCharlie/Alkogol3.jpg",
  "mrCharlie/Alkogol4.jpg"
]

  return (
    <div>
      <Row style={{display:'flex', padding: '8px 8px 0 8px', background: '#e2d2bf', marginBottom: '8px'}}>        
        <Col >
          <Title level={3} style={{color: '#522e24'}}>Mr. Charlie</Title>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{display:'flex', justifyContent:'center', padding: '0 8px 0 8px'}}>
        <Col >
          <Tabs type="card" defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Меню" key="1">
              <div 
                className={'animate__animated  animate__backInRight'}
                style={{ 
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <div style={{ 
                  overflowY: 'auto',
                  height: 'calc(100vh - 120px)',
                  width: screens.xxl ? '50%' : 
                        screens.xl ? '60%' : 
                        screens.lg ? '70%' : 
                        screens.md ? '80%' :  
                        screens.sm ? '90%' :  
                        screens.xs && '100vw' 
                  }}>
                   {menu.map(item => 
                      <Image
                        preview={false}
                        // className={'animate__animated  animate__backInRight'}
                        width='100%'
                        src={item}
                      />
                    )}
                </div>
              </div>
            </TabPane>
            <TabPane tab="Алкоголь" key="2">
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
                    width: screens.xxl ? '50%' : 
                        screens.xl ? '60%' : 
                        screens.lg ? '70%' : 
                        screens.md ? '80%' :  
                        screens.sm ? '90%' :  
                        screens.xs && '100%' 
                  }}>
                    {alcogol.map(item => 
                        <Image
                          preview={false}
                          // className={'animate__animated  animate__backInRight'}
                          width='100%'
                          src={item}
                        />
                      )}
                </div>
              </div>
            </TabPane>
            {/* <TabPane tab="Банкет" key="3">
              <Image
                width='100%'
                src="mrCharlie/Str1.jpg"
              />
            </TabPane> */}
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default App;
