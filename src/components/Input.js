import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'label',
      null,
      label,
      React.createElement('input', {
        type,
        value,
        onChange: (e) => onChange(e.target.value),
      })
    )
  );
};

export default InputField;
