import { Link } from "react-router-dom";

function MenuItem(props){
  var link = `/${props.link}`
  return (
    <li>
      <Link to={link}>{props.name}</Link>
    </li>
  )
}

export default MenuItem;