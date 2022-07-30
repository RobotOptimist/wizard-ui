import MenuItem from "./menuItem";

function Nav(props) {
  const menuItems = props.menuItems.map(mi => <MenuItem link={mi.link} name={mi.name}/>)
  return (
    <nav>
      <ul>
        {menuItems}
        <li>
          <a href="https://wizard-potion-app.azurewebsites.net/api/wizards/james@fakeemail.com~WizFizzz">Get WizzFizz</a>
         </li>
      </ul>
    </nav>
  )
}

export default Nav;