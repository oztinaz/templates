import { getDropdowns, setDropdowns } from './js/dropdown.js'
import { getContent, setToggle } from './js/toggle.js'

export function initializeSidebar() {
  let container = getContainer()
  let sidebar = getSidebar(container)
  let dropdowns = getDropdowns(sidebar)
  setDropdowns(dropdowns)

  if (isSidebarClosable(sidebar)) {
    let items = getSidebarItems(sidebar)
    let content = getContent(container)
    setToggle(content, sidebar, items)
  }
}

function getContainer() {
  return document.getElementsByClassName('sidebar-container')[0]
}

function getSidebar(container) {
  return container.getElementsByClassName('sidebar')[0]
}

function getSidebarItems(sidebar) {
  return sidebar.getElementsByClassName('sidebar-items')[0]
}

function isSidebarClosable(sidebar) {
  return sidebar.classList.contains('closable')
}