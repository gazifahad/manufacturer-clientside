import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        const userEmail = user?.email;        
        if(userEmail){                       
            axios.get(`https://immense-oasis-80254.herokuapp.com/admin/${userEmail}`)
            .then(data => {
                setAdmin(data.data.isAdmin);
                setIsLoading(false);                
            })
        }

    } ,[user])
    return [admin, isLoading];
}
export default  useAdmin;




// const article = { title: 'Axios PUT Request Example' };
// const headers = { 
//     'Authorization': 'Bearer my-token',
//     'My-Custom-Header': 'foobar'
// };
// axios.put('https://reqres.in/api/articles/1', article, { headers })
//     .then(response => element.innerHTML = response.data.updatedAt);