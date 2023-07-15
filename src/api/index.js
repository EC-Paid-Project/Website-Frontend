import axios from "axios";
export const baseURL = "https://owaisali246.pythonanywhere.com/";
// export const baseURL = "https://76ae-115-186-48-54.ngrok-free.app/";
// const API = axios.create({ baseURL: "http://127.0.0.1:8000/" });
const API = axios.create({ baseURL: baseURL });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("authToken")) {
    req.headers.Authorization = `Token ${JSON.parse(
      localStorage.getItem("authToken")
    )}`;
  }

  return req;
});

export const fetchAllProducts = async () => await API.get(`/products`);
export const getDistributors = async () => await API.get(`/distributor`);

export const fetchProductBySearch = async (search) =>
  await API.get(`/products?search=${search}`);
export const fetchOneProduct = async (id) => await API.get(`/products/${id}`);

export const sendCart = async (cart) => await API.post(`/send_cart/`, cart);

export const sendAddress = async (address) =>
  await API.post(`/address/`, address);
export const getOrderHistory = async () => await API.get(`/history`);

export const login = async (body) =>
  await API.post(`/dj-rest-auth/login/`, body);
export const getoffer = async () => await API.get(`/offers`);

export const signup = async (body) =>
  await API.post(`/dj-rest-auth/registration/`, body);
export const send = async (body) => await API.post(`/order/`, body);
export const fetchorderhistory = async (body) => await API.get(`/history`);
export const fetchOrderDetails = async (id) => await API.get(`/order/${id}`);
export const user = async (body) => await API.get(`dj-rest-auth/user`);
export const googlelogin = async (body) =>
  await API.post(`dj-rest-auth/google/`, { access_token: body });
export const logout = async (body) => await API.post(`dj-rest-auth/logout/`);
export const resetPassword = async (body) =>
  await API.post(`dj-rest-auth/password/reset/`, body);
export const sendOtp = async (body, uuid, token) =>
  await API.post(`dj-rest-auth/password/reset/confirm/${uuid}/${token}/`, body);

// Handle the response as needed

// Add more authentication-related API calls as needed

//...

// Add more POST API calls as needed

//...

// Add more GET API calls as needed

//...

// export const getAllPost = (query) => API.get(`/jobPost/getPost/query?page=${query}`);

// export const getAllCompany = (query,type) => API.get(`/company/getAllCompany/query?${type}=${query}`);
// export const getOneCompany = (id) => API.get(`/company/getOneCompany/${id}`);

// export const getOneUser = (id) => API.get(`/user/getuser/${id}`);

// export const getAllUser = (query) => API.get(`/user/getAllUser/query?page=${query}`);
// export const postSkillOrSummary= (form)=>API.post("/user/SkillAndSummaryUpdate",form)

// export const signin = (form) => API.post("/user/signin",form);
// export const signup = (form) => API.post("/user/signup",form);
// export const uploadCv = (form) => API.post("/user/uploadCv",form);
// export const createProfile = (form) => API.post("/user/createprofile",form);
// export const addEducationOrExperience = (form) => API.post("/user/addEducationAndExperience",form);
// export const updateEducationOrExperience = (form,id) => API.post(`/user/updateEducationAndExperience/${id}`,form);
// export const createJobPost= (form) => API.post("/jobPost/createJobPost",form);
// export const deleteJobPost= (id) => API.post(`/jobPost/deleteJobPost/${id}`);
// export const deleteEducationAndExperience= (form,id) => API.post(`/user/deleteeducationAndexperience/${id}`,form);
// export const createCompany= (form) => API.post(`/company/createCompanyProfile`,form);
// export const applyForJob= (form) => API.post(`/jobPost/applyForJob`,form);

// export const getPostByArea= (form) => API.post(`/jobPost/getPostByArea`,form);
// export const updateEmail= (form) => API.post(`/company/updateEmail`,form);
