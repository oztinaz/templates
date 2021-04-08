class Dropdown {
  
    constructor(element) {
        this.header = element.getElementsByClassName('sidebar-dropdown-header')[0]
        this.initializeIcon()
        this.menu = element.getElementsByClassName('sidebar-dropdown-menu')[0]
    }

    setHeaderMenuDisplayEvent() {
        this.header.addEventListener('click', () => {
            if (this.menu.style.display === '' || this.menu.style.display === 'none') {
                this.icon.className = this.getOpenedDropdownIconClass()
                this.menu.style.display = 'block'
            } else {
                this.icon.className = this.getClosedDropdownIconClass()
                this.menu.style.display = 'none'
            }
        })
    }

    initializeIcon() {
        this.icon = this.createIcon()
        this.icon.className = this.getClosedDropdownIconClass()
        this.header.append(this.icon)
    }

    createIcon() {
        return document.createElement('i')
    }

    getClosedDropdownIconClass() {
        return 'fas fa-caret-left'
    }

    getOpenedDropdownIconClass() {
        return 'fas fa-caret-down'
    }
}

export default Dropdown