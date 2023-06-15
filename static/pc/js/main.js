

function redirect(where="/"){
    location.href = where
}


document.addEventListener('click', function(event) {

    sideBar = document.querySelector(".sideBar")

    searchBarInputButton = document.querySelector(".searchInputLabelButton")
    searchBarInput = document.querySelector(".searchInput")
    sideBarSearchMenu = document.querySelector(".sideBarSearchContainer")


    sideBarSearchLinkButton = document.querySelector(".sideBarLink.sideBarSearchLink")
    sideBarNotificationsLinkButton = document.querySelector(".sideBarNotificationsLink")


    sideBarNotificationsMenu = document.querySelector(".sideBarNotificationsContainer")
    sideBarNotificationsLinkButton = document.querySelector(".sideBarLink.sideBarNotificationsLink")

    sideBarMoreMenu = document.querySelector(".sideBarMoreContainer")
    sideBarMoreLinkButton = document.querySelector(".sideBarLink.sideBarMoreLink")

    if (event.target !== searchBarInputButton && searchBarInputButton.contains(event.target) == false && event.target !== searchBarInput && searchBarInput.contains(event.target) == false) {
        if(searchBarInput.value.length > 0){
            searchBarInputButton.style.display = 'none';
        } else {
            searchBarInputButton.style.display = 'flex';
        }
    } else {
        searchBarInput.focus()
    }

    if (event.target !== sideBarSearchMenu && sideBarSearchMenu.contains(event.target) == false && event.target != sideBarSearchLinkButton && sideBarSearchLinkButton.contains(event.target) == false ) {
        sideBar.classList.remove("searchMenuActive")
        sideBarSearchLinkButton.classList.remove("active")
    } else {
        sideBar.classList.add("searchMenuActive")
        sideBarSearchLinkButton.classList.add("active")
    }

    if (event.target !== sideBarNotificationsMenu && sideBarNotificationsMenu.contains(event.target) == false && event.target != sideBarNotificationsLinkButton && sideBarNotificationsLinkButton.contains(event.target) == false ) {
        sideBar.classList.remove("notificationsMenuActive")
        sideBarNotificationsLinkButton.classList.remove("active")
    } else {
        sideBar.classList.add("notificationsMenuActive")
        sideBarNotificationsLinkButton.classList.add("active")
    }

    if (event.target !== sideBarMoreMenu && sideBarMoreMenu.contains(event.target) == false && event.target != sideBarMoreLinkButton && sideBarMoreLinkButton.contains(event.target) == false ) {
        sideBar.classList.remove("moreMenuActive")
        sideBarMoreLinkButton.classList.remove("active")
    } else {
        sideBar.classList.add("moreMenuActive")
        sideBarMoreLinkButton.classList.add("active")
    }

  });