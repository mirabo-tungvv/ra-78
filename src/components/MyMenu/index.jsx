import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const MyMenu = () => {
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Home",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Quản lý sản phẩm",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Quản lý người dùng",
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items}
    />
  );
};

export default MyMenu;
