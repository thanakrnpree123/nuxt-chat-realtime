import axios from './instance'

export default {
  firebaseChat: process.env.FIREBASE_CHAT || 'conversations',
  getUserChat: (id) => {
    return axios.api.get(`/v1/chats/users/${id}`).then(
      (response) => {
        return response
      },
      (error) => {
        return error.response.data
      }
    )
  },
}
