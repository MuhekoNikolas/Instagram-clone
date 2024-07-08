// Initialize activeSideMenuLinkElement to the active side bar link, or a dummy element if none found
activeSideMenuLinkElement = $(".sideBarLink.active")[0] || $("<div>");

// Event listener for clicks anywhere in the document
document.addEventListener('click', function(event) {
    // Get references to various DOM elements
    sideBar = $(".sideBar")[0];
    searchBarInputButton = $(".searchInputLabelButton")[0];
    searchBarInput = $(".searchInput")[0];
    sideBarSearchMenu = $(".sideBarSearchContainer")[0];
    sideBarSearchLinkButton = $(".sideBarLink.sideBarSearchLink")[0];
    sideBarNotificationsLinkButton = $(".sideBarNotificationsLink")[0];
    sideBarNotificationsMenu = $(".sideBarNotificationsContainer")[0];
    sideBarMoreMenu = $(".sideBarMoreContainer")[0];
    sideBarMoreLinkButton = $(".sideBarLink.sideBarMoreLink")[0];
    uploadPostContentContainer = $(".uploadPostContainer")[0];
    sideBarCreateLinkButton = $(".sideBarLink.sideBarCreateLink")[0];

    // Handle display of search input button based on focus
    if (event.target != searchBarInputButton && !searchBarInputButton.contains(event.target) && event.target !== searchBarInput && !searchBarInput.contains(event.target)) {
        if (searchBarInput.value.length > 0) {
            searchBarInputButton.style.display = 'none';
        } else {
            searchBarInputButton.style.display = 'flex';
        }
    } else {
        // Focus on search input if clicked within search area
        searchBarInput.focus();
    }

    // Toggle search menu and its link button's active state
    if (event.target != sideBarSearchMenu && !sideBarSearchMenu.contains(event.target) && event.target != sideBarSearchLinkButton && !sideBarSearchLinkButton.contains(event.target)) {
        sideBar.classList.remove("searchMenuActive");
        sideBarSearchLinkButton.classList.remove("active");
    } else {
        sideBar.classList.add("searchMenuActive");
        sideBarSearchLinkButton.classList.add("active");
    }

    // Toggle notifications menu and its link button's active state
    if (event.target != sideBarNotificationsMenu && !sideBarNotificationsMenu.contains(event.target) && event.target != sideBarNotificationsLinkButton && !sideBarNotificationsLinkButton.contains(event.target)) {
        sideBar.classList.remove("notificationsMenuActive");
        sideBarNotificationsLinkButton.classList.remove("active");
    } else {
        sideBar.classList.add("notificationsMenuActive");
        sideBarNotificationsLinkButton.classList.add("active");
    }

    // Toggle more menu and its link button's active state
    if (event.target != sideBarMoreMenu && !sideBarMoreMenu.contains(event.target) && event.target != sideBarMoreLinkButton && !sideBarMoreLinkButton.contains(event.target)) {
        sideBar.classList.remove("moreMenuActive");
        sideBarMoreLinkButton.classList.remove("active");
    } else {
        sideBar.classList.add("moreMenuActive");
        sideBarMoreLinkButton.classList.add("active");
    }

    // Toggle upload post container visibility and its link button's active state
    if (event.target != uploadPostContentContainer && !uploadPostContentContainer.contains(event.target) && event.target != sideBarCreateLinkButton && !sideBarCreateLinkButton.contains(event.target)) {
        uploadPostContentContainer.parentNode.classList.remove("visible");
        sideBarCreateLinkButton.classList.remove("active");
    } else {
        uploadPostContentContainer.parentNode.classList.add("visible");
        sideBarCreateLinkButton.classList.add("active");
    }
});
