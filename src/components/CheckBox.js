import React from 'react';

function CheckBox({ checked, children, ...rest }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <idv>{checked ? '체크됨' : '체크 안됨'}</idv>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
