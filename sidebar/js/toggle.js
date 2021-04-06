export function setToggle(content, sidebar, items) {
    addToggle(content)

    let toggle = getToggle(content)
    let duration = getAnimationDuration(sidebar)
    toggle.addEventListener('click', () => {
        if (isSidebarOpen(sidebar)) {
            closeSidebar(sidebar, items, duration)
        } else {
            openSidebar(sidebar, items, duration)
        }
    }, sidebar, items, duration)
}

export function getContent(container) {
    return container.getElementsByClassName('content')[0]
}
  
export function getToggle(content) {
    return content.getElementsByClassName('sidebar-toggle')[0]
}

function addToggle(content) {
    let span = document.createElement('span')
    span.className = 'sidebar-toggle'

    let icon = document.createElement('i')
    icon.className = 'fas fa-bars'
    span.append(icon)
    content.prepend(span)
}

function getAnimationDuration(sidebar) {
    let duration = parseInt(getComputedStyle(sidebar).getPropertyValue('--animation-duration').split('s')[0])
    return duration * 1000
}

function closeSidebar(sidebar, items, duration) {
    removeSidebarOpeningClass(sidebar)
    hideItems(items)
    addSidebarClosingClass(sidebar)
    hideSidebar(sidebar, duration)
}

function openSidebar(sidebar, items, duration) {
    removeSidebarClosingClass(sidebar)
    addSidebarOpeningClass(sidebar)
    showSidebar(sidebar)
    showItems(items, duration)
}

function removeSidebarOpeningClass(sidebar) {
    sidebar.classList.remove('open')
}

function removeSidebarClosingClass(sidebar) {
    sidebar.classList.remove('close')
}

function addSidebarOpeningClass(sidebar) {
    sidebar.classList.add('open')
}

function addSidebarClosingClass(sidebar) {
    sidebar.classList.add('close')
}

function hideItems(items) {
    items.style.display = 'none'
}

function showItems(items, duration) {
    setTimeout(() => {
      items.style.display = 'inline'
    }, duration)
}

function hideSidebar(sidebar, duration) {
    setTimeout(() => {
        sidebar.style.display = 'none'
    }, duration)
}

function showSidebar(sidebar) {
    sidebar.style.display = 'inline'
}

function isSidebarOpen(sidebar) {
    return sidebar.style.display === '' || sidebar.style.display === 'inline'
}