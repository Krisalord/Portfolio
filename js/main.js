//add hamburgerToggleFunction
//is hamburger closed or opened (1 = closed)
let closedToggle = 1
window.addEventListener('resize', function(){
    if(window.innerWidth >= 1000){
        document.querySelector('header').style.display = 'flex'
        document.querySelector('#contentWrapper').style.display = 'flex'
    }
    else if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none'
        document.querySelector('#contentWrapper').style.display = 'block'
    }
})
window.addEventListener('load', function(){
    showLoading()

    if(window.innerWidth >= 1000){
        document.querySelector('header').style.display = 'flex'
        document.querySelector('#contentWrapper').style.display = 'flex'
    }
    else if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none'
        document.querySelector('#contentWrapper').style.display = 'flex'
    }
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN MY WORK
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const landingWrapper = `
    <div id="landingWrapper" class="mainWrapper">
		<div id="landingTextWrapper" class="textWrapper">
			<h2 id="landingHeader" class="mainHeader">Hi, I'm Artur Motin!</h2>
			<p>Software developer from Finland</p>
			<input type="button" id="landingBtn" value="Contact Me">
		</div>
        <div id="cubeWrapper">
        </div>
    `;
    firstSpan.insertAdjacentHTML('afterend', landingWrapper);

    headerToSpan()

    document.querySelector('#landingBtn').addEventListener('click', contactMe)
    document.querySelector('#landingBtn').addEventListener('click', function(){
        closedToggle = 1
    })
})
document.querySelector('#hamburgerToggle').addEventListener('click', function(){
    if(closedToggle == 1){
        document.querySelector('header').style.display = 'block';
        document.querySelector("#closingBrackets").style.display = 'none'
        document.querySelector("#openingBrackets").style.display = 'none'
        document.querySelector('#contentWrapper').style.display = 'none'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/close.png')
        closedToggle = 2
    }
    else if(closedToggle == 2){
        document.querySelector('header').style.display = 'none';
        document.querySelector('#closingBrackets').style.display = 'block'
        document.querySelector('#openingBrackets').style.display = 'block'
        document.querySelector('#contentWrapper').style.display = 'flex'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
        closedToggle = 1
    }
})
//Loading page (When logo is clicked)
document.querySelector('#headerTitle').addEventListener('click', function(){
    showLoading()

    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const landingWrapper = `
    <div id="landingWrapper" class="mainWrapper">
        <div id="landingTextWrapper" class="textWrapper">
                <h2 id="landingHeader" class="mainHeader">Hi, I'm Artur Motin</h2>
            <p>Your next software engineer!</p>
            <input type="button" id="landingBtn" value="Contact Me">
        </div>
        <div id="cubeWrapper">
            
        </div>
    </div>
    `;
    firstSpan.insertAdjacentHTML('afterend', landingWrapper);

    checkPageSize()
    headerToSpan()

    document.querySelector('#landingBtn').addEventListener('click', contactMe)
})
//OPEN ABOUT ME PAGE
document.querySelector('#aboutMeOpen').addEventListener('click', function(){
    showLoading()

    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN ABOUT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="aboutMeWrapper" class="mainWrapper">
        <div id="aboutMeTextWrapper" class="textWrapper">
            <h2 id="aboutMeHeader" class="mainHeader">About Me</h2>
            <p>I'm a software engineer based in Finland.</p>
            <p>I am passionate about coding and find immense joy in the process of bringing ideas to life through programming. Whether I'm solving complex problems or creating elegant designs, coding allows me to tap into my creativity and continuously learn and grow. It's a thrilling journey that keeps me motivated and inspired, and I am always excited to embark on new coding adventures.</p>
        </div>
        <div id="aboutMeAniWrapper">
            <span class="content"></span>
        </div>
    </div>
    `;
    firstSpan.insertAdjacentHTML('afterend', contactMeWrapper);

    checkPageSize()
    headerToSpan()

    const myTags = [
        'JavaScript', 'CSS', 'HTML', 'C#', 'C++', 'React', 'git', 'API', 'Node.js', 'Canva', 'mongoDB', 'MySQL', 'jQuery', 'Azure', 'express.js', 'Unity'
    ];

    let containerWidth = document.documentElement.clientWidth
    let containerHeight = document.documentElement.clientHeight
    let sphereRadius = Math.min(containerWidth, containerHeight) / 2.5

    let tagCloud = TagCloud('.content', myTags,{
        // radius in px
        radius: sphereRadius,
        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        // interact with cursor move on mouse out
        keep: true
      
    }); 
    document.querySelector('.content').style.color = "#08fdd8";
})
//OPEN SKILLS PAGE
document.querySelector('#skillsOpen').addEventListener('click', function(){
    showLoading()

    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN ABOUT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const skillsWrapper = `
                <div id="experienceWrapper" class="mainWrapper">
                    <div id="experienceTextWrapper" class="textWrapper">
                        <h2 id="experienceHeader" class="mainHeader">Skills & Experience</h2>
                        <p>Since the beginning of my programming journey I have used a lot of different technologies and languages, but right now I am focused mainly on backend web development.</p>
                        <p>I can create responsive websites and web apps that are fast, easy to use, and built with best programming practices in mind.</p>
                        <p>I also have full stack experience in android app development.</p>
                        <p>Visit my LinkedIn profile for mode details or just contact me.</p>
                    </div>
                    <div id="skillsVisualWrapper">
                        <div class="skillBar" id="skillBar1">
                            <span>HTML & CSS</span>
                            <footer><div></div></footer>
                        </div>
                        <div class="skillBar" id="skillBar2">
                            <span>JAVASCRIPT</span>
                            <footer><div></div></footer>
                        </div>
                        <div class="skillBar" id="skillBar3">
                            <span>BACKEND & API</span>
                            <footer><div></div></footer>
                        </div>
                        <div class="skillBar" id="skillBar4">
                            <span>C#</span>
                            <footer><div></div></footer>
                        </div>
                        <div id="box1" class="expBox">
                            <h4>Software developer</h4>
                            <span>AH-Talotekniikka</span>
                            <span class="date">06.2022 - 01.2023</span>
                            <p>Software developer for an android app.</p>
                        </div>
                        <div id="box2" class="expBox">
                            <h4>Web developer</h4>
                            <span>AUPwork</span>
                            <span class="date">02.2023 - present</span>
                            <p>Freelance fullstack web developer, I'm open for new clients!.</p>
                        </div>
                    </div>`;
    firstSpan.insertAdjacentHTML('afterend', skillsWrapper);

    checkPageSize()
    headerToSpan()
})
//OPEN CONTACT ME PAGE
document.querySelector('#contactMeOpen').addEventListener('click', contactMe)
function contactMe(){
    showLoading()

    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN CONTACT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="contactMeWrapper" class="mainWrapper">
        <div id="contactMeTextWrapper" class="textWrapper">
            <h2 id="contactMeHeader" class="mainHeader">Contact Me</h2>
            <p>I am currently accepting new freelance clients, interesting project opportunities, or possible job offers!</p>
            <form>
                <input type="text" class="contactFormText" placeholder="Name" id="name">
                <input type="text" class="contactFormText" placeholder="Email" id="email">
                <input type="text" class="contactFormText" placeholder="Subject" id="subject">
                <input type="textarea" class="contactFormText" placeholder="Your message..." id="yourMessage">
                <input type="button" id="contactFormBtn" value="Send Message">
            </form>
        </div>
        
        <div id="contactMeMapWrapper">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="100%" height="700" id="gmap_canvas" src="https://maps.google.com/maps?q=Kuopio&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    `;
    firstSpan.insertAdjacentHTML('afterend', contactMeWrapper);
    //SEND EMAIL
    document.querySelector('#contactFormBtn').addEventListener('click', function(){
        if(document.querySelector('#email').value && document.querySelector('#yourMessage').value){
            //CODE TO SEND EMAIL IF FIELDS ARE NOT EMPTY
        }
        else{
            let field1 = document.querySelector('#email')
            let field2 = document.querySelector('#yourMessage')

            field1.style.borderBottom = "1px solid #ff3333";
            field2.style.borderBottom = "1px solid #ff3333";
            setTimeout(function() {
            field1.style.borderBottom = "";
            field2.style.borderBottom = "";
            }, 500);
            setTimeout(function() {
            field1.style.borderBottom = "1px solid #ff3333";
            field2.style.borderBottom = "1px solid #ff3333";
            }, 1000);
            setTimeout(function() {
            field1.style.borderBottom = "";
            field2.style.borderBottom = "";
            }, 1500);
        }
    })

    checkPageSize()
    headerToSpan()
}
//OPEN MY WORK PAGE
document.querySelector('#myWorkOpen').addEventListener('click', function(){
    showLoading()

    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN MY WORK
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const myWorkWrapper = `
    <div id="myWorkWrapper" class="mainWrapper">
			<div id="myWorkTextWrapper" class="textWrapper">
				<h2 id="myWorkHeader" class="mainHeader">KLapp project</h2>
				<p>I like to showcase the best of my work, so this page will contain a detailed description of my latest project!</p>
			</div>
			<div id="myWorkListWrapper">
                <div class="projectBox">
					<h5>Social Network</h5>
					<p>Social Network Project</p><br>
                    <h2>Description</h2><br>
                    <p>This is my first big personal project. The goal was to create a social network web app that allowes people to share pictures, react to them by commenting and liking, and have a simple profile. While creating this project, I had to learn a lot of new libraries and how API's work in general, aswell as securing users data (password hashing, cookies etc).</p>
					<span>JavaScript, CSS, EJS, nodeJS, Express</span>
					<div>
						<a href="https://klappsocial.cyclic.app/"><img src="./css/images/link.png"></a>
						<a href="https://github.com/Krisalord/SocialNetworkProject"><img src="./css/images/folder.png"></a>
					</div>
				</div>
			</div>
		</div>
    `;
    firstSpan.insertAdjacentHTML('afterend', myWorkWrapper);
    checkPageSize()
    headerToSpan()
})
//Check page size when opening something from header
function checkPageSize(){
    if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none';
        document.querySelector('#closingBrackets').style.display = 'block'
        document.querySelector('#openingBrackets').style.display = 'block'
        document.querySelector('#contentWrapper').style.display = 'flex'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
        closedToggle = 1
    }
    else if(window.innerWidth >= 1000){
        document.querySelector('#contentWrapper').style.display = 'flex'
    }
}
//Turn header into spans for animations
function headerToSpan(){
    const header = document.querySelector('.mainHeader')
    const headerText = header.textContent
    header.innerHTML = ""

    for (let i = 0; i < headerText.length; i++){
        const span = document.createElement('span')
        span.textContent = headerText[i]
        span.addEventListener('mouseover', function(){
            span.style.color = "red"
        });
        span.addEventListener('mouseout', function() {
            span.style.color = "#08fdd8"
        });
        header.appendChild(span)
    }
}
//SPARKS!!!
const pointer = document.querySelector("#pointer");
document.addEventListener("mousemove", (e) => {
    pointer.style.top = `${e.clientY}px`;
    pointer.style.left = `${e.clientX}px`;

    setTimeout(() => {
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.top = `${e.clientY - 5}px`;
        spark.style.left = `${e.clientX - 5}px`;
        spark.style.pointerEvents = "none";
        document.body.appendChild(spark);

        setTimeout(() => {
        spark.style.opacity = 1;
        spark.style.transform = "scale(1)";
        }, 50);

        setTimeout(() => {
        spark.style.opacity = 0;
        spark.style.transform = "scale(0)";
        }, 350);

        setTimeout(() => {
        spark.remove();
        }, 400);
    }, 100);
});
function showLoading(){
    // Create a new element for the pre-roll
    const preRoll = document.createElement("div")
    preRoll.id = "pre-roll"
    preRoll.style.transition = "transform 0.5s ease-out"    
    // Add a loading indicator
    const loadingBar = document.createElement("div")
    loadingBar.className = "loading-bar"
    preRoll.appendChild(loadingBar)
    //Add a loading text
    const loadingSpan = document.createElement("span")
    loadingSpan.className = "loading-span"
    loadingSpan.innerText = "Loading..."
    loadingSpan.style.marginTop = "1rem"
    loadingSpan.style.fontSize = "2rem"
    loadingSpan.style.color = "#08fdd8"
    preRoll.appendChild(loadingSpan)
    // Add the pre-roll to the document
    document.body.appendChild(preRoll)    
    // Remove the pre-roll after 0.5 seconds
    setTimeout(function() {
      preRoll.style.transform = "translateX(100%)"
    }, 500)    
    // Remove the pre-roll after 2 seconds
    setTimeout(function () {
        preRoll.parentNode.removeChild(preRoll);
    }, 1000)
}
//Prevent horizontal "movement" on the phone screen
document.addEventListener('touchmove', function (event){
    let touch = event.touches[0];
    if (touch.pageX > touch.pageY) {
      event.preventDefault();
    }
}, { passive: false });