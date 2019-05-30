import { useState } from 'react';

export default function useLogin() {
  const [loginInfo, setLoginInfo] = useState();
  const _loginInfo = localStorage.getItem('loginInfo');

  /** 
   * 从可能缓存登陆信息的地方取登陆信息 
   * + 本地缓存
   * + cookie
   * + 内存中等
   * */
  if (_loginInfo) {
    setLoginInfo(JSON.parse(_loginInfo));
  }

  /** 如果没有拿到登陆信息，则跳转至登陆页面 */
  window.location.href = '/user/login';

  return loginInfo;
}