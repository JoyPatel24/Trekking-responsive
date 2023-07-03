const toggleBtn = document.querySelector('.toggle-btn')
        const toggleBtnIcon = document.querySelector('.toggle-btn i')
        const DropdownMenu = document.querySelector('.dropdown-menu')

        toggleBtn.onclick = function(){
            DropdownMenu.classList.toggle('open')
            const isOpen = DropdownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fa-sharp fa-solid fa-xmark'
            : 'fa-sharp fa-solid fa-bars'
        }