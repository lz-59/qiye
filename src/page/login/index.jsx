import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd'
import { signUp } from '@/actions/login'
import './styles.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

function Login (props) {
  const { signUp, history } = props
  const onFinish = async values => {
    const res = await signUp(values)
    const { status, message } = res.payload
    if (Number(status) === 200) {
      history.push('/home')
      console.log(message)
    }else{
      console.log(message)
    }
  }
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login-box">
      <div>
        <h1>My Account Login</h1>
        <p>Unlimited ideas. Unlimited power. Unlimited joy. Unlimited opportunities.</p>
      </div>
      <div>
        <div>
          <p>Login</p>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="pwd"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div>
        <p>AppUi © 2020</p>
        <p>Purchase a license</p>
      </div>
    </div>
  )
}

export default connect(state => ({}), {
  signUp
})(Login)