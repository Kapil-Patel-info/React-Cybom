import { Link,Outlet } from "react-router-dom";
import Form from "./pages/Form";
import Example from "./pages/Example";
import Show from "./pages/Show";

const Layout=()=>{
    return(<>

    <nav>

<Link className="btn btn-primary" to="/Example">Example</Link>  | 
    <Link className="btn btn-danger" to="/Form">Form</Link>  |
    <Link className="btn btn-success" to="/Show">Show</Link> 

    </nav>
<br />

<Outlet /> 

</>);

}

export default Layout;