import React, { useState } from "react";

import { SideBar as BaseDialogs } from "components";

function Dialogs({ items }) {
  const [searchValue, setSearchValue] = useState(null);
  const [filtred, setFiltred] = useState(Array.from(items));

  const onSearchInput = (e) => {
    const value = e.target.value;
    console.log(value)
    setFiltred(items.filter((dialog) => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setSearchValue(e.target.value);
  };

  return (
    <BaseDialogs
      items={filtred}
      onSearch={onSearchInput}
      searchValue={searchValue}
    />
  );
}

export default Dialogs;
