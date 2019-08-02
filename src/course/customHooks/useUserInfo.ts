import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get('/userinfo').then(res => {
      setUserInfo(res.data);
    })
  }, []);

  return userInfo;
}
