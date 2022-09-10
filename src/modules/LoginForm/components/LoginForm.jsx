import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Block } from "../../../components";

function LoginForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="auth--content">
      <div className="auth--top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйта, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login--form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Введите свой логин!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Логин"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Введите свой пароль!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button--send">
              ВОЙТИ В АККАУНТ
            </Button>
          </Form.Item>
          <Link className="form--signup" to="/register">
            Зарегестрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
}

export default LoginForm;
