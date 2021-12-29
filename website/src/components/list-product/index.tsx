import React from 'react';
import './index.css';
import { Button, Divider, List, Card, Typography, Badge, Space } from 'antd';
import { Link } from 'react-router-dom';
import sanGoCongNghiep from '../../data/san-go-cong-nghiep.json';
import sanGoTuNhien from '../../data/san-go-tu-nhien.json';
import phuKien from '../../data/phu-kien.json';
import isSoldOut from '../../utils/is-sold-out';
import colorSoldOut from '../../utils/color-sold-out';
import numberWithCommas from '../../utils/number-with-commas';

const renderCardDetail = (item: any) => {
  return (
    <Badge.Ribbon
      text={isSoldOut(item.number)}
      color={colorSoldOut(item.number)}
    >
      <Card
        hoverable
        cover={<img alt={item.tag} src={item.image} />}
      >
        <Space>
          <h2 className="price">{numberWithCommas(item.price)} ₫</h2>
          <h5 className="old-price">
            <del>{numberWithCommas(item.oldPrice)} ₫</del>
          </h5>
        </Space>
        <Card.Meta
          description={
            <Typography.Paragraph  ellipsis={{ rows: 2 }}>
              {item.description}
            </Typography.Paragraph >
          }
        />
      </Card>
    </Badge.Ribbon>
  );
}

const renderSanGoCongNghiep = () =>
  <>
    <Divider orientation="left">Sàn gỗ công nghiệp</Divider>
    <List
      grid={{ gutter: 16, column: 5 }}
      dataSource={sanGoCongNghiep.slice(0, 5)}
      renderItem={item => (
        <List.Item>
          <Link to={item.route}>
            {renderCardDetail(item)}
          </Link>
        </List.Item>
      )}
    />
    <Link to="/category/san-go-cong-nghiep" style={{ margin: 'auto' }}>
      <Button type="primary">
        Hiện thị thêm
      </Button>
    </Link>
  </>

const renderSanGoTuNhien = () =>
  <>
    <Divider orientation="left">Sàn gỗ tự nhiên</Divider>
    <List
      grid={{ gutter: 16, column: 5 }}
      dataSource={sanGoTuNhien.slice(0, 5)}
      renderItem={item => (
        <List.Item>
          <Link to={item.route}>
            {renderCardDetail(item)}
          </Link>
        </List.Item>
      )}
    />
    <Link to="/category/san-go-tu-nhien" style={{ margin: 'auto' }}>
      <Button type="primary">
        Hiện thị thêm
      </Button>
    </Link>
  </>

const renderPhuKien = () =>
  <>
    <Divider orientation="left">Phụ kiện</Divider>
    <List
      grid={{ gutter: 16, column: 5 }}
      dataSource={phuKien.slice(0, 5)}
      renderItem={item => (
        <List.Item>
          <Link to={item.route}>
            {renderCardDetail(item)}
          </Link>
        </List.Item>
      )}
    />
    <Link to="/category/phu-kien" style={{ margin: 'auto' }}>
      <Button type="primary">
        Hiện thị thêm
      </Button>
    </Link>
  </>

const ListProduct = () => {
  return (
    <>
      {renderSanGoCongNghiep()}
      {renderSanGoTuNhien()}
      {renderPhuKien()}
    </>
  );
}

export default ListProduct;