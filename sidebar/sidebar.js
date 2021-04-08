import Dropdown from './js/dropdown.js'
import Toggle from './js/toggle.js'

class Sidebar {

  initialize() {
    this.setContainer()
    this.setSidebar()
    this.setContent()
    this.setItems()
    this.setDropdowns()

    if (this.isClosable()) {
      this.setToggle()
    }
  }
  
  setDropdowns() {
    this.dropdowns = []

    let dropdowns = this.items.getElementsByClassName('sidebar-dropdown')
    let dropdown = null

    for (let i = 0; i < dropdowns.length; i++) {
      dropdown = new Dropdown(dropdowns[i])
      dropdown.setHeaderMenuDisplayEvent()

      this.dropdowns.push(dropdown)
    }
  }

  setToggle() {
    this.t = new Toggle()
    this.toggle = this.t.createToggle()

    let duration = this.t.getAnimationDuration(this.sidebar)
    this.t.setSidebarDisplayEvent(this.toggle, this.sidebar, this.items, duration)
    this.content.append(this.toggle)
  }

  setContainer() {
    this.container = document.getElementsByClassName('sidebar-container')[0]
  }

  setSidebar() {
    this.sidebar = this.container.getElementsByClassName('sidebar')[0]
  }
  
  setContent() {
    this.content = this.container.getElementsByClassName('content')[0]
  }
  
  setItems() {
    this.items = this.sidebar.getElementsByClassName('sidebar-items')[0]
  }
  
  isClosable() {
    return this.sidebar.classList.contains('closable')
  }
}

export default Sidebar