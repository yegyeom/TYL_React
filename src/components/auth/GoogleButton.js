// GoogleButton.js
import React from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
dotenv.config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;

export default function oogleButton({ onSocial }) {
  const onSuccess = async response => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;

    console.log(`아이디값 : ${googleId} 이메일 : ${email} 이름 : ${name}`);
  };

  const onFailure = error => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
