import axios from "axios";

export let createPostService = async payload => {
    let { data } = await AxiosServices.post("/posts", payload);
    return data;
}

export let getAllPostService = async () => {
  try {
    let { data } = await AxiosServices.get("/posts");
    console.log(data);
    return data;
  } catch(error) {
    console.log(error);
  }
}

export let getOnePostService = async (id) => {
  // console.log(id);
  try {
    let { data } = await AxiosServices.get(
      `http://localhost:9000/posts/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export let editOnePostService = async (id, payload) => {
  try {
    AxiosServices.put(`/posts/${id}`, payload)  
  } catch (error) {
    console.log(error);
  }
}

export let deletePostService = async (id) => {
  try {
    AxiosServices.delete(`http://localhost:9000/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
}

let AxiosServices = axios.create({
  baseURL: "http://localhost:9000",
});

export default AxiosServices