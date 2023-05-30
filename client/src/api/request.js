import { BASE_URL } from "./base_url";
import axios from "axios"



//get

export const getAllRobot=async(name)=>{
    let Robot
    let URL

    if(!name){
      URL=BASE_URL+"/api/robot"
    }
    else{
        URL=BASE_URL+`/api/robot/?name=${name}`
    }
     await axios.get(URL)
     .then(res=>res.Robot)
  
}


//get robot by id
// export const getByIdRobot=async(id)=>{
// let robot
// }


//delete

export const deleteIdRobot=async(id)=>{
  let message
  await axios.delete(message) 

}

