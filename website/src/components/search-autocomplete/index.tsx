import React, { useState } from 'react';
import { AutoComplete, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { SelectProps } from 'antd/es/select';
import products from '../../data/products.json';
import handleText from '../../utils/handle-text';

const searchResult = (query: string): any =>
  products.map(item => {
    if (
      handleText(item.name)
        .toUpperCase()
        .indexOf(handleText(query).toUpperCase()) !== -1
    ) {
      return {
        value: item.tag,
        label: (
          <Link to={item.route}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{item.name}</span>
              <Tag color="#87d068">{item.categoryName}</Tag>
            </div>
          </Link>
        ),
      }
    }
    else return undefined;
  })
    .filter(item => item !== undefined);

const SearchAutoComplete = ({ children }: any) => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 355, position: 'absolute' }}
      options={options}
      onSearch={handleSearch}
      notFoundContent="Không tìm thấy từ khoá"
    >
      {children}
    </AutoComplete>
  );
}

export default SearchAutoComplete;