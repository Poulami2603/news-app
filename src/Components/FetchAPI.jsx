import axios from 'axios'

export const Apifetch=async(data,page)=>{
    const url = `https://newsapi.org/v2/everything?q=${data}&pageSize=6&page=${page}&apiKey=e41d8a6d089648a5bc396f3b1f97b089`
    return axios.get(url)
}