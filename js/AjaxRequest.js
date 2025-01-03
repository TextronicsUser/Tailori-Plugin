
export function getRequest(url){
    return new Promise((resolve, reject) => {
        if(!url) reject("Invalid payload")
        fetch(url)
        .then((result) => {
            return result.json()
        }).then((result) => {
            resolve(result)
        }).catch((error) => {
            console.log(error)  
        })
    })
}

export function PostRequest(url,payload,isFormData = false){
    return new Promise((resolve, reject) => {
        if(!(payload && url)) reject("Invalid payload or url")
    const requestPayload = isFormData ? payload : JSON.stringify(payload)
        fetch(url,{
           method:"POST",
           body:requestPayload
        })
        .then((result) => {
            return result.json()
        }).then((result) => {
            resolve(result)
        }).catch((error) => {
            console.log(error)
        })
    })
}