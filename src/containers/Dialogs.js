import React, { useState } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "redux/actions";
import { SideBar as BaseDialogs } from "components";
import { Context } from "context";
import { useEffect } from "react";

function Dialogs({ fetchDialogs, setCurrentDialog, currentDialogId, items, isLoading }) {
  const [searchValue, setSearchValue] = useState(null);
  const [filtred, setFiltred] = useState(Array.from(items));

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

  useEffect(() => {
    if (!items.length) {
      fetchDialogs()
    } else {
      setFiltred(Array.from(items))
    }
    
  }, [items])

  return (
    <Context.Provider
      value={{
        setCurrentDialog,
        currentDialogId
      }}
    >
      <BaseDialogs
        isLoading={isLoading}
        items={filtred}
        onSearch={onSearchInput}
        searchValue={searchValue}
      />
    </Context.Provider>
  );
}

export default connect(({dialogs}) => dialogs, dialogsActions)(Dialogs);
