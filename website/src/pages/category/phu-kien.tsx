import React, { useEffect } from 'react';
import { Layout, Badge, List, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import phuKien from '../../data/phu-kien.json';
import isSoldOut from '../../utils/is-sold-out';
import colorSoldOut from '../../utils/color-sold-out';
import numberWithCommas from '../../utils/number-with-commas';

const PhuKien = () => {
  useEffect(() => {
    document.title = "Phụ kiện";
  }, []);

  return (
    <Layout className="main">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3,
        }}
        dataSource={phuKien}
        footer={
          <div>
            Có tất cả <b>{phuKien.length}</b> sản phẩm
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <h5 className="old-price">
                <del>{numberWithCommas(item.oldPrice)} ₫</del>
              </h5>
              ,
              <h2 className="price">{numberWithCommas(item.price)} ₫</h2>,
            ]}
            extra={
              <img
                width={272}
                alt={item.tag}
                src={item.image}
              />
            }
          >
            <List.Item.Meta
              title={
                <Badge.Ribbon
                  text={isSoldOut(item.number)}
                  color={colorSoldOut(item.number)}
                >
                  <Link to={item.route}>
                    {item.name}
                  </Link>
                </Badge.Ribbon>
              }
              description={<Tag color="#87d068">Phụ kiện</Tag>}
            />
            <Typography.Paragraph ellipsis={{ rows: 2 }}>
              {item.description}
            </Typography.Paragraph >
          </List.Item>
        )}
      />
    </Layout>
  );
}

export default PhuKien;