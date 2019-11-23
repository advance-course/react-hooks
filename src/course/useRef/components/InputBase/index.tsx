import React, {forwardRef, useState, ChangeEvent} from 'react';

export interface InputProps {
  value?: string,
  onChange?: (value: string) => any
}

function Input({value, onChange}: InputProps, ref: any) {
  const [_value, setValue] = useState(value || '');

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    onChange && onChange(value);
  }

  return (
    <div>
      自定义Input组件
      <input value={_value} onChange={_onChange} ref={ref} />
    </div>
  );
}

export default forwardRef(Input);