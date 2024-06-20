import { AppstoreAddOutlined, AppstoreOutlined, DashboardOutlined, MacCommandOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Children } from "react";
import { Link } from "react-router-dom";

function MenuSider(){
    const items = [
      {
        key: "/dashboard",
        label: "Dashboard",
        icon: <DashboardOutlined />,
        children: [
          {
            key: "/",
            label: <Link to="/">Default</Link>,
          },
          {
            key: "/crm",
            label: "CRM",
          },
          {
            key: "/e-commerce",
            label: <Link to="/e-commerce">E-commerce</Link>,
          },
          {
            key: "/projects",
            label: "Projects",
          },
        ],
      },
      {
        key: "menu-2",
        label: "Apps",
        icon: <AppstoreOutlined />,
        children: [
          {
            key: "menu-2-1",
            label: "Menu 2-1",
          },
          {
            key: "menu-2-2",
            label: "Menu 2-2",
          },
          {
            key: "menu-2-3",
            label: "Menu 2-3",
          },
          {
            key: "menu-2-4",
            label: "Menu 2-4",
          },
        ],
      },
      {
        key: "menu-3",
        label: "Menu 3",
        icon: <MacCommandOutlined />,
      },
      {
        key: "/book-room",
        label: <Link to="/book-room">Book Room</Link>,
        icon: <MacCommandOutlined />,
      },
      {
        key: "/create-room",
        label: <Link to="/create-room">Create Room</Link>,
        icon: <AppstoreAddOutlined />,
      },
      {
        key: "/list-room",
        label: <Link to="/list-room">List Room</Link>,
        icon: <AppstoreAddOutlined />,
      },
    ];

    return (
      <>
        <Menu
          mode="inline"
          items={items}
          // mặc định lựa chọn item điền vào key
          defaultSelectedKeys={["/"]}
          // tự động mở option
          defaultOpenKeys={["/dashboard"]}
        />
      </>
    );
}
export default MenuSider