import React, {useRef, useImperativeHandle, forwardRef, Ref, useState, ChangeEvent} from 'react';

export interface InputProps {
  value?: string,
  onChange?: (value: string) => any
}

export interface XInput {
  focus: () => void;
  blur: () => void;
  sayHi: () => void
}

function Input({value, onChange}: InputProps, ref: Ref<XInput>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [_value, setValue] = useState(value || '');

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current && inputRef.current.focus()
    },
    blur: () => {
      inputRef.current && inputRef.current.blur()
    },
    sayHi: () => {
      console.log('hello, world!');
    }
  }));

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setValue(value);
    onChange && onChange(value);
  }

  return (
    <div>
      自定义Input组件
      <input value={_value} onChange={_onChange} ref={inputRef} />
    </div>
  );
}

export default forwardRef(Input);