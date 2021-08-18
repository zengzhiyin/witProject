import request from '@/api/request'; // 引入封装好的request

// //获取所有模块
export function getAllModule() {
    return request({
        method: "get", // 请求方式
        url:'/module/getAll',// 请求url
      
    },)
}






