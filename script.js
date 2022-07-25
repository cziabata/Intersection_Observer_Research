let i = 0;
let count = document.querySelector("#info span");

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(
        entry => {
            if(entry.isIntersecting) {
                count.innerHTML = ++i;
                observer.unobserve(entry.target)
            }
        }
    )
}, {threshold: 1})

document.querySelectorAll("section > p:last-child").forEach(
    p => {observer.observe(p)}
)

let sections = document.querySelectorAll("section");
let index = document.querySelector("#index");
let ul = document.createElement("ul");
index.appendChild(ul); 

sections.forEach((section, index) => {
    const h2 = section.querySelector("h2");
    const li = document.createElement("li");
    const a = document.createElement("a");

    h2.id = "h2-" + index;
    a.href = "#" + h2.id;
    a.textContent = h2.textContent;
    li.appendChild(a);
    ul.appendChild(li);
})

let observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(
        entry => {
            const h2 = entry.target.querySelector("h2");
            const a = document.querySelector(`#index a[href="#${h2.id}"]`)

            if(entry.isIntersecting) {
                a.classList.add("active");
            } else {
                a.classList.remove("active")
            }
        }
    )
}, {threshold: 0.5})

document.querySelectorAll("section").forEach(
    section => {observer2.observe(section)}
)