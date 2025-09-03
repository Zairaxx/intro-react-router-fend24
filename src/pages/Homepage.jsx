
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

const Homepage = ({students}) => {

    return (
    <div>
        <NavBar/>
        <h1>Homepage</h1>
        <h2>React router example</h2>
        <ul>
            {students.map(student => <li>
                <Link to={`/profile/${student.id}`} state={student} >{student.name}</Link>
                </li>)}
        </ul>
    </div>)
}

export default Homepage