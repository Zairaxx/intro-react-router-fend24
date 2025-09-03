import { useParams, useLocation } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";

const ProfilePage = () => {

    const [user, setUser] = useState(null);
    
    const location = useLocation()
    const {id} = useParams();

    const fetchUser = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
          const json = await response.json();
          setUser(json)
    }

    useEffect(() => {
          
        if(location.state){
            console.log("Data finns i location - Ingen datahämtning sker!");
            setUser(location.state)
        } else {
            console.log("Data finns inte! Vi hämtar från API")
            fetchUser();
        }
    },[])

    return(
    <div>
        <NavBar/>

        {user && <><h1>Profile</h1>
        <p><strong>Name: </strong>{user.name}</p>
        <p><strong>Email: </strong>{user.email}</p>
        </> }
    </div>)
}

export default ProfilePage