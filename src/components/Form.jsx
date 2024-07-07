import React from "react";
import { Button, Form, Input, Select } from "antd";
const { TextArea } = Input;

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

const FormComponent = () => {
  return (
    <div className="sm:mt-16 bg-white sm:shadow-lg sm:p-8 p-6">
      <div className="hidden sm:block">
        <p className="text-center font-bold">Contact Us</p>
        <p className="text-center text-4xl font-bold mb-8">
          Make an Appointment
        </p>
      </div>
      <div className="sm:hidden">
        <p className="text-center text-2xl font-bold mb-4">Book Appointment</p>
      </div>
      <Form
        name="nest-messages"
        layout="horizontal"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <div className="flex sm:flex-row flex-col sm:gap-4 -mb-6">
          <Form.Item>
            <Input
              className="p-2 bg-gray-200"
              placeholder="Full Name"
              required
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              required
              name="email"
              rules={[{ type: "email", message: "Email is invalid" }]}
            >
              <Input className="p-2 bg-gray-200" placeholder="Email" />
            </Form.Item>
          </Form.Item>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-4 w-full">
          <Form.Item className="sm:w-[47%]">
            <Select
              className="select-field"
              placeholder="Please Select"
              size="large"
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="sm:w-[47%]">
            <Select placeholder="Please Select" size="large" className="">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item>
          <TextArea className="bg-gray-200" rows={4} placeholder="message" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full sm:w-min sm:mx-32 p-6"
          >
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
