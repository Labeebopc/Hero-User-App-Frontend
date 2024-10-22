import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;
// const host = "http://207.154.207.197:8080";

export const userRegistration = async (datas) => {
  try {

    const { data } = await axios.post(`${host}/user_registration`, datas, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const userLogin = async (datas) => {
  // console.log(datas)
  try {
    const { data } = await axios.post(`${host}/user_login`, datas);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};