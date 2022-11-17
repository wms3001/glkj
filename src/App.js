import logo from './logo.svg';
import './App.css';
import {Button, Toast, Layout, Nav, Avatar, Breadcrumb, Skeleton, Space, Switch, Dropdown} from '@douyinfe/semi-ui';
import Header from "@douyinfe/semi-ui/lib/es/image/previewHeader";
import Sider from "@douyinfe/semi-ui/lib/es/layout/Sider";
import Footer from "@douyinfe/semi-ui/lib/es/datePicker/footer";
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting,IconUser,IconStar,IconEdit } from '@douyinfe/semi-icons';

function App() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
          <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
              <div>
                  <Nav
                      mode={'horizontal'}
                      items={[
                          { itemKey: 'main',text: '主页',icon: <IconHome />},
                          { itemKey: 'system',text: '系统管理',icon: <IconSetting />}
                      ]}
                      onSelect={key => console.log(key)}
                      header={{
                          // https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg
                          logo: <img src="https://s1.ax1x.com/2022/11/16/zZmf9U.png" />,
                          text: '公狼科技'
                      }}
                      footer={
                          <Dropdown
                              position="bottomRight"
                              render={
                                  <Dropdown.Menu>
                                      <Dropdown.Item>详情</Dropdown.Item>
                                      <Dropdown.Item>退出</Dropdown.Item>
                                  </Dropdown.Menu>
                              }
                          >
                              <span>glkj</span>
                              <Avatar size="small" color='light-blue' style={{ margin: 4 }}>GL</Avatar>
                          </Dropdown>
                      }
                  />
              </div>
          </Header>
          <Layout>
              <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                  <Nav
                      style={{ maxWidth: 220, height: '100%' }}
                      defaultSelectedKeys={['Home']}
                      items={[
                          { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
                          { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
                          { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
                          { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
                      ]}
                      footer={{
                          collapseButton: true,
                      }}
                  />
              </Sider>
              <Content
                  style={{
                      padding: '24px',
                      backgroundColor: 'var(--semi-color-bg-0)',
                  }}
              >
                  <div
                      style={{
                          borderRadius: '10px',
                          border: '1px solid var(--semi-color-border)',
                          height: '376px',
                          padding: '32px',
                      }}
                  >
                      <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading={true}>
                          <p>Hi, Bytedance dance dance.</p>
                          <p>Hi, Bytedance dance dance.</p>
                      </Skeleton>
                  </div>
              </Content>
          </Layout>
          <Footer
              style={{
                  justifyContent: 'space-between',
                  padding: '20px',
                  color: 'var(--semi-color-text-2)',
                  backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                  textAlign: 'center'
              }}
          >
                    Copyright © 2022 glkj. All Rights Reserved.
          </Footer>
      </Layout>
    );

}

export default App;
