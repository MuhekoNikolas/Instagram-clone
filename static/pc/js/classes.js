class ScrollContainerWithButtons {
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
  
    manageButtonsOnScroll() {
        //console.log(this.contentContainer.scrollLeft, this.contentContainer.scrollWidth)

        clearTimeout(this.scrollCallBackTimeout);


        if (this.contentContainer.scrollLeft > 0) {
            this.prevButton.style.visibility = "visible";
        } else {
            this.prevButton.style.visibility = "hidden";
        }

        //console.log(this.getFirstElementInView(), $(this.contentContainer).find("> :last-child")[0], this.getFirstElementInView() == $(this.contentContainer).find("> :last-child")[0])

        if (this.contentContainer.scrollLeft <= ( this.contentContainer.scrollWidth - this.contentContainer.clientWidth ) && this.getFirstElementInView() != $(this.contentContainer).find("> :last-child")[0]) {
            this.nextButton.style.visibility = "visible";
        } else {
            this.nextButton.style.visibility = "hidden";
        }


        this.scrollCallBackTimeout = setTimeout(this.onScrollCallBackFunction, 60)
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

    getFirstElementInView(){
        var scrollX = this.contentContainer.scrollLeft;

        var scrollXInd = Math.floor(scrollX / ( this.contentContainer.children[0]?.getBoundingClientRect()?.width))


        // var media = $(this.contentContainer).find("*")
        // var firstMedia = media.filter(":visible:first")[0] || null

        // return firstMedia || $('<div>')[0]

        return this.contentContainer.children[scrollXInd] || $('<div style="width:500px;">')[0]


    }

}




class PostsScrollContainerWithButtons extends ScrollContainerWithButtons{

    constructor(prevButton, contentContainer, nextButton, onScrollCallBackFunction=null, scrollDotsElement=null, scrollingSize=500, scrollSizeMult=1){
        //console.log(arguments, ...arguments)
        super(...arguments)
        this.scrollingSize = scrollingSize

        this.updateScrollDots()
    }

    updateScrollDots(){

        if(this.contentContainer.contains(this.getFirstElementInView()) == false){
            return
        } else {
            if (Array.from(this.contentContainer.children).length > 1) {
                this.scrollDotsElement.style.visibility = "visible";
            } else {
                this.scrollDotsElement.style.visibility = "hidden";
            }

            $(this.scrollDotsElement).find(".postPostsSlideDot.active").removeClass("active")
            $(this.scrollDotsElement.children[Array.from(this.contentContainer.children).indexOf(this.getFirstElementInView())])?.addClass("active")
            //console.log(this.scrollDotsElement, this.getFirstElementInView(), Array.from(this.contentContainer.children).indexOf(this.getFirstElementInView()), $(this.scrollDotsElement).find("postPostsSlideDot")[Array.from(this.contentContainer.children).indexOf(this.getFirstElementInView())])
        }
    }

    scrollToRight(){
        this.contentContainer.scrollTo({left:this.contentContainer.scrollLeft + this.scrollingSize})
    }

    scrollToLeft(){
        this.contentContainer.scrollTo({left:this.contentContainer.scrollLeft - this.scrollingSize})
    }


}
  


class RandomPostInfoObject{
    constructor(){
    }


    async populateInfoObject(){
        this.postInfo = {
            author: await getRandomUserInfo(),
            mediaCount: Math.round(Math.random(0)*5)+1,
            media: [],
            id: Math.floor(Math.random() * 1000).toString(),
            description: "Random description",
            caption: "Random caption",
            likes: Array.from({ length: Math.round(Math.random(0)*20002)+1 }, () => Math.random()),
            comments: Array.from({ length: Math.round(Math.random(0)*39393)+1 }, () => Math.random()),
            createdAt: `${Math.round(Math.random(0)*24)+1} h`,
          };
    }


    async generateMedia(){

        var medias = []
        for(var _=0; _<=this.postInfo.mediaCount; _++){
            medias.push(          
                {
                    mediaSrc: await getRandomImage(),
                    mediaOriginalSrc: await getRandomImage(),
                    imageFilters: [],
                    mediaType: "image",
                }
            )
        }

        return medias
    }
}



class RandomUserInfoObject{
    constructor(){
    }


    async populateInfoObject(){
        this.userInfo = await getRandomUserInfo();
        
    }

}