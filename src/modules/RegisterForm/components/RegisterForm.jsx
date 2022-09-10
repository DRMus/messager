import React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Block } from "../../../components";

function RegisterForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="auth--content">
      <div className="auth--top">
        <h2>Регистрация</h2>
        <p>Для работы на сайте, вам нужно зарегестрироваться</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login--form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "Значение не соответсвует E-mail" },
              { required: true, message: "Введите свой E-mail!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              size="large"
            />
          </Form.Item>
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
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Подтвердите ваш пароль!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "Пароли не совпадают!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Подтвердить пароль"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button--send">
              Зарегестрироваться
            </Button>
          </Form.Item>
          <Link className="form--signup" to="/">
            Войти в аккаунт
          </Link>
        </Form>
      </Block>
    </div>
  );
}

export default RegisterForm;
