/**
 * Class representing a scrollable container with navigation buttons.
 */
class ScrollContainerWithButtons {
    /**
     * Creates an instance of ScrollContainerWithButtons.
     * @param {Element} prevButton - The previous button element.
     * @param {Element} contentContainer - The container element that scrolls.
     * @param {Element} nextButton - The next button element.
     * @param {Function} onScrollCallBackFunction - Optional callback function for scroll events.
     * @param {Element} scrollDotsElement - Optional element for scroll dots.
     * @param {number} scrollingSize - Size of the scrolling step.
     * @param {number} scrollSizeMult - Multiplier for scrolling size.
     */
    constructor(prevButton, contentContainer, nextButton, onScrollCallBackFunction=null , scrollDotsElement=null, scrollingSize=50, scrollSizeMult=5) {
        this.prevButton = prevButton;
        this.contentContainer = contentContainer;
        this.nextButton = nextButton;

        this.onScrollCallBackFunction = onScrollCallBackFunction || function(){}

        this.scrollDotsElement = scrollDotsElement

        this.scrollSizeMult = scrollSizeMult
        this.scrollingSize = (this.contentContainer.children[0]?.getBoundingClientRect()?.width || scrollingSize) * this.scrollSizeMult

        this.contentContainer.addEventListener("scroll", this.manageButtonsOnScroll.bind(this));
        this.prevButton.addEventListener("click", this.scrollToLeft.bind(this));
        this.nextButton.addEventListener("click", this.scrollToRight.bind(this));

        this.manageButtonsOnScroll();
    }
  
    /**
     * Manages the visibility of navigation buttons based on the scroll position.
     */
    manageButtonsOnScroll() {
        clearTimeout(this.scrollCallBackTimeout);

        if (this.contentContainer.scrollLeft > 0) {
            this.prevButton.style.visibility = "visible";
        } else {
            this.prevButton.style.visibility = "hidden";
        }

        if (this.contentContainer.scrollLeft <= (this.contentContainer.scrollWidth - this.contentContainer.clientWidth) && this.getFirstElementInView() != $(this.contentContainer).find("> :last-child")[0]) {
            this.nextButton.style.visibility = "visible";
        } else {
            this.nextButton.style.visibility = "hidden";
        }

        this.scrollCallBackTimeout = setTimeout(this.onScrollCallBackFunction, 60);
    }

    /**
     * Scrolls the content container to the left by a specified amount.
     */
    scrollToLeft() {
        this.contentContainer.scrollTo({ left: this.contentContainer.scrollLeft - this.scrollingSize });
    }

    /**
     * Scrolls the content container to the right by a specified amount.
     */
    scrollToRight() {
        this.contentContainer.scrollTo({ left: this.contentContainer.scrollLeft + this.scrollingSize });
    }

    /**
     * Retrieves the first visible element within the content container.
     * @returns {Element} The first visible child element in the content container.
     */
    getFirstElementInView() {
        var scrollX = this.contentContainer.scrollLeft;
        var scrollXInd = Math.floor(scrollX / (this.contentContainer.children[0]?.getBoundingClientRect()?.width));

        return this.contentContainer.children[scrollXInd] || $('<div style="width:500px;">')[0];
    }
}


/**
 * Extends ScrollContainerWithButtons to include additional functionality specific to posts.
 */
class PostsScrollContainerWithButtons extends ScrollContainerWithButtons {

    /**
     * Creates an instance of PostsScrollContainerWithButtons.
     * @param {Element} prevButton - The previous button element.
     * @param {Element} contentContainer - The container element that scrolls.
     * @param {Element} nextButton - The next button element.
     * @param {Function} onScrollCallBackFunction - Optional callback function for scroll events.
     * @param {Element} scrollDotsElement - Optional element for scroll dots.
     * @param {number} scrollingSize - Size of the scrolling step.
     * @param {number} scrollSizeMult - Multiplier for scrolling size.
     */
    constructor(prevButton, contentContainer, nextButton, onScrollCallBackFunction=null, scrollDotsElement=null, scrollingSize=500, scrollSizeMult=1) {
        super(prevButton, contentContainer, nextButton, onScrollCallBackFunction, scrollDotsElement, scrollingSize, scrollSizeMult);
        this.scrollingSize = scrollingSize;
        this.updateScrollDots();
    }

    /**
     * Updates the visibility and active state of scroll dots based on the scrolled content.
     */
    updateScrollDots() {
        if (!this.contentContainer.contains(this.getFirstElementInView())) {
            return;
        } else {
            if (Array.from(this.contentContainer.children).length > 1) {
                this.scrollDotsElement.style.visibility = "visible";
            } else {
                this.scrollDotsElement.style.visibility = "hidden";
            }

            $(this.scrollDotsElement).find(".postPostsSlideDot.active").removeClass("active");
            $(this.scrollDotsElement.children[Array.from(this.contentContainer.children).indexOf(this.getFirstElementInView())])?.addClass("active");
        }
    }

    /**
     * Scrolls the content container to the right by a specified amount.
     */
    scrollToRight() {
        this.contentContainer.scrollTo({ left: this.contentContainer.scrollLeft + this.scrollingSize });
    }

    /**
     * Scrolls the content container to the left by a specified amount.
     */
    scrollToLeft() {
        this.contentContainer.scrollTo({ left: this.contentContainer.scrollLeft - this.scrollingSize });
    }
}


/**
 * Class to generate a random post information object.
 */
class RandomPostInfoObject {
    constructor() {}

    /**
     * Populates the postInfo object with random data.
     */
    async populateInfoObject() {
        this.postInfo = {
            author: await getRandomUserInfo(),
            mediaCount: Math.round(Math.random() * 5) + 1,
            media: [],
            id: Math.floor(Math.random() * 1000).toString(),
            description: "Random description",
            caption: "Random caption",
            likes: Array.from({ length: Math.round(Math.random() * 20002) + 1 }, () => Math.random()),
            comments: Array.from({ length: Math.round(Math.random() * 39393) + 1 }, () => Math.random()),
            createdAt: `${Math.round(Math.random() * 24) + 1} h`,
        };
    }

    /**
     * Generates an array of random media objects for the post.
     * @returns {Array} Array of media objects.
     */
    async generateMedia() {
        var medias = [];
        for (var _ = 0; _ <= this.postInfo.mediaCount; _++) {
            medias.push({
                mediaSrc: await getRandomImage(),
                mediaOriginalSrc: await getRandomImage(),
                imageFilters: [],
                mediaType: "image",
            });
        }
        return medias;
    }
}


/**
 * Class to generate a random user information object.
 */
class RandomUserInfoObject {
    constructor() {}

    /**
     * Populates the userInfo object with random user data.
     */
    async populateInfoObject() {
        this.userInfo = await getRandomUserInfo();
    }
}
