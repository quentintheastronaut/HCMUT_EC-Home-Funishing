import { React, useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "../styles/Admin.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Axios from "axios";
import { Table, Tag, Space } from "antd";
import Collections from "./Collections";
const { Column, ColumnGroup } = Table;

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function Admin() {
  return (
    <div className="Admin">
      <Router>
        <Layout>
                <Layout>
                <Sider width={300} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Tài khoản khách hàng">
                        <Menu.Item key="1">
                            <Link exact to="/admin/users">
                                Danh sách thông tin khách hàng
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="Thông tin sản phẩm">
                        <Menu.Item key="5">
                            <Link exact to="/admin/collections">
                                Danh sách thông tin sản phẩm
                            </Link>
                            
                        </Menu.Item>
                        <Menu.Item key="6">Thêm sản phẩm mới</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="Đơn hàng">
                        <Menu.Item key="9">Đã hoàn tất</Menu.Item>
                        <Menu.Item key="10">Đang giao hàng</Menu.Item>
                        <Menu.Item key="11">Đã hủy</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    
                    </Breadcrumb>

                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        <Suspense fallback={<h1>....</h1>}>
                            <Switch>
                                <Route exact path="/admin/collections" >
                                    <CollectionData />
                                </Route>

                                <Route exact path="/admin/users" >
                                    <UserData />
                                </Route>
                            </Switch>
                        </Suspense>                   
                    </Content>
                </Layout>
                </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

function CollectionData() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/collections`).then((response) => {
      setItem(response.data);
    });

    return (
        <div>
            Danh sách thông tin sản phẩm
            <Table dataSource={item}>
                <Column title="ID" dataIndex="ID" key="ID" />
                <Column title="Name" dataIndex="Fullname" key="Fullname" />
                <Column title="Price" dataIndex="Price" key="Price" />
                <Column title="State" dataIndex="State" key="State" />                 
            </Table>
        </div>
    )
}

function UserData() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/users`).then((response) => {
      setItem(response.data);
    });

    return (
        <div>
            Danh sách thông tin khách hàng
            <Table dataSource={item}>
                <Column title="ID" dataIndex="ID" key="ID" />
                <Column title="Name" dataIndex="Fullname" key="Fullname" />
                <Column title="Phone Number" dataIndex="PhoneNum" key="PhoneNum" />
                <Column title="Email" dataIndex="Email" key="Email" />
                <Column title="Address" dataIndex="Address" key="Address" />    
            </Table>
        </div>
        
    )
}

export default Admin;
