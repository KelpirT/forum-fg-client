import React, { useContext, createContext, useState } from "react";
import MainRoute from "../../../routes/router";
import MainHeader from "./MainHeader";
import { Menu, Layout, Flex } from "antd";

// import { Menu } from "antd";
import { Col, Row } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const layoutStyle = {
  textAlign: 'center',
  // minHeight: 120,
  lineHeight: '100vh',
  color: '#fff',
  backgroundColor: 'black',
  display:'flex'
};
const headerStyle = {
  textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '100vh',
  color: '#fff',
  // backgroundColor: 'black',
};
const contentStyle = {
  textAlign: 'center',
  // minHeight: 120,
  lineHeight: '100vh',
  color: '#fff',
  backgroundColor: 'black',
};
const MainLayout = () => (
  <Row style={{ height: "100vh" }}>
    <Col
      xs={0}
      sm={0}
      md={0}
      lg={0}
      xl={4}
      style={{ backgroundColor: "red" }}
    ></Col>
    <Col xs={24} sm={24} md={24} lg={24} xl={16}>
      <div style={{ display: "flex", flexDirection: "column", height: "" }}>
        <Layout  style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </div>
    </Col>
    <Col
      xs={0}
      sm={0}
      md={0}
      lg={0}
      xl={4}
      style={{ backgroundColor: "red" }}
    ></Col>
  </Row>
);
export default MainLayout;
