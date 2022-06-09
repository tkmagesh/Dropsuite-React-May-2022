import axios from "axios";

const serviceEndPoint = 'http://localhost:3030/projects';

export async function getAll(){
    const response = await axios.get(serviceEndPoint);
    return response.data
}

export async function save(newProjectData){
    const response = await axios.post(serviceEndPoint, newProjectData)
    return response.data;
}