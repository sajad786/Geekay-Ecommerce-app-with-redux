export const API_BASE_URL = 'https://test.awakenley.com/api';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl('/userlogin');
export const SIGNUP = getApiUrl('/signup');
export const SEND_OTP = getApiUrl('/send_otp');
export const CHANGE_PASSWORD = getApiUrl('/change_password');
export const FORGOT_PASSWORD = getApiUrl('/forgot_password');

export const VERIFY_OTP = getApiUrl('/verify_otp');
export const LOGOUT = getApiUrl('/logout');

