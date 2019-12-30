import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    //baseURL:'http:123.207.32.32:8000',
    //旧接口
    //baseURL:'http:106.54.54.237:8000',
    //新接口
    baseURL:'http://106.54.54.237:8000/api/w1',
    //备份接口
    timeout: 10000
  })
  instance.interceptors.request.use(config =>{
    return config
  },err => {

  })
  instance.interceptors.response.use(res =>{
      return res.data
  },err =>{
    console.log(err);
  })
  return instance(config);
}
