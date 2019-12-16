import axios from 'axios'

function crossRequest(host,uri,method,data){
    if(!data){}
    let r_url = (host) ? (host+uri) : uri;
    return axios({
        method: method,
        url: r_url,
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': sessionStorage.getItem('token'),
        }
    })
}


export function postJson(uri,data,host){
    return crossRequest(host,uri,"post",data)
}

export function get(uri,data,host){
    let r_url = (host) ? (host+uri) : uri
    return axios.get(r_url,{
        params: data
    })
}