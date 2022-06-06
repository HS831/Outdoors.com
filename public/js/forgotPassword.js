import axios from 'axios';
import { showAlert } from './alerts';

export const forgotpwd = async (email) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/forgotPassword',
      data: {
        email,
      },
    });
    // console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', 'Reset Password Token Sent to Email');
      window.setTimeout(() => {
        location.assign('/login');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
