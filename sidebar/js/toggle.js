class Toggle {
    
    setSidebarDisplayEvent(toggle, sidebar, items, duration) {
        toggle.addEventListener('click', () => {
            if (this.isSidebarOpen(sidebar)) {
                this.closeSidebar(sidebar, items, duration)
            } else {
                this.openSidebar(sidebar, items, duration)
            }
        }, sidebar, items, duration)
    }

    createToggle() {
        let toggle = document.createElement('span')
        toggle.className = 'sidebar-toggle'
    
        let icon = document.createElement('i')
        icon.className = 'fas fa-bars'
        toggle.append(icon)
        return toggle
    }

    closeSidebar(sidebar, items, duration) {
        this.removeSidebarOpeningClass(sidebar)
        this.hideItems(items)
        this.addSidebarClosingClass(sidebar)
        this.hideSidebar(sidebar, duration)
    }

    openSidebar(sidebar, items, duration) {
        this.removeSidebarClosingClass(sidebar)
        this.addSidebarOpeningClass(sidebar)
        this.showSidebar(sidebar)
        this.showItems(items, duration)
    }

    removeSidebarOpeningClass(sidebar) {
        sidebar.classList.remove('open')
    }
    
    removeSidebarClosingClass(sidebar) {
        sidebar.classList.remove('close')
    }
    
    addSidebarOpeningClass(sidebar) {
        sidebar.classList.add('open')
    }
    
    addSidebarClosingClass(sidebar) {
        sidebar.classList.add('close')
    }
    
    hideItems(items) {
        items.style.display = 'none'
    }
    
    showItems(items, duration) {
        setTimeout(() => {
          items.style.display = 'inline'
        }, duration)
    }
    
    hideSidebar(sidebar, duration) {
        setTimeout(() => {
            sidebar.style.display = 'none'
        }, duration - 100)
    }
    
    showSidebar(sidebar) {
        sidebar.style.display = 'inline'
    }

    getAnimationDuration(sidebar) {
        let duration = parseInt(getComputedStyle(sidebar).getPropertyValue('--animation-duration').split('s')[0])
        return duration * 1000
    }    

    isSidebarOpen(sidebar) {
      return sidebar.style.display === '' || sidebar.style.display === 'inline'
    }
}

export default Toggle