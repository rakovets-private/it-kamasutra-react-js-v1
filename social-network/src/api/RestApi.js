import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4c2a14f4-de4f-467d-ad92-6dffcdc2ea9d'
  }
})

export const RestApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`);
  },
  auth() {
    return instance.get(`/auth/me`)
  },
  followToUser(userId) {
    return instance.post(`/follow/${userId}`, {})
  },
  unfollowFromUser(userId) {
    return instance.delete(`/follow/${userId}`, {})
  },
}

export const ProfileApi = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  putStatus(userStatus) {
    return instance.put(`/profile/status`, {status: userStatus});
  },
}
