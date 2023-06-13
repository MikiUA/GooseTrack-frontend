export const BASE_URL='https://goosetrack-backend-zk53.onrender.com';
export const jwt = ()=>JSON.parse(localStorage.getItem('token'));
export const rjwt = ()=>JSON.parse(localStorage.getItem('refreshToken'));
