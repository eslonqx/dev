import React from 'react';
import './index.css';
import { Layout, Carousel, Image } from 'antd';

const Banner = () => {
  return (
    <Layout.Content className="banner-content">
      <Carousel dotPosition="right" autoplay>
        <Image
          preview={false}
          src="https://loremflickr.com/1075/192/banner-1"
        />
        <Image
          preview={false}
          src="https://loremflickr.com/1075/192/banner-2"
        />
        <Image
          preview={false}
          src="https://loremflickr.com/1075/192/banner-3"
        />
      </Carousel>
    </Layout.Content>
  );
}

export default Banner;