const intro = [
    {
        id : 0,
        name : "Tanya Sinclair",
        job : "UX Engineer",
        bio : `"I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and soexcited about the future."`,
        image : "images/image-tanya.jpg"
    },
    {
        id : 1,
        name : "John Tarkpor",
        job : "Junior Front-end Developer",
        bio : `"If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer."`,
        image : "images/image-john.jpg",
    },
    
]
const bio = document.querySelector('.bio');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const image = document.querySelector('.bio-img');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// set starting item
let currentItem = 0;

// initializing the testimonial when the page gets reloaded
window.addEventListener('DOMContentLoaded',function(){
    const item = intro[currentItem];
    bio.textContent = item.bio;
    author.textContent = item.name;
    job.textContent = item.job;
    image.src = item.image;
    
});

// show item based on persons
const showPerson = (person) => {
    const item = intro[person];
    bio.textContent = item.bio;
    author.textContent = item.name;
    job.textContent = item.job;
    image.src = item.image;
};

// showing the next person
next.addEventListener('click',function(){
    currentItem++;
    if(currentItem >= intro.length){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// showing the previous person 
prev.addEventListener('click',function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = intro.length - 1
    }
    showPerson(currentItem);
});