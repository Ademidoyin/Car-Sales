const Containers = [...document.querySelectorAll(".container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll('.pre-btn')];


Containers.forEach((item, i) => {
    let containerDimen = item.getBoundingClientRect();
    let containerWidth = containerDimen.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})