import {request} from './request.js'

export function getHomeMuticata(){
    return request({
        url:'/home/multidata'
    })
}