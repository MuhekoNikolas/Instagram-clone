

postInfo_ = {
    author: {
        id: "1",
        username: "mxrningstxr",
        displayName: "nikolipo",
        pfp: "/static/images/pfp.png",
        posts: Array.from({ length: 98}, () => Math.random()),
        followers: Array.from({ length: 10028}, () => Math.random()),
        following: Array.from({ length: 3}, () => Math.random()),
        badges: ['<span class="verifiedBadge"></span>'],
        verified: true,
        email_verified: false,
    },


    mediaCount: 4,
    media: [          

        {
            mediaSrc: "/static/images/elon.png",
            mediaOriginalSrc: "/static/images/iconsSprite2.png",
            imageFilters: [],
            mediaType: "image"
        },
        
        {
            mediaSrc: "/static/images/iconsSprite2.png",
            mediaOriginalSrc: "/static/images/iconsSprite2.png",
            imageFilters: [],
            mediaType: "image"
        },

        {
            mediaSrc: "/static/images/iconsSprite.png",
            mediaOriginalSrc: "/static/images/iconsSprite.png",
            mediaFilters: [],
            mediaType: "image"
        },

        {
            mediaSrc: "/static/images/mary.png",
            mediaOriginalSrc: "/static/images/pfp.png",
            mediaFilters: [],
            mediaType: "image"
        }
    ],


    id: "2",
    description: "An awesome post",
    caption: "Hello there",

    likes: Array.from({ length: 1000}, () => Math.random()),
    comments: Array.from({ length: 1000}, () => Math.random()),
    createdAt: "9 h"

}