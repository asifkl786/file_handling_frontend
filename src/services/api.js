import axios from "axios";

const BASE_URL = "http://localhost:8080/api/images";
//const BASE_URL = "http://localhost:8080/api/files";

export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${BASE_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getImages = () => axios.get(BASE_URL);
//export const getImages = (id) => axios.get(`/api/files/${id}`);