import axios from './instance'

export default {
  login: (data) => {
    return axios.api.get(`/user?email=${data.email}`).then(
      (response) => {
        console.log(response)

        return response
      },
      (error) => {
        return error.response.data
      }
    )
  },
}
