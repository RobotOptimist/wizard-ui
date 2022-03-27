import Nav from "./nav";
const menuItems = [
  {
    "link": "",
    "name": "Home"
  },
  {
    "link": "wizard-details",
    "name": "Wizard Details"
  },
  {
    "link": "create-wizard",
    "name": "Create Wizard"
  }
]
function Header() {
  return (
    <header>
      <Nav menuItems={menuItems}/>
    </header>
  )
}

export default Header;