const BACKEND_URL = "http://localhost:4000"
export const getAPI = (url:String,params: any)=> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'https://regal-selkie-753848.netlify.app/');
    return fetch(`${BACKEND_URL}${url}?${new URLSearchParams(params || {})}`,{headers})
    .then(res=>res.json())
    .catch(err=>console.log('error', err))
}

export const postAPI = (url: String,body:any)=> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return fetch(`${BACKEND_URL}${url}`,{
        method: "POST",
    body: JSON.stringify(body),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(res=>res.json())
    .catch(err=>console.log('error', err))
}