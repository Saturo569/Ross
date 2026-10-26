const btn = document.getElementById('bars');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll(".sidebar nav a");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

links.forEach(link =>{
    link.addEventListener("click", () =>{
        sidebar.classList.remove("open");
    });
});