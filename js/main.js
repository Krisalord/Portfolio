window.addEventListener('resize', function(){
    if(window.innerWidth >= 1000){
        document.querySelector('header').style.display = 'flex'
    }
    else if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none'
    }
})
window.addEventListener('load', function(){
    if(window.innerWidth >= 1000){
        document.querySelector('header').style.display = 'flex'
    }
    else if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none'
    }
})
//add hamburgerToggleFunction
let mapActive = 2
let closedToggle = 1
document.querySelector('#hamburgerToggle').addEventListener('click', function(){
    console.log(mapActive)
    if(closedToggle == 1){
        document.querySelector('header').style.display = 'flex';
        document.querySelector("#closingBrackets").style.display = 'none'
        document.querySelector("#openingBrackets").style.display = 'none'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/close.png')
        closedToggle++
        if(mapActive == 1){
            mapActive++
            document.querySelector('#contactMeMapWrapper').style.display = 'none'
        }
    }
    else if(closedToggle == 2){
        document.querySelector('header').style.display = 'none';
        document.querySelector('#closingBrackets').style.display = 'block'
        document.querySelector('#openingBrackets').style.display = 'block'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
        closedToggle--
        if(mapActive == 2){
            mapActive--
            document.querySelector('#contactMeMapWrapper').style.display = 'block'
        }
    }
})
//OPEN ABOUT ME PAGE
document.querySelector('#aboutMeOpen').addEventListener('click', function(){
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN ABOUT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="aboutMeWrapper">
        <div id="aboutMeTextWrapper">
            <h2 id="aboutMeHeader">Hi, I'm Artur, your next software engineer</h2>
            <p>I'm a software engineer based in Finland.</p>
            <p>Solving roblems and using my skills to bring peoples dreams to reality is my passion.</p>
            <p>In my free time that I don't spend with my friends and family - I code or learn how to do it better. My latest interests are web development, that i want to turn into a career, and game development!</p>
        </div>
        <div id="aboutMeAniWrapper">

        </div>
    </div>
    `;
    firstSpan.insertAdjacentHTML('afterend', contactMeWrapper);
    //OPEN ABOUT ME FROM PHONE SCREEN
    if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none';
        document.querySelector('#closingBrackets').style.display = 'block'
        document.querySelector('#openingBrackets').style.display = 'block'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
        closedToggle--
    }
    const header = document.querySelector('#aboutMeHeader')
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
})
//OPEN SKILLS PAGE
document.querySelector('#skillsOpen').addEventListener('click', function(){
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN ABOUT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const skillsWrapper = `
                <div id="experienceWrapper">
                    <div id="experienceTextWrapper">
                        <h2 id="experienceHeader">Skills & Experience</h2>
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
    //OPEN ABOUT ME FROM PHONE SCREEN
    if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none';
        document.querySelector('#closingBrackets').style.display = 'block'
        document.querySelector('#openingBrackets').style.display = 'block'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
        closedToggle--
    }
    const header = document.querySelector('#experienceHeader')
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
})
//OPEN CONTACT ME PAGE
document.querySelector('#contactMeOpen').addEventListener('click', function(){

    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    //OPEN ABOUT ME
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="contactMeWrapper">
        <div id="contactMeTextWrapper">
            <h2 id="contactMeHeader">Contact Me</h2>
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
    //map active = 1 (true)
    mapActive--
    //OPEN ABOUT ME FROM PHONE SCREEN
    if(window.innerWidth < 1000){
        document.querySelector('header').style.display = 'none';
        document.querySelector('#closingBrackets').style.display = 'block'
        document.querySelector('#openingBrackets').style.display = 'block'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
        closedToggle--
    }
    const header = document.querySelector('#contactMeHeader')
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

    //SEND EMAIL
    document.querySelector('#contactFormBtn').addEventListener('click', function(){
        if(document.querySelector('#email').value && document.querySelector('#yourMessage').value){
            
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
})
//OPEN MY WORK PAGE