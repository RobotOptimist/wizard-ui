import MenuItem from "./menuItem";

function fetchWizzFizz() {
  fetch('https://wizard-potion-app.azurewebsites.net/api/wizards/james@fakeemail.com~WizFizzz', { method: 'GET', redirect: 'follow' })
  .then((response) => {
    console.log('do what boss?')
    if (response.status === 401) {
      console.log('yeah boss')
      window.location.href = "https://github.com/login/oauth/authorize?client_id=b67edb7ad8d07863e5ed&redirect_uri=https://wizard-potion-app.azurewebsites.net/.auth/login/github/callback"
    }
  })
  .then((data) => console.log(data));
}

function Nav(props) {
  const menuItems = props.menuItems.map(mi => <MenuItem link={mi.link} name={mi.name}/>)
  return (
    <nav>
      <ul>
        {menuItems}
        <li>
          <button onClick={fetchWizzFizz}>Get WizzFizz</button>
         </li>
      </ul>
    </nav>
  )
}

export default Nav;