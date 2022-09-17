import React from "react";
import { Input } from "antd";
import { Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { Dialogs } from "components";
import "./SideBar.scss";

function SideBar({ items, onSearch, isLoading }) {
  const prefix = <SearchOutlined className="search--input--prefix" />;
  console.log(isLoading);

  return (
    <div className="chat--sidebar">
      <div className="sidebar--header">
        <div className="sidebar--header--icon">
          <p>Сообщения</p>
        </div>
        <div className="sidebar--header--search">
          <Input
            placeholder="Поиск..."
            className="search--input"
            suffix={prefix}
            onChange={(e) => onSearch(e)}
          />
        </div>
      </div>
      <div className="chat--sidebar--dialogs">
        {isLoading ? (
          <div className="dialogs--loading">
            <Spin tip="Загрузка диалогов..." className="loading--spin" />
          </div>
        ) : items.length > 0 ? (
          <Dialogs items={items} />
        ) : (
          <div className="chat--sidebar--dialogs--empty">
            <p>Чат с пользователем не найден</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
