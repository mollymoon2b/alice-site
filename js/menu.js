const menu = document.getElementsByClassName('js-menu')[0];

function creatLink(elem, href, text, className) {
    elem.innerHTML = text;
    elem.className = className;
    elem.href = href;
}

function createContentMenu(width, height) {
    const containerLink = document.createElement('div');
    const linkWork = document.createElement('a');
    const linkAbout = document.createElement('a');
    const linkContact = document.createElement('a');

    containerLink.className = 'menu-link';
    containerLink.style.height = height;
    containerLink.style.width = width;

    creatLink(linkWork, 'index.html', 'WORK', 'menu-link__item');
    creatLink(linkAbout,  'about.html', 'ABOUT', 'menu-link__item');
    creatLink(linkContact,  'contact.html', 'CONTACT', 'menu-link__item');

    containerLink.appendChild(linkWork);
    containerLink.appendChild(linkAbout);
    containerLink.appendChild(linkContact);

    return containerLink;
}

if (menu) {
    menu.addEventListener('click', function() {
        const divMenu =  document.getElementsByClassName('menu-content')[0]
            ? document.getElementsByClassName('menu-content')[0]
            : document.createElement('div') ;

        const closeButton =  document.getElementsByClassName('js-close-menu')[0]
            ? document.getElementsByClassName('js-close-menu')[0]
            : document.createElement('div') ;

        const width = `${window.innerWidth}px`;
        const height = `${window.innerHeight}px`;

        divMenu.style.height = height;
        divMenu.style.width = width;
        divMenu.className = 'menu-content';
        divMenu.style.display = 'block';

        closeButton.className = 'menu-close-button js-close-menu';
        closeButton.addEventListener('click', function () {
            divMenu.style.display = 'none';
        });
        if (!document.getElementsByClassName('menu-link')[0]) {
            divMenu.appendChild(createContentMenu(width, height));
        }
        divMenu.appendChild(closeButton);
        document.body.appendChild(divMenu);
    });
}