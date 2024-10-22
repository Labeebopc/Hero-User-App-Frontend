import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;



export const getUserData = async (token) => {
  try {
    const { data } = await axios.post(`${host}/user/get_user_data`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getAllPosts = async (token, id) => {
    try {
      const { data } = await axios.get(`${host}/get_all_posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  };
  
  export const createNewPost = async (token, datas, id) => {
    
    const postData = { ...datas, userId: id }
    try {
      const { data } = await axios.post(`${host}/add_post`, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data)
      
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  };

