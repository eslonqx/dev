import React from 'react';
import './index.css';
import {
  notification,
  Divider,
  Layout,
  Menu,
  Input,
  Badge
} from 'antd';
import {
  UserOutlined,
  BellOutlined,
  ShopOutlined,
  ReconciliationOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SearchAutoComplete from '../search-autocomplete';

const openNotification = () =>
  notification.info({
    message: 'Thông báo',
    description:
      'Tính năng hiện đang phát triển',
    placement: 'topRight',
  });

const Header = () => {
  return (
    <div className="header">
      <Layout.Header>
        <Link to="/">
          <div className="logo" />
        </Link>
        <Divider className="divider" type="vertical" />
        <div className="search-box">
          <SearchAutoComplete>
            <Input.Search placeholder="Nhập từ khoá tìm kiếm" enterButton />
          </SearchAutoComplete>
        </div>
        <Menu mode="horizontal">
          <Menu.SubMenu
            key="1"
            icon={
              <Badge size="small" dot>
                <BellOutlined style={{ fontSize: 18, color: '#F4D03F' }} />
              </Badge>
            }
            title="Thông báo"
          >
            <Menu.Item key="notification" disabled>Không có thông báo </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item
            key="2"
            icon={<ReconciliationOutlined style={{ fontSize: 18, color: '#1890FF' }} />}
            onClick={openNotification}
          >
            Đơn hàng
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ShopOutlined style={{ fontSize: 18, color: '#E74C3C' }} />}
            onClick={openNotification}
          >
            Giỏ hàng
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<UserOutlined style={{ fontSize: 18 }} />}
            onClick={openNotification}
          >
            Đăng nhập
          </Menu.Item>
        </Menu>
      </Layout.Header>
    </div>
  );
}

export default Header;