const get = (x,element) => {
    let elem;
    if (x === '*') {
        elem = document.querySelectorAll(element);
    } else {
        elem = document.querySelector(element);
    }
    return (elem);
}

get("", "header .menu").addEventListener('click', () => {
    get('', 'body').style.overflow = 'hidden';
    get('', '.wrapper').classList.add('blur');
    get('', 'nav').style.display = 'block';
    get("", "nav").innerHTML += `${window.innerWidth} ${window.innerHeight}`;
})

get('', 'nav .menu .close').addEventListener('click', () => {
        get("", "body").style.overflow = "auto";
        get("", ".wrapper").classList.remove("blur");
        get("", "nav").style.display = "none";
})
