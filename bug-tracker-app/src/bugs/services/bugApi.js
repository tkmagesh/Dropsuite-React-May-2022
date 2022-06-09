import axios from 'axios'

const serviceEndPoint = 'http://localhost:5000/bugs'

export async function getAll(){
    const response = await axios.get(serviceEndPoint);
    return response.data;
}

export async function save(bugData){
    if (bugData.id === 0){
        const response = await axios.post(serviceEndPoint, bugData);
        return response.data
    } else {
        const response = axios.put(`${serviceEndPoint}/${bugData.id}`, bugData)
        return (await response).data;
    }
}

export async function remove(bugData){
    const response = axios.delete(`${serviceEndPoint}/${bugData.id}`)
    return response.data
}
