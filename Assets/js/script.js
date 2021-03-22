const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.remove('reveal')
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
});

/**************************************************
 * *****************  PARALLAX ********************
 * ***********************************************/
 

document.addEventListener("scroll", (e) => {
    let scroll_pos = window.scrollY;
    const head = document.querySelector("header");
  
    console.log(scroll_pos);
    scroll_pos = scroll_pos * -3 * 0.5;
  
    head.style.backgroundPosition = "0px " + scroll_pos + "px";
  });