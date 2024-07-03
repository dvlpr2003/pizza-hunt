import axios from "axios";


export async function getlocation(latitude,longitude){
    try{
        const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en `)
        console.log(response)
    }catch(error){
        console.log(error)

    }
}