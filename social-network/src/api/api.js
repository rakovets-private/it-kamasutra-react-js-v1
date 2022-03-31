import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4c2a14f4-de4f-467d-ad92-6dffcdc2ea9d'
  }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`);
}

export const getProfile = (userId) => {
  return instance.get(`/profile/${userId}`);
}

export const auth = () => {
  return instance.get(`/auth/me`)
}

export const followToUser = (userId) => {
  return instance.post(`/follow/${userId}`, {})
}

export const unfollowFromUser = (userId) => {
  return instance.delete(`/follow/${userId}`, {})
}
