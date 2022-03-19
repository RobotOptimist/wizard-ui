function MenuItem(props){
  return (
    <li>
      <a href={props.link}>{props.name}</a>
    </li>
  )
}

export default MenuItem;