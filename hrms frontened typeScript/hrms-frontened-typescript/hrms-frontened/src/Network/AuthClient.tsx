import axios from "axios";
import { error } from "console";
import Swal from "sweetalert2";


const authClient = axios.create({
    baseURL: 'http://localhost:8000/',
});

authClient.interceptors.request.use(
    (config)=>{
        // config.headers["Authorization"]=`Bearer ${localStorage.getItem("access_token")}`
        return config
    },
    (error)=>Promise.reject(error)
   
)
authClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.log(error,"this is the network")
        if(error.response){
            console.log(error,"I am inside")
            switch(error.response.status){
                case 400:
                    Swal.fire("Oops!", "This Page is Not Working Right Now")
                case 401:
                    Swal.fire("Oops!", "Unauthorized Login Detected.")
                case 500:
                    Swal.fire("Oops!", "Internal server Error.")
                default:
                    Swal.fire("Oops!", "Something Went Wrong.")
            }
        }        
    }    
)
export default authClient