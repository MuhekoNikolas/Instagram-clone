window.addEventListener("load", () => {
    generateFollowRecommendations(5);
    generatePosts(10);

    storiesScrollContainer = new ScrollContainerWithButtons(
        $(".storiesSection .story_controls.prev")[0],
        $(".storiesSection .stories")[0],
        $(".storiesSection .story_controls.next")[0]
    );

    // storiesScrollContainer = new PostsScrollContainerWithButtons( $(".storiesSection .story_controls.prev")[0], $(".storiesSection .stories")[0], $(".storiesSection .story_controls.next")[0] );
    // console.log(storiesScrollContainer);
});
