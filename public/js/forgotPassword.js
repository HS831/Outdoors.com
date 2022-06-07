import axios from 'axios';
import { showAlert } from './alerts';

export const forgotpwd = async (email) => {
  const URL = window.location;
  try {
    const res = await axios({
      method: 'POST',
      url: `${URL.protocol}://${URL.host}/api/v1/users/forgotPassword`,
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
