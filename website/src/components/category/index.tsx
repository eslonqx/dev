import React from 'react';
import './index.css';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const Category = () => {
  const navigate = useNavigate();

  return (
    <Layout.Sider width={245} className="category">
      <Menu>
        <Menu.SubMenu
          key="sub1"
          title="Sàn gỗ công nghiệp"
          icon={<AppstoreOutlined style={{ color: '#F65F14' }} />}
          onTitleClick={() => navigate('/category/san-go-cong-nghiep')}
        >
          <Menu.Item
            key="1"
            onClick={() => navigate('/products/san-go-cong-nghiep-1')}
          >
            Sàn Kosmos - Việt Nam
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => navigate('/products/san-go-cong-nghiep-2')}>
            Sàn Lamton - Trung Quốc
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => navigate('/products/san-go-cong-nghiep-3')}
          >
            Sàn Artfloor - Thổ Nhĩ Kỳ
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => navigate('/products/san-go-cong-nghiep-4')}
          >
            Sàn Thaixin - Thái Lan
          </Menu.Item>
          <Menu.Item
            key="5"
            onClick={() => navigate('/products/san-go-cong-nghiep-5')}
          >
            Sàn Floorpan - Nga
          </Menu.Item>
          <Menu.Item
            key="6"
            onClick={() => navigate('/products/san-go-cong-nghiep-6')}
          >
            Siêu chịu nước sàn gỗ Hillman - Malaysia
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub2"
          title="Sàn gỗ tự nhiên"
          icon={<AppstoreOutlined style={{ color: '#13D61B' }} />}
          onTitleClick={() => navigate('/category/san-go-tu-nhien')}
        >
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub3"
          title="Sàn nhựa"
          icon={<AppstoreOutlined style={{ color: '#3498DB' }} />}
          onTitleClick={() => navigate('/category/san-nhua')}
        >
          <Menu.Item
            key="7"
            onClick={() => navigate('/products/san-amaz')}
          >Sàn Amaz</Menu.Item>
          <Menu.Item
            key="8"
            onClick={() => navigate('/products/san-aimaru')}
          >Sàn Aimaru</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub4"
          title="Phụ kiện"
          icon={<SettingOutlined style={{ color: '#7D3C98' }} />}
          onTitleClick={() => navigate('/category/phu-kien')}
        />
      </Menu>
    </Layout.Sider>
  );
}

export default Category;