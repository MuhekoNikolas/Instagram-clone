

function createPostSlider(postNode){

    function scrollCallBack(){
        this.updateScrollDots()
        firstElement = this.getFirstElementInView()
        //console.log(firstElement)
        if(this.contentContainer.contains(firstElement) == false){
            firstElement.naturalHeight = 400
            firstElement.naturalWidth = 400
        }

        //console.log(firstElement.naturalHeight,firstElement.naturalWidth)

        this.contentContainer.style.height = `${(firstElement.naturalWidth/firstElement.naturalHeight) / this.contentContainer.getBoundingClientRect().width}px`
        
    }

    _ = new PostsScrollContainerWithButtons($(postNode).find(".postControlButtons.prev")[0] , $(postNode).find(".insertPostMediaHere")[0] , $(postNode).find(".postControlButtons.next")[0], null, $(postNode).find(".postPostsSlideDots")[0] , 500)
    _.onScrollCallBackFunction = scrollCallBack.bind(_)
    _.onScrollCallBackFunction()


    return _
}



function redirect(where="/"){
    location.href = where
}




function createPost(postInfo){

    classes = [
        "insertAfterPfpHere", "insertUsernameHere", "insertBadgesHere", "insertDisplayNameHere", "insertUserPostCountHere", "insertUserFollowerCountHere", "insertUserFollowingCountHere", "insertUserPostMediaHere",
        "insertPostCreatedAtPeriodHere", "insertPostDescriptionHere", "insertPostMediaHere", "insertPostSlideOutDotsHere", "postLikeButton", "postCommentButton", "postShareButton", "postSaveButton", "insertPostLikeCountHere",
        "insertPostCaptionHere", "insertPostCommentCountHere"
    ]


    homePostHTML = `
        <div class="homePost">
        <div class="postAuthorAndInfoSection">
            <div class="postAuthorBlock">
                <div class="infoSection">
                    
                    <div class="profilePreview">
                        <div class="userInfoPreview">
                            <div class="profileBlock">
                                <div class="pfp insertAfterPfpHere"></div>
                            </div>
                            <div class="userInfoBlock">
                                <h3> <span class="insertUsernameHere"> </span>
                                    <span class="badgesSection insertBadgesHere">

                                    </span>
                                </h3>
                                <h4 class="insertDisplayNameHere"></h4>
                            </div>
                        </div>
                    
                        <div class="userStatsPreview">
                            <div class="postsCount">
                                <span class="statCount insertUserPostCountHere">
                                    
                                </span>
                                <span class="statName">posts</span>
                            </div>
                            <div class="followersCount">
                                <span class="statCount insertUserFollowerCountHere">
                                
                                </span>
                                <span class="statName">followers</span>
                            </div>
                            <div class="followingsCount">
                                <span class="statCount insertUserFollowingCountHere">
                                    
                                </span>
                                <span class="statName">following</span>
                            </div>
                        </div>
                    
                        <div class="userPostsPreview insertUserPostMediaHere">
                            <div class="userPostPreview"></div>
                            <div class="userPostPreview"></div>
                            <div class="userPostPreview"></div>
                        </div>
                    
                    
                        <div class="userActionsPreview">
                            <div class="buttonsContainer">
                                <div style="color:white !important; background:var(--blue);">
                                    <svg class="icon messagesIcon">
                                        <title>Direct</title>
                                        
                                        <use class="activeIcon" xlink:href="/static/icons/messages.svg#messagesIconPathActive"></use>
                                        
                                        <use class="inActiveIcon" xlink:href="/static/icons/messages.svg#messagesIconLineInactive"></use>
                                        <use class="inActiveIcon" xlink:href="/static/icons/messages.svg#messagesIconPolygonInactive"></use>
                                        
                                    </svg>
                                    <h3>Message</h3>
                                </div>
                    
                                <div style="color:black !important; background:var(--lightLightGray);">
                                    <h3>Following</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="profileBlock">
                        <div class="pfp insertAfterPfpHere"></div>
                    </div>
                    <div class="userInfoBlock">
                        <h3>
                            <span class="insertUsernameHere"></span>             
                            <span class="badgesSection insertBadgesHere">
                            </span>
                            <span class="seperatorDot">•</span>
                            <span class="postedAtSection insertPostCreatedAtPeriodHere"></span>
                        </h3>
                        <h4 class="description insertPostDescriptionHere" style="font-size:12px;"></h4>
                    </div>
                </div>

                <div class="postOptionsBlock">
                    <h4> <svg aria-label="More Options" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></h4>
                </div>
            </div>
        </div>
        <div class="postContentSection">
            <div class="postPosts">
                <div class="postControlButtons prev" style="background:url(/static/images/iconsSprite.png);"></div>
                <div class="postPostsSlide insertPostMediaHere" style="height:40px; width:500px;">
                    
                </div>
                <div class="postControlButtons next" style="background:url(/static/images/iconsSprite.png);"></div>
                <div class="postPostsSlideDots insertPostSlideOutDotsHere">
                </div>
            </div>
            <div class="postLikesAndCommentButtons">
                <div class="buttonsSection">
                    <div class="left">
                        <span class="likeSVG postLikeButton">
                            <svg aria-label="Like" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                        </span>
                        <span class="commentSVG postCommentButton">
                            <svg aria-label="Comment" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </span>
                        <span class="shareSVG postShareButton">
                            <svg aria-label="Share Post" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </span>
                    </div>
                    <div class="right">
                        <span class="saveSVG postSaveButton">
                            <svg aria-label="Save" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </span>
                    </div>
                </div>
                <h3 class="likesSection">
                    <span class="likesNumber insertPostLikeCountHere"></span>
                    likes
                </h3>

            </div>
        </div>
        <div class="postCaptionAndCommentsSection">
            <span class="postCaption">
                <span class="postAuthorName insertUsernameHere"></span>
                <span class="insertPostCaptionHere"> Hello this is a post for the first time </span>
            </span>
            <span class="viewAllCommentsSentence">
                View all <span class="commentCount insertPostCommentCountHere"></span> comments
            </span>

            <textarea aria-label="Add a comment…" placeholder="Add a comment…" class="postAddCommentInput" dir="" autocomplete="off" autocorrect="off"></textarea>
        </div>
    </div>
    `


    parser = new DOMParser();
    doc = parser.parseFromString(homePostHTML, 'text/html');

    postNode = doc.body.firstChild

    $(postNode).find(".insertUsernameHere").text(postInfo.author.username)
    $(postNode).find(".insertDisplayNameHere").text(postInfo.author.displayName)
    $(postNode).find(".insertAfterPfpHere").css("background", `url(${postInfo.author.pfp}`)


    $(postNode).find(".insertPostDescriptionHere").text(postInfo.description)
    $(postNode).find(".insertPostLikeCountHere").text(postInfo.likes.length.toLocaleString('en-US', {style:"decimal"}))
    $(postNode).find(".insertPostCommentCountHere").text(postInfo.comments.length.toLocaleString('en-US', {style:"decimal"}))


    $(postNode).find(".insertUserPostCountHere").text(postInfo.author.posts.length.toLocaleString('en-US', {style:"decimal"}))
    $(postNode).find(".insertUserFollowerCountHere").text(postInfo.author.followers.length.toLocaleString('en-US', {style:"decimal"}))
    $(postNode).find(".insertUserFollowingCountHere").text(postInfo.author.following.length.toLocaleString('en-US', {style:"decimal"}))


    $(postNode).find(".insertPostCreatedAtPeriodHere").text(postInfo.createdAt) 
    $(postNode).find(".insertPostCaptionHere").text(postInfo.caption) 
    

    postInfo.author.badges.forEach(badge=>{
        $(postNode).find(".insertBadgesHere").append(badge)
        //console.log(badge)
    })

    postInfo.media.forEach(mediaInfo=>{
        mediaElement = createPostMediaElement(mediaInfo)
        $(postNode).find(".insertPostMediaHere").append(mediaElement)

        //console.log(postInfo.media.indexOf(mediaInfo) == 0)

        if( postInfo.media.indexOf(mediaInfo) < 1 ){
            $(postNode).find(".postPostsSlideDots").append($('<div class="postPostsSlideDot active"></div>'))
        } else {
            $(postNode).find(".postPostsSlideDots").append($('<div class="postPostsSlideDot"></div>'))
        }

    })


    _ = createPostSlider(postNode)

    //console.log($(".postsSection")[0].children)
    Array.from($(".postsSection")[0].children).length > 0 ? $(postNode).insertBefore($(".postsSection").find("> :first-child")) : $(".postsSection").append(postNode)
}


function createPostMediaElement(mediaInfo){

    _elImageHTML = `<img src="${mediaInfo.mediaSrc}" class="postImage" style=""></img>`

    parser = new DOMParser();
    doc = parser.parseFromString(_elImageHTML, 'text/html');

    _el = doc.body.firstChild

    return _el
}


function createFollowSuggestion(userInfo){

    followSuggestionHTML = `
            <div class="recommendedUserBlock">
                <div class="profileBlock">
                    <div class="pfp insertAfterPfpHere"></div>
                </div>
                <div class="userInfoBlock">

                    <div class="profilePreview">
                        <div class="userInfoPreview">
                            <div class="profileBlock">
                                <div class="pfp insertAfterPfpHere"></div>
                            </div>
                            <div class="userInfoBlock">
                                <h3> <span class="insertUsernameHere"> </span>
                                    <span class="badgesSection insertBadgesHere">

                                    </span>
                                </h3>
                                <h4 class="insertDisplayNameHere"></h4>
                            </div>
                        </div>
                    
                        <div class="userStatsPreview">
                            <div class="postsCount">
                                <span class="statCount insertUserPostCountHere">
                                    
                                </span>
                                <span class="statName">posts</span>
                            </div>
                            <div class="followersCount">
                                <span class="statCount insertUserFollowerCountHere">
                                
                                </span>
                                <span class="statName">followers</span>
                            </div>
                            <div class="followingsCount">
                                <span class="statCount insertUserFollowingCountHere">
                                    
                                </span>
                                <span class="statName">following</span>
                            </div>
                        </div>
                    
                        <div class="userPostsPreview insertUserPostMediaHere">
                            <div class="userPostPreview"></div>
                            <div class="userPostPreview"></div>
                            <div class="userPostPreview"></div>
                        </div>
                    
                    
                        <div class="userActionsPreview">
                            <div class="buttonsContainer">
                                <div style="color:white !important; background:var(--blue);">
                                    <svg class="icon messagesIcon">
                                        <title>Direct</title>
                                        
                                        <use class="activeIcon" xlink:href="/static/icons/messages.svg#messagesIconPathActive"></use>
                                        
                                        <use class="inActiveIcon" xlink:href="/static/icons/messages.svg#messagesIconLineInactive"></use>
                                        <use class="inActiveIcon" xlink:href="/static/icons/messages.svg#messagesIconPolygonInactive"></use>
                                        
                                    </svg>
                                    <h3>Message</h3>
                                </div>
                    
                                <div style="color:black !important; background:var(--lightLightGray);">
                                    <h3>Following</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    <h3>
                        <span class="insertUsernameHere"></span> 
                        <span class="badgesSection insertBadgesHere"></span>
                    </h3>
                    <h4 class="description" style="font-size:12px;">Suggested for you</h4>
                </div>
                <div class="switchAccountBlock followAccountBlock">
                    <h4>Follow</h4>
                </div>
            </div>
    `

    parser = new DOMParser();
    doc = parser.parseFromString(followSuggestionHTML, 'text/html');

    followRecommendationNode = doc.body.firstChild

    $(followRecommendationNode).find(".insertUsernameHere").text(userInfo.username)
    $(followRecommendationNode).find(".insertDisplayNameHere").text(userInfo.displayName)
    $(followRecommendationNode).find(".insertAfterPfpHere").css("background", `url(${userInfo.pfp}`)


    $(followRecommendationNode).find(".insertUserPostCountHere").text(userInfo.posts.length.toLocaleString('en-US', {style:"decimal"}))
    $(followRecommendationNode).find(".insertUserFollowerCountHere").text(userInfo.followers.length.toLocaleString('en-US', {style:"decimal"}))
    $(followRecommendationNode).find(".insertUserFollowingCountHere").text(userInfo.following.length.toLocaleString('en-US', {style:"decimal"}))


    userInfo.badges.forEach(badge=>{
        $(followRecommendationNode).find(".insertBadgesHere").append(badge)
    })

    $(".followRecommendations").append(followRecommendationNode)
    return followRecommendationNode
}




// Function to generate a random username
function getRandomUsername() {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return "user" + randomNumber;
  }
  
  // Function to generate a random display name matching the username
  function getRandomDisplayName(username="4") {
    // Use the username and append a random number between 10 and 99
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    return "User " + randomNumber;
  }
  
  // Function to fetch a random image URL from Lorem Picsum
  async function getRandomImage() {
    const response = await fetch(`https://picsum.photos/${Math.floor(Math.random() * ((700 - 400) / 100 + 1)) * 100 + 400}/${Math.floor(Math.random() * ((700 - 400) / 100 + 1)) * 100 + 400}`);
    return response.url;
  }
  

async function generatePosts(howMany){
    // Generate random data for the postInfo object
    for(x=0; x<howMany; x++){    

      postInfoObject = new RandomPostInfoObject()

      await postInfoObject.populateInfoObject()
      postInfoObject.postInfo.media = await postInfoObject.generateMedia()


      createPost(postInfoObject.postInfo)
    }
}
  

async function generateFollowRecommendations(howMany){
    for(x=0; x<howMany; x++){    

        userInfoObject = new RandomUserInfoObject()
  
        await userInfoObject.populateInfoObject()
        //userInfoObject.userInfo.media = await userInfoObject.generateMedia()
  
  
        createFollowSuggestion(userInfoObject.userInfo)
    }
}


async function getRandomUserInfo(){
    return {
        id: "1",
        username: getRandomUsername(),
        displayName: getRandomDisplayName(),
        pfp: await getRandomImage(),
        posts: Array.from({ length: Math.round(Math.random(0)*40)+1 }, () => Math.random()),
        followers: Array.from({ length: Math.round(Math.random(0)*10000)+1 }, () => Math.random()),
        following: Array.from({ length: Math.round(Math.random(0)*10)+1 }, () => Math.random()),
        badges: ['<span class="verifiedBadge"></span>'],
        verified: true,
        email_verified: false,
    }
}