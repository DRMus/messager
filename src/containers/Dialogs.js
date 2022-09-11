import React, { useState } from "react";

import { Dialogs as BaseDialogs } from "components";

function Dialogs({ items }) {
  const [searchValue, setSearchValue] = useState(null);
  let filtred = Array.from(items);

  const onSearchInput = (e) => {
    const value = e.target.value;
    filtred = filtred.filter((dialog) => dialog.user.fullname.indexOf(value) >= 0);
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
