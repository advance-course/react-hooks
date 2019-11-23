import React, { useRef, useState } from "react";
import Input from './components/Input';
import { Button } from "antd-mobile";

const Demo = () => {
  const textInput = useRef<any>(null);
  const [text, setText] = useState('')

  const focusTextInput = () => {
    if (textInput.current) {
      textInput.current.focus();
      textInput.current.sayHi();
    }
  }

  return (
    <>
      <Input ref={textInput} onChange={setText} value={text} />
      <Button onClick={focusTextInput}>点击我，input组件获得焦点</Button>
      <div>{text}</div>
    </>
  );
}

export default Demo;