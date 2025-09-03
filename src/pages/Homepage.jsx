
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"

const Homepage = () => {
    
    const [users,setUsers] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const json = await response.json();
          console.log(json);
          setUsers(json);
        }
        fetchData();
      },[])

    return (
    <div>
        <NavBar/>
        <h1>Homepage</h1>
        <h2>React router example</h2>
        <ul>
            {users.map(user => <li>
                <Link to={`/profile/${user.id}`} state={user} >{user.name}</Link>
                </li>)}
        </ul>
    </div>)
}

export default Homepage