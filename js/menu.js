const menu = document.getElementsByClassName('js-menu')[0];

function creatLink(elem, href, text, className) {
    elem.innerHTML = text;
    elem.className = className;
    elem.href = href;
}

function createContentMenu() {
    const containerLink = document.createElement('div');
    const linkWork = document.createElement('a');
    const linkAbout = document.createElement('a');
    const linkContact = document.createElement('a');

    containerLink.className = 'menu-link';

    creatLink(linkWork, 'index.html', 'WORK', 'menu-link__item');
    creatLink(linkAbout,  'about.html', 'ABOUT', 'menu-link__item');
    creatLink(linkContact,  'mailto:helfer.alice@gmail.com', 'CONTACT', 'menu-link__item');

    containerLink.appendChild(linkWork);
    containerLink.appendChild(linkAbout);
    containerLink.appendChild(linkContact);

    return containerLink;
}

if (menu) {
    menu.addEventListener('click', function(e) {
			if (e.target.className === 'menu-stripe') {
				e.target.parentElement.style.display = "none";
			} else {
				e.target.style.display = "none";
			}
			console.log(e.target);
				document.body.style.overflow = 'hidden';
        const divMenu =  document.getElementsByClassName('menu-content')[0]
            ? document.getElementsByClassName('menu-content')[0]
            : document.createElement('div') ;

        const closeButton =  document.getElementsByClassName('js-close-menu')[0]
            ? document.getElementsByClassName('js-close-menu')[0]
            : document.createElement('div') ;

        const width = `${window.innerWidth}px`;
        const height = `${window.innerHeight}px`;
				const scrollPosition = document.documentElement.scrollTop;
			
        divMenu.style.height = height;
        divMenu.style.width = width;
        divMenu.className = 'menu-content';
        divMenu.style.top = scrollPosition === 0 ? 0 :`${document.documentElement.scrollTop}px`;
        divMenu.style.left = 0;
        divMenu.style.display = 'flex';

        closeButton.className = 'menu-close-button js-close-menu';
        closeButton.addEventListener('click', function () {
						document.body.style.overflow = 'initial';
            divMenu.style.display = 'none';
						e.target.style.display = "block";
        });
        if (!document.getElementsByClassName('menu-link')[0]) {
            divMenu.appendChild(createContentMenu());
        }
        divMenu.appendChild(closeButton);
        document.body.appendChild(divMenu);
    });
}

const footer = document.getElementsByClassName('footer-image')[0];

if (footer) {
	footer.addEventListener('click', function() {
		document.documentElement.scrollTop = 0;
	})
}