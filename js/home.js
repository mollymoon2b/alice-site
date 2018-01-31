const elems = document.getElementsByClassName('js-hover-homepage-container');

function lanchHover(element, status) {
	const container = element.getElementsByClassName('js-hover-homepage')[0];

	if (status === 'none') {
		container.style.display = status;
	} else {
		const url = container.hasAttribute('data-hover-image') ? container.getAttribute('data-hover-image') : undefined;
		if (url) {
			container.style.backgroundImage = `url('${url}')`;
		}
		container.style.display = status;
	}
}

if (elems) {
	Array.prototype.forEach.call(elems, function(elem){
		elem.addEventListener('mouseenter', function(){
			lanchHover(elem, 'table');
		});
		elem.addEventListener('mouseleave', function(){
			lanchHover(elem, 'none');
		});
	});
}


