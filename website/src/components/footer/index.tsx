import React from 'react';
import './index.css';
import { Layout, Row, Col, Space, Divider, Tooltip } from 'antd';
import {
  QrcodeOutlined,
  DollarOutlined,
  BankOutlined,
  ClockCircleOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Layout.Footer>
      <Divider className="slogan">
        <h3>UY TÍN CHẤT LƯỢNG LÀ NỀN TẢNG PHÁT TRIỂN VẠN PHÁT</h3>
      </Divider>
      <div className="footer">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <h4 className="title">Hỗ trợ khách hàng</h4>
            <Space direction="vertical">
              <Link to="/profile">Thẻ ưu đãi</Link>
              <Link to="/">Trung tâm bão hành</Link>
              <Link to="/">Thanh toán và giao hàng</Link>
              <Link to="/">Dịch vụ sửa chữa và bảo trì</Link>
            </Space>
          </Col>
          <Col span={6}>
            <h4 className="title">Chính sách mua hàng và bảo hành</h4>
            <Space direction="vertical">
              <Link to="/">Quy định chung</Link>
              <Link to="/">Chính sách bảo mật thông tin</Link>
              <Link to="/">Chính sách vận chuyển và lắp đặt</Link>
              <Link to="/">Chính sách bảo hành</Link>
              <Link to="/">Chính sách trả góp</Link>
              <Link to="/">Chính sách đổi trả và hoàn tiền</Link>
            </Space>

          </Col>
          <Col span={6}>
            <h4 className="title">Thông tin tuyển dụng</h4>
            <Space direction="vertical">
              <Link to="/">Hỏi đáp</Link>
              <Link to="/">Tuyển dụng</Link>
            </Space>

          </Col>
          <Col span={6}>
            <h4 className="title">Thông tin liên hệ</h4>
            <Space direction="vertical">
              <Space>
                <FacebookOutlined className="icons-size" style={{ color: '#1890FF' }} />
                <h5>/sangovanphatcenter</h5>
              </Space>
              <Space>
                <PhoneOutlined className="icons-size" style={{ color: '#25D366' }} />
                <h5>0914068283</h5>
              </Space>
              <Space>
                <MailOutlined className="icons-size" style={{ color: '#EA4335' }} />
                <h5>Ctyvanphatcenter.nnt@gmail.com</h5>
              </Space>

            </Space>
          </Col>
          <Col span={6}>
            <h4 className="title">Phương thức thanh toán</h4>
            <Space size="middle">
              <Tooltip placement="bottom" title="QR Code">
                <QrcodeOutlined className="icons-size" />
              </Tooltip>
              <Tooltip placement="bottom" title="Tiền mặt">
                <DollarOutlined className="icons-size" />
              </Tooltip>
              <Tooltip placement="bottom" title="Trả góp">
                <ClockCircleOutlined className="icons-size" />
              </Tooltip>
              <Tooltip placement="bottom" title="Internet Banking">
                <BankOutlined className="icons-size" />
              </Tooltip>
            </Space>
          </Col>
        </Row>
      </div>
    </Layout.Footer>
  );
}

export default Footer;