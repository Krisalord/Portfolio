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
    if(window.innerWidth >= 1000){
        document.querySelector('header').style.display = 'flex'
        document.querySelector('#contentWrapper').style.display = 'flex'
    }
    else if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none'
        document.querySelector('#contentWrapper').style.display = 'flex'
    }

    showLoading()

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
        <div id="landingSphereWrapper">
		    
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
    console.log(closedToggle)
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
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const landingWrapper = `
    <div id="landingWrapper" class="mainWrapper">
        <div id="landingTextWrapper" class="textWrapper">
                <h2 id="landingHeader" class="mainHeader">Hi, I'm Artur Motin</h2>
            <p>Your next software engineer!</p>
            <input type="button" id="landingBtn" value="Contact Me">
        </div>
        <div>
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
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN ABOUT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="aboutMeWrapper" class="mainWrapper">
        <div id="aboutMeTextWrapper" class="textWrapper">
            <h2 id="aboutMeHeader" class="mainHeader">About Me</h2>
            <p>I'm a software engineer based in Finland.</p>
            <p>Solving roblems and using my skills to bring peoples dreams to reality is my passion.</p>
            <p>In my free time that I don't spend with my friends and family - I code or learn how to do it better. My latest interests are web development, that i want to turn into a career, and game development!</p>
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
        'JavaScript', 'CSS', 'HTML', 'C#', 'C++', 'React', 'git', 'API', 'Node.js', 'Canva', 'mongoDB', 'MySQL', 'jQuery', 'Azure', 'Unity'
    ];
    var tagCloud = TagCloud('.content', myTags,{
        // radius in px
        radius: 300,
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
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN ABOUT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const skillsWrapper = `
                <div id="experienceWrapper" class="mainWrapper">
                    <div id="experienceTextWrapper" class="textWrapper">
                        <h2 id="experienceHeader" class="mainHeader">Skills & Experience</h2>
                        <p>Since beginning of my journey as a freelance developer nearly 3 years ago, I've come along way in learning different technologies needed for web development to create products for both business and consumer use.</p>
                        <p>I can create responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom web pages, and coding interactive layouts.</p>
                        <p>I also have full stack developer experience working for a company developing android apps.</p>
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
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN MY WORK
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const myWorkWrapper = `
    <div id="myWorkWrapper" class="mainWrapper">
			<div id="myWorkTextWrapper" class="textWrapper">
				<h2 id="myWorkHeader" class="mainHeader">My Work</h2>
				<p>Here are some examples or my past work!</p>
				<p>If you are considering me for a project, I strongly suggest you to view them.</p>
			</div>
			<div id="myWorkListWrapper">

				<div class="projectBox">
					<h5>Portfolio website</h5>
					<p>This is my personal portfolio website</p>
					<span>HTML CSS JavaScript</span>
					<div>
						<img src="./css/images/folder.png">
						<img src="./css/images/link.png">
					</div>
				</div>

				<div class="projectBox">
					<h5>Portfolio website</h5>
					<p>This is my personal portfolio website</p>
					<span>HTML CSS JavaScript</span>
					<div>
						<img src="./css/images/folder.png">
						<img src="./css/images/link.png">
					</div>
				</div>

                <div class="projectBox">
					<h5>Portfolio website</h5>
					<p>This is my personal portfolio website</p>
					<span>HTML CSS JavaScript</span>
					<div>
						<img src="./css/images/folder.png">
						<img src="./css/images/link.png">
					</div>
				</div>

                <div class="projectBox">
					<h5>Portfolio website</h5>
					<p>This is my personal portfolio website</p>
					<span>HTML CSS JavaScript</span>
					<div>
						<img src="./css/images/folder.png">
						<img src="./css/images/link.png">
					</div>
				</div>

                <div class="projectBox">
					<h5>Portfolio website</h5>
					<p>This is my personal portfolio website</p>
					<span>HTML CSS JavaScript</span>
					<div>
						<img src="./css/images/folder.png">
						<img src="./css/images/link.png">
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
    const spinner = document.createElement("div")
    spinner.className = "spinner"
    preRoll.appendChild(spinner)
    
    // Add the pre-roll to the document
    document.body.appendChild(preRoll)
    
    // Remove the pre-roll after 0.5 seconds
    setTimeout(function() {
      preRoll.style.transform = "translateX(100%)"
    }, 500)
}
  
function hideLoading(){
    // Remove the pre-roll from the document
    const preRoll = document.getElementById("pre-roll")
    preRoll.parentNode.removeChild(preRoll)
}