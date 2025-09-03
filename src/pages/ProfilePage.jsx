import { useParams, useLocation } from "react-router-dom"
import NavBar from "../components/NavBar"

const ProfilePage = ({students}) => {

    const {state} = useLocation();
    
    const {name,age,id} = state;





    // const {id} = useParams();
    // console.log(id);
    //Matcha id från array med den valda profilen
    // let profile = students.find(student => student.id === Number(id));
    // console.log(profile);

    return(
    <div>
        <NavBar/>

        <h1>Profile</h1>
        <p><strong>Name:</strong>{name}</p>
        <p><strong>Age:</strong>{age}</p>
        <p><strong>Id:</strong>{id}</p>

    </div>)
}

export default ProfilePage