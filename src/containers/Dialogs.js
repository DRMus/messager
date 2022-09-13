import React, { useState } from "react";

import { SideBar as BaseDialogs } from "components";
import { Context } from "context";

function Dialogs({ items }) {
  const [searchValue, setSearchValue] = useState(null);
  const [filtred, setFiltred] = useState(Array.from(items));

  const activeHandler = (id) => {
    setFiltred(filtred.map(item => {
      if(item.user._id === id) {
        item.isActive = !item.isActive
      } else {
        item.isActive = false
      }
      return item
    }));
  };

  const onSearchInput = (e) => {
    const value = e.target.value;
    console.log(value);
    setFiltred(
      items.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setSearchValue(e.target.value);
  };

  return (
    <Context.Provider
      value={{
        activeHandler,
      }}
    >
      <BaseDialogs
        items={filtred}
        onSearch={onSearchInput}
        searchValue={searchValue}
      />
    </Context.Provider>
  );
}

export default Dialogs;
