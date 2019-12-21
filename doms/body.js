// HEADER
let header = document.createElement('header');


// HEADER LOGO & TOP NAVIGATION BAR
let logo = document.createElement('a');
logo.setAttribute('class', 'top-menu-link');
logo.setAttribute('id', 'header-logo');
logo.setAttribute('href', '#home');
logo.innerHTML = 'apedia';
header.appendChild(logo);

let topMenuLinkDiv = document.createElement('div');
topMenuLinkDiv.setAttribute('class', 'header-right');
header.appendChild(topMenuLinkDiv);

let home = document.createElement('a')
home.setAttribute('class', 'top-menu-link');
home.setAttribute('href', '#home');
home.innerHTML = 'Home';
topMenuLinkDiv.appendChild(home);

let categories = document.createElement('a')
categories.setAttribute('class', 'top-menu-link');
categories.setAttribute('href', '#');
categories.innerHTML = 'Categories';
topMenuLinkDiv.appendChild(categories);


let aboutMe = document.createElement('a')
aboutMe.setAttribute('class', 'top-menu-link');
aboutMe.setAttribute('href', '#');
aboutMe.innerHTML = 'About Me';
topMenuLinkDiv.appendChild(aboutMe);



// MAIN SECTION

let main = document.createElement('main');

// SEARCH BAR

let searchBar = document.createElement('input');
searchBar.setAttribute('class', 'search-bar');
searchBar.setAttribute('id', 'main-search-bar');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('onkeyup', 'searchFunc()');
searchBar.setAttribute('placeholder', 'What do you want to learn?');
searchBar.setAttribute('title', 'Type anything');

main.appendChild(searchBar);

const searchFunc = function() {
    // Declare variables
    let input = document.getElementsByClassName('search-bar');
    let filter = input.value.toLowerCase().split(' ');
    let articleDiv = document.getElementsByClassName('article-div');

    // Loop through all titles and hide those that don't match the search query
    for (let i = 0; i < articleDiv.length; i++) {
        let check = 0;
        let titleSearch = articleDiv[i].getElementsByClassName('article-title')[0].innerHTML.toLowerCase().split(' ');
        let contentSearch = articleDiv[i].getElementsByClassName('article-content')[0].innerHTML.toLowerCase().split(' ');

        for (let j = 0; j < titleSearch.length; j++) {
            for (let k = 0; k < filter.length; k++) {
                if (titleSearch[j].indexOf(filter[k]) > -1) {
                    check++;
                }
            }
        }

        for (let l = 0; l < contentSearch.length; l++) {
            for (let m = 0; m < filter.length; m++) {
                if (contentSearch[l].indexOf(filter[k]) > -1) {
                    check++;
                }
            }
        }

        if (check > 0) {
            articleDiv[i].style.display = '';
        }
        else {
            articleDiv[i].style.display = 'none';
        }
    }
}




// ARTICLE SECTION

const createArticleDiv = function (className, title, content) {
    if (className === undefined) {
        alert('Please provide the article class name.');
    }   
    else if (title === undefined) {
        alert('Please provide the article title.');
    }
    else if (className && title === undefined) {
        alert('Please provide the article class name and title.');
    }
    
    let articleDiv = document.createElement('div');
    articleDiv.setAttribute('class', className);
    main.appendChild(articleDiv);
    
    let articleTitle = document.createElement('a');
    articleTitle.setAttribute('class', 'article-title');
    articleTitle.innerHTML = title;
    articleDiv.appendChild(articleTitle);
    
    if (content === undefined) {
        return articleDiv;
    }
    else {
        articleDiv.appendChild(content);
    }
    

    return articleDiv;
}


let aboutMeContent = document.createElement('p');
aboutMeContent.setAttribute('class', 'article-content');
aboutMeContent.innerHTML = 'Adam Rafiandri is an Aviation Maintenance Electrician graduated from SMK Penerbangan Agkasa Bogor located near the Atang Sendjaja Air Force Base. His passion in Aviation and Programming have brought him to the amazing world of both and also made him always feel fascinated about them.'

let articleAboutMeDiv = createArticleDiv('article-div', 'About Me', aboutMeContent);













// FOOTER
let footer = document.createElement('footer');
footer.setAttribute('class', 'col-1');

// FOOTER LOGO & MENU
let footerLogo = document.createElement('a');
footerLogo.setAttribute('class', 'footer-logo');
footerLogo.setAttribute('href', '#');
footerLogo.innerHTML = "apedia";
footer.appendChild(footerLogo);

let footerMenuLinkDiv = document.createElement('div');
footerMenuLinkDiv.setAttribute('class', 'footer-menu-link-div');
footer.appendChild(footerMenuLinkDiv);

let aboutMeFooter = document.createElement('a');
aboutMeFooter.setAttribute('class', 'footer-menu-link');
aboutMeFooter.setAttribute('href', './about-me.html');
aboutMeFooter.innerHTML = 'About Me';
footerMenuLinkDiv.appendChild(aboutMeFooter);

// SOCIAL ICONS
let socialIconsDiv = document.createElement('div');
socialIconsDiv.setAttribute('class', 'social-icons-div');
footer.appendChild(socialIconsDiv);

//GITHUB SOCIAL ICON
let githubAnchor = document.createElement('a');
githubAnchor.setAttribute('class', 'footer-icon');
githubAnchor.setAttribute('href', 'https://github.com/rafiandria23');

let githubIcon = document.createElement('i');
githubIcon.setAttribute('class', 'fab fa-github fa-2x');
githubAnchor.appendChild(githubIcon);
socialIconsDiv.appendChild(githubAnchor);


// APPENDIX
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);