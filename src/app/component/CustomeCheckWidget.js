import React from 'react';

function CustomeCheckWidget(props) {
  return (
    <button
      role={'button'}
      className={props.value ? 'checked' : 'unchecked'}
      onClick={() => props.onChange(!props.value)}
    >
      {String(!props.value)}
    </button>
  );
}

export default CustomeCheckWidget;
