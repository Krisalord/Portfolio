document.querySelector(".learnMore").addEventListener('click', scrollDown);

function scrollDown()
{
    const pageThree = document.querySelector(".pageThree")
    pageThree.scrollIntoView({behavior: "smooth"})
}