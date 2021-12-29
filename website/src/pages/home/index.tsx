import React from 'react';
import './index.css';
import { Layout } from 'antd';
import Category from '../../components/category';
import Banner from '../../components/banner';
import ListProduct from '../../components/list-product';

const Home = () => {
  return (
    <React.Fragment>
      <Layout className="main">
        <Category />
        <Banner />
      </Layout>
      <Layout className="main">
        <ListProduct />
      </Layout>
    </React.Fragment>
  );
}

export default Home;