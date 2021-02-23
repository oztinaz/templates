export function initializeSidebar() {
    let sidebars = document.getElementsByClassName('sidebar');
    let dropdowns = [];
    let initialHeader = null;
    let dropdownHeader = null;
    let dropdownMenu = null;

    Array.from(sidebars).forEach((sidebar) => {
        dropdowns = sidebar.getElementsByClassName('sidebar-dropdown');

        Array.from(dropdowns).forEach((dropdown) => {
            dropdownHeader = dropdown.getElementsByClassName('sidebar-dropdown-header')[0];
            initialHeader = dropdownHeader.innerHTML;
            dropdownMenu = dropdown.getElementsByClassName('sidebar-dropdown-menu')[0];
            addDropdownRightIcon(dropdownHeader, initialHeader)

            dropdownHeader.addEventListener('click', () => {
                if (dropdownMenu.style.display === '' || dropdownMenu.style.display === 'none') {
                    dropdownMenu.style.display = 'grid';
                    addDropdownDownIcon(dropdownHeader, initialHeader)
                } else {
                    dropdownMenu.style.display = 'none';
                    addDropdownRightIcon(dropdownHeader, initialHeader)
                }                    
            }, dropdownMenu, initialHeader);
        });
    });
}

function addDropdownDownIcon(dropdownHeader, initialHeader) {
    dropdownHeader.innerHTML = '<i class="fas fa-caret-down"></i>' + initialHeader
}

function addDropdownRightIcon(dropdownHeader, initialHeader) {
    dropdownHeader.innerHTML = '<i class="fas fa-caret-right"></i>' + initialHeader
}