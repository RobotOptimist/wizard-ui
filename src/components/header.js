import Nav from "./nav";
const menuItems = [
  {
    "name": "Home"
  },
  {
    "name": "Wizard Details"
  },
  {
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