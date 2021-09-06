import dotenv from 'dotenv';
import axios from 'axios';
import jwt from 'jsonwebtoken';

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_HOST;
axios.defaults.withCredentials = true;

export const onLoginSuccess = response => {
  const { code, accessToken, message } = response.data;

  if (code === 401) {
    // console.log('토큰이 만료되었습니다.');
  } else if (code === 200) {
    // 로그인 로직
    const { email, nickname } = jwt.verify(accessToken, process.env.REACT_APP_JWT_SECRET);
    const user = { nickname: nickname, email: email, profileImage: null };
    // accessToken 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return user;
  } else if (code === 300) {
    alert('회원가입이 완료되었습니다!');
  }
};

export const onSilentRefresh = async () => {
  return await axios
    .get('/auth/slient-refresh')
    .then(onLoginSuccess)
    .catch(error => {});
};
