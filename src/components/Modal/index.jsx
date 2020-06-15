import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'

export default function Modals (props) {
  const { handleOk, handleCancel, visible, bol, user } = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue(user)
  }, [user])
  return (
    <div>
      <Modal
          title={bol ? "添加" : "修改" }
          visible={visible}
          getContainer={false}
          onOk={
            () =>
            form
            .validateFields()
            .then(values => {
              form.resetFields()
              bol ? handleOk(values) : handleOk({...values, id: user.id})
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            })
          }
          onCancel={handleCancel}
        >
          <Form
            form={form}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "请输入" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "请输入" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Msg"
              name="msg"
              rules={[{ required: true, message: "请输入" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
    </div>
  )
}
