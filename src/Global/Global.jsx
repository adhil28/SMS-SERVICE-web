import { sendMessage } from "../Components/Web/Helper/Fcm"

export const mobileToken = 'null'
export const api = 'null'
export const isValidToken = (token) => {
    return new Promise((resolve,reject)=>{
        sendMessage({msg:'validate token',code:'801'},token).then((res)=>{
            if(res.data.results[0].error==null){
                resolve(true)
            }else{
                resolve(false)
            }
        })
    })
}
