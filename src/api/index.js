import { create } from 'apisauce'

const api = create({
  baseURL: 'https://api.jsonbin.io/b/5f6b6cd665b18913fc51f71f',
  headers: {
    accept: 'application/json',
    contentType: 'application/json',
  },
})

const ApiCall = async (action) => {
  return await api.get(`/`).then((response) => {
    return response
  })
}

export default ApiCall;
