//CODE TO OPEN HEADER MENU ON A PAGE THAT IS ON PHONE/TABLET SCREEN
let closedToggle = 1
document.querySelector('#hamburgerToggle').addEventListener('click', function(){
    if(closedToggle == 1){
        document.querySelector('header').style.display = 'block';
        document.querySelector("#closingBrackets").style.display = 'none'
        document.querySelector("#openingBrackets").style.display = 'none'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/close.png')
        closedToggle++
    }
    else if(closedToggle == 2){
        document.querySelector('header').style.display = 'none';
        document.querySelector('#closingBrackets').style.display = 'block'
        document.querySelector('#openingBrackets').style.display = 'block'
        document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
        closedToggle--
    }
})

document.querySelector('#contactMeOpen').addEventListener('click', function(){
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'

    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="contactMeWrapper">
        <div id="contactMeTextWrapper">
        <div id="contactMeText">
            <h2 id="contactMeHeader">Contact Me</h2>
            <p>I am currently accepting new freelance clients, interesting project opportunities, or possible job offers!</p>
        </div>
        </div>
        <br>
        <div id="contactMeFormWrapper">
        <form>
            <input type="text" class="contactFormText" placeholder="Name">
            <input type="text" class="contactFormText" placeholder="Email">
            <input type="text" class="contactFormText" placeholder="Subject">
            <input type="textarea" class="contactFormText" placeholder="Your message...">
        </form>
        </div>
        <br>
    </div>
    `;
    firstSpan.insertAdjacentHTML('afterend', contactMeWrapper);

    document.querySelector('header').style.display = 'none';
    document.querySelector('#closingBrackets').style.display = 'block'
    document.querySelector('#openingBrackets').style.display = 'block'
    document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
    closedToggle--
})

document.querySelector('#aboutMeOpen').addEventListener('click', function(){
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'

    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="aboutMeWrapper">
        <div id="aboutMeTextWrapper">
            <div id="aboutMeText">
			    <h2 id="aboutMeHeader">Hi, I'm Artur,<br>your next software engineer.</h2>
			    <p>I'm a software engineer based in Finland.</p>
			    <p> problems and using my skills to bring peoples dreams to reality is my passion.</p>
			    <p> of my free time that I don't spend with my friends and family - I code or learn how to do it better. My latest interests are web development, that i want to turn into a career, and game development!</p>
		    </div>
        </div>
        <div id="aboutMeAniWrapper">

	    </div>
    </div>
    `;
    firstSpan.insertAdjacentHTML('afterend', contactMeWrapper);

    document.querySelector('header').style.display = 'none';
    document.querySelector('#closingBrackets').style.display = 'block'
    document.querySelector('#openingBrackets').style.display = 'block'
    document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
    closedToggle--
})

document.querySelector('#skillsOpen').addEventListener('click', function(){
    document.querySelector('#contentWrapper').innerHTML = '<span id="openingBrackets" class="tags">&lthtml&gt</span><span id="closingBrackets" class="tags">&lt/html&gt</span>'
    
    const firstSpan = document.querySelector('#contentWrapper span:first-of-type');
    const contactMeWrapper = `
    <div id="experienceWrapper">
        <div id="experienceTextWrapper">
            <div id="contactMeText">
                <h2 id="contactMeHeader">Skills & Experience</h2>
                <p>Since beginning of my journey as a freelance developer nearly 3 years ago, I’ve come along way in learning different technologies needed for web development to create products for both business and consumer use.</p>
                <p>I can create responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom web pages, and coding interactive layouts.</p>
                <p>I also have full stack developer experience working for a company developing android apps.</p>
                <p>Visit my LinkedIn profile for mode details or just contact me.</p>
            </div>
        <div>
        <div id="skillsVisual">
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
                <h4>Software developer</h4>
                <span>AH-Talotekniikka</span>
                <span class="date">06.2022 - 01.2023</span>
                <p>Software developer for an android app.</p>
            </div>
        </div>
    </div>`;
    firstSpan.insertAdjacentHTML('afterend', contactMeWrapper);

    document.querySelector('header').style.display = 'none';
    document.querySelector('#closingBrackets').style.display = 'block'
    document.querySelector('#openingBrackets').style.display = 'block'
    document.querySelector('#hamburgerToggle').setAttribute('src', './css/images/menu.png')
    closedToggle--
})