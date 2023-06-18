class ScrollContainerWithButtons {
    constructor(prevButton, contentContainer, nextButton, scrollingSize=50, scrollSizeMult=5) {
        this.prevButton = prevButton;
        this.contentContainer = contentContainer;
        this.nextButton = nextButton;

        this.scrollSizeMult = scrollSizeMult
        this.scrollingSize = (this.contentContainer.children[0]?.getBoundingClientRect()?.width || scrollingSize) * this.scrollSizeMult

        this.contentContainer.addEventListener("scroll", this.manageButtonsOnScroll.bind(this));
        this.prevButton.addEventListener("click", this.scrollToLeft.bind(this));
        this.nextButton.addEventListener("click", this.scrollToRight.bind(this));

        this.manageButtonsOnScroll();
    }
  
    manageButtonsOnScroll() {
        //console.log(this.contentContainer.scrollLeft, this.contentContainer.scrollWidth)

        if (this.contentContainer.scrollLeft > 0) {
            this.prevButton.style.visibility = "visible";
        } else {
            this.prevButton.style.visibility = "hidden";
        }

        if (this.contentContainer.scrollLeft <= ( this.contentContainer.scrollWidth - this.contentContainer.clientWidth ) - (5) ) {
            this.nextButton.style.visibility = "visible";
        } else {
            this.nextButton.style.visibility = "hidden";
        }
    }

    scrollToLeft(){
        // if( this.contentContainer.scrollLeft * (0-1) + this.scrollingSize >= 0){
        //     console.log(1)
        //     this.contentContainer.scrollTo({left:this.contentContainer.scrollLeft - this.scrollingSize})
        // } else {
        //     this.contentContainer.scrollTo({left:this.contentContainer.scrollLeft - this.scrollingSize})
        // }

        this.contentContainer.scrollTo({left:this.contentContainer.scrollLeft - this.scrollingSize})

    }

    scrollToRight(){
        // if( this.contentContainer.scrollLeft + this.scrollingSize >= ( this.contentContainer.scrollWidth - this.contentContainer.clientWidth )){
        //     console.log(1)
        // } else {
        //     console.log(2)
        // }

        this.contentContainer.scrollTo({left:this.contentContainer.scrollLeft + this.scrollingSize})
    }


}




class PostsScrollContainerWithButtons extends ScrollContainerWithButtons{

    constructor(prevButton, contentContainer, nextButton, scrollingSize=50, scrollSizeMult=5){
        console.log(arguments, ...arguments)
        super(...arguments)
    }


}
  