import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="Nội dung không tìm thấy"
      subTitle="Xin lỗi, trang này không tồn tại."
      extra={
        <Link to="/">
          <Button type="primary">Trở về trang chính</Button>
        </Link>
      }
    />
  );
}

export default NotFound;