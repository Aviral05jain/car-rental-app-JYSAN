import React from 'react';
import { Row, Col, Form, Input } from 'antd';

function Login(){
const imageUrls = [
  'http://mtesa.net/wp-content/uploads/2020/06/ia_100005539.jpg',
  'https://tse3.mm.bing.net/th?id=OIP.HWZB1docctHdsXBG8LNQmgHaEL&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.TT0OI4_FH2h3YiSRE4yLTQHaE6&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.2c9uMfja8nW_25yDFQ0U0AHaE8&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.eX5Azhrtycufu4sR9yVgKQHaFj&pid=Api&P=0&h=180',
]


return (
  <div className='login'>
    <Row gutter={16}>
      <Col lg={16}>
        <div className='page-container'>
          <div className='marquee-container'>
            {imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      </Col>
      <Col lg={8} className='text-left p-5'>
        <Form layout='vertical' className='login-form p-5'>
          <h1>Login</h1>
          <Form.Item name='username' label="Username" rules={[{ required: true }]}>
            <Input placeholder='Enter Username' maxLength={25} />
          </Form.Item>
          <Form.Item name='password' label="Password" rules={[{ required: true }]}>
            <Input placeholder='Enter Password' />
          </Form.Item>
          <button className='btn1'>Login</button>
        </Form>
      </Col>
    </Row>
  </div>
);
}


export default Login;