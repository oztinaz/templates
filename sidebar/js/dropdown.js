export function setDropdowns(dropdowns) {
    for (let i = 0; i < dropdowns.length; i++) {
        let header = getDropdownHeader(dropdowns[i])
        let menu = getDropdownMenu(dropdowns[i])

        setHeaderMenuDisplayEvent(header, menu)
    }
}

export function getDropdowns(items) {
    return items.getElementsByClassName('sidebar-dropdown')
}
  
  
function setHeaderMenuDisplayEvent(header, menu) {
    let icon = document.createElement('i')
    icon.className = 'fas fa-caret-left'
    header.append(icon)

    header.addEventListener('click', () => {
        if (menu.style.display === '' || menu.style.display === 'none') {
            icon.className = 'fas fa-caret-down'
            menu.style.display = 'block'
        } else {
            icon.className = 'fas fa-caret-left'
            menu.style.display = 'none'
        }
    }, menu)
}

function getDropdownHeader(dropdown) {
    return dropdown.getElementsByClassName('sidebar-dropdown-header')[0]
}

function getDropdownMenu(dropdown) {
    return dropdown.getElementsByClassName('sidebar-dropdown-menu')[0]
}