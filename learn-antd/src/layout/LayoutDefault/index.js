import LearnGrid from "../../components/LearnGrid";
import React, { useState } from "react";
import { Flex, Layout } from "antd";
import "./LayoutDefault.scss"
import logo from "../../assets/images/logo.png"
import logoFold from "../../assets/images/logo-fold.png"
import { MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import Notify from "../../components/Notify";
import MenuSider from "../../components/MenuSider";
import {Outlet} from "react-router-dom"

const { Header, Footer, Sider, Content } = Layout;


function LayoutDefault(){
  //collapsed là cho thanh sider nhỏ lại đóng mở
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="layout-default">
        <header className="header" >
          <div
            className={
              "header__logo " + (collapsed && "header__logo--collapsed")
            }
          >
            {collapsed ? (
              <img src={logoFold} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>
          <div className="header__nav">
            <div className="header__nav-left">
              <div className="header__collapse">
                <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav-right">
              <Notify/>
            </div>
          </div>
        </header>
        <Layout>
          <Sider className="sider"  collapsed={collapsed} theme={"light"}>
            <MenuSider/>
          </Sider>

          <Content className="content">
            {/* nội dung cần hiển thị chỗ nào thì bỏ outlet vào */}
            <Outlet />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default LayoutDefault