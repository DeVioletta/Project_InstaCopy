const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    },
];

const main = document.getElementById("main");
main.innerHTML = "";
for (let i = 0; i < posts.length; i++) {
    main.innerHTML += `<div class="ig-posts">
        <div class="profile-box">
            <img
                src="${posts[i].avatar}"
                alt=""
                class="pp"
            />
            <div class="name-box">
                <p class="name">${posts[i].name}</p>
                <p class="address">${posts[i].location}</p>
            </div>
        </div>

        <div class="img-box">
            <img class="post" src="${posts[i].post}" alt="" />
            <i class="fa-solid fa-heart liked-heart"></i>
        </div>

        <div class="user-act">
            <i class="fa-regular fa-heart like-empty-icon"></i>
            <i class="fa-regular fa-comment comments-icon"></i>
            <i class="fa-regular fa-paper-plane send-icon"></i>
        </div>

        <p class="likes">${posts[i].likes} likes</p>

        <p class="caption-box">
            <span>${posts[i].username}&nbsp;</span>${posts[i].comment}
        </p>
    </div>`;
}

// Like Handling
const likeText = document.querySelectorAll(".likes");
const likeIcon = document.querySelectorAll(".like-empty-icon");
const likeFilled = document.querySelectorAll("like-fill-icon");
const postImg = document.querySelectorAll(".post")
const likedHeart = document.querySelectorAll(".liked-heart")


likeIcon.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        renderLike(index)
    });
});

likedHeart.forEach(heart => {
    heart.style.display = "none"
})

// Double CLick like in PC
postImg.forEach((img, index) => {
    img.addEventListener("dblclick", () => {
        if (likeIcon[index].classList.contains("like-empty-icon")){
            const heart = likedHeart[index]
            heart.style.display = "block"
    
            heart.style.animation = ""
            void heart.offsetWidth;
    
            heart.style.animation = "liked-heart 0.75s ease-out forwards"
            renderLike(index);
        } else if (likeIcon[index].classList.contains("like-fill-icon")){
            const heart = likedHeart[index]
            heart.style.display = "block"
    
            heart.style.animation = ""
            void heart.offsetWidth;
    
            heart.style.animation = "liked-heart 0.75s ease-out reverse forwards"
            renderLike(index);
        }
        
    });
});


//Double Touch Like in Mobile
let firstTap = 0;
postImg.forEach((img, index) => {
    img.addEventListener("touchend", () => {
        const currentTime = new Date().getTime()
        console.log("img.addEventListener ~ currentTime:", currentTime);
        const intervalTap = currentTime - firstTap;
        console.log("img.addEventListener ~ intervalTap:", intervalTap);

        if (intervalTap < 300 && intervalTap > 0) {
            if (likeIcon[index].classList.contains("like-empty-icon")){
                const heart = likedHeart[index]
                heart.style.display = "block"
        
                heart.style.animation = ""
                void heart.offsetWidth;
        
                heart.style.animation = "liked-heart 0.75s ease-out forwards"
                renderLike(index);
            } else if (likeIcon[index].classList.contains("like-fill-icon")){
                const heart = likedHeart[index]
                heart.style.display = "block"
        
                heart.style.animation = ""
                void heart.offsetWidth;
        
                heart.style.animation = "liked-heart 0.75s ease-out reverse forwards"
                renderLike(index);
            }
        } 


        firstTap = currentTime;
        
    });

});


function renderLike(index){
    if (likeIcon[index].classList.contains("like-empty-icon")) {
        likeIcon[index].classList.remove("fa-regular", "like-empty-icon");
        likeIcon[index].classList.add("like-fill-icon", "fa-solid");

        posts[index].likes += 1;


    } else if (likeIcon[index].classList.contains("like-fill-icon")) {
        likeIcon[index].classList.add("fa-regular", "like-empty-icon");
        likeIcon[index].classList.remove("like-fill-icon", "fa-solid");

        posts[index].likes -= 1;
    }
    likeText[index].innerHTML = `${posts[index].likes} likes`;
}
