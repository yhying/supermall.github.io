// import {request} from './request.js'
import request from './axios'


export function getHomeMuticata(){
    return request({
        url:'/home/multidata',
        method: "GET",
    })
}
export function getHomegoods(type,page){
    return request({
        url:'/home/data',
        method: "GET",
        params:{
            type,
            page
        }
    })
}