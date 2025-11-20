export const getTime=()=>{
    let message=""
    let houre=new Date().getHours()
    if (houre<=9){
        message="上午"
    }else if (houre<=12){
        message="中午"
    }else if (houre <=18){
        message="下午"
    }else {
        message="晚上"
    }
    return message
}