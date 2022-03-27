import MenuItem from "./menuItem";

function Nav(props) {
  const menuItems = props.menuItems.map(mi => <MenuItem link={mi.link} name={mi.name}/>)
  return (
    <nav>
      <ul>
        {menuItems}
      </ul>
    </nav>
  )
}

export default Nav;