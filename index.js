

//#region get elms
let els = {
    head: '#head',
    headshot: '#head #headshot',
    description: '#head #description',
    nav: '#nav'
};

for (var key in els) {
    els[key] = document.querySelector(els[key]);
}
//#endregion

//#region scroll change
let interval = setInterval(() => {

    if (window.scrollY >= (head.clientHeight / 2 + head.offsetTop)) {
        head.classList.value = 'scrolling';
        headshot.classList.value = 'scrolling';
        description.classList.value = 'scrolling';
        nav.classList.value = 'scrolling';
    }
    else {
        head.classList.value = '';
        headshot.classList.value = '';
        description.classList.value = 'description-fade';
        nav.classList.value = '';
    }

}, 10)
//#endregion

//#region vue
let vue = new Vue({
    el: '#vue',
    data: {
        selectedTech: 'python',
    }
})
//#endregion

head.style.opacity = 1;


