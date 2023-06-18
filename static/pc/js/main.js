

function redirect(where="/"){
    location.href = where
}



activeSideMenuLinkElement = $(".sideBarLink.active")[0] || $("<div>")


document.addEventListener('click', function(event) {

    sideBar = $(".sideBar")[0]

    searchBarInputButton = $(".searchInputLabelButton")[0]
    searchBarInput = $(".searchInput")[0]
    sideBarSearchMenu = $(".sideBarSearchContainer")[0]


    sideBarSearchLinkButton = $(".sideBarLink.sideBarSearchLink")[0]
    sideBarNotificationsLinkButton = $(".sideBarNotificationsLink")[0]


    sideBarNotificationsMenu = $(".sideBarNotificationsContainer")[0]
    sideBarNotificationsLinkButton = $(".sideBarLink.sideBarNotificationsLink")[0]

    sideBarMoreMenu = $(".sideBarMoreContainer")[0]
    sideBarMoreLinkButton = $(".sideBarLink.sideBarMoreLink")[0]

    uploadPostContentContainer = $(".uploadPostContainer")[0]
    sideBarCreateLinkButton = $(".sideBarLink.sideBarCreateLink")[0]


    if (event.target != searchBarInputButton && searchBarInputButton.contains(event.target) == false && event.target !== searchBarInput && searchBarInput.contains(event.target) == false) {
        if(searchBarInput.value.length > 0){
            searchBarInputButton.style.display = 'none';
        } else {
            searchBarInputButton.style.display = 'flex';
        }
    } else {
        searchBarInput.focus()
    }

    if (event.target.classList.contains("active") == false && $(".sideBarLink").is(event.target) == false ) {
        activeSideMenuLinkElement.classList.remove("active")
    } else {
        activeSideMenuLinkElement.classList.add("active")
    }

    if (event.target != sideBarSearchMenu && sideBarSearchMenu.contains(event.target) == false && event.target != sideBarSearchLinkButton && sideBarSearchLinkButton.contains(event.target) == false ) {
        sideBar.classList.remove("searchMenuActive")
        sideBarSearchLinkButton.classList.remove("active")
    } else {
        sideBar.classList.add("searchMenuActive")
        sideBarSearchLinkButton.classList.add("active")
    }

    if (event.target != sideBarNotificationsMenu && sideBarNotificationsMenu.contains(event.target) == false && event.target != sideBarNotificationsLinkButton && sideBarNotificationsLinkButton.contains(event.target) == false ) {
        sideBar.classList.remove("notificationsMenuActive")
        sideBarNotificationsLinkButton.classList.remove("active")
    } else {
        sideBar.classList.add("notificationsMenuActive")
        sideBarNotificationsLinkButton.classList.add("active")
    }

    if (event.target != sideBarMoreMenu && sideBarMoreMenu.contains(event.target) == false && event.target != sideBarMoreLinkButton && sideBarMoreLinkButton.contains(event.target) == false ) {
        sideBar.classList.remove("moreMenuActive")
        sideBarMoreLinkButton.classList.remove("active")
    } else {
        sideBar.classList.add("moreMenuActive")
        sideBarMoreLinkButton.classList.add("active")
    }



    if (event.target != uploadPostContentContainer && uploadPostContentContainer.contains(event.target) == false && event.target != sideBarCreateLinkButton && sideBarCreateLinkButton.contains(event.target) == false ) {
        uploadPostContentContainer.parentNode.classList.remove("visible")
        sideBarCreateLinkButton.classList.remove("active")
    } else {
        uploadPostContentContainer.parentNode.classList.add("visible")
        sideBarCreateLinkButton.classList.add("active")
    }


  });