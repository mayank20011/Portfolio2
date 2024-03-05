const navanchor = document.querySelectorAll(
  "#singlepage #home .container #left nav .a"
);
function removeclass(nodelist, classname) {
  nodelist.forEach((item) => {
    item.classList.remove(classname);
  });
}
function removedisplay(nodelist) {
  nodelist.forEach((node) => {
    node.style.display = "none";
  });
}

// home page
const fliphomebuttom = document.querySelectorAll("#right i");
fliphomebuttom[1].addEventListener("click", () => {
  document.querySelector("#home .container #content").classList.add("flip");
  document
    .querySelector("#home .container #content .text")
    .classList.add("flipinner");
  fliphomebuttom[1].style.backgroundColor = "yellow";
  fliphomebuttom[0].style.backgroundColor = "white";
  document
    .querySelector("#home .container #content .text h2")
    .classList.add("changepadding");
  document.querySelector("#home .container #content .text p").textContent =
    "“I have successfully solved over 700 problems on CodeChef.”";
  document.querySelector("#home .container #content .text p.grow").textContent =
    "I have created more than 10 frontend projects. Please check out the ‘Project’ section for more details.";
  document.querySelector("#home .container #content .text").style.textAlign =
    "right";
  document.querySelector("#home .container #content img").src =
    "img/IMG_20231227_025902.png";
});
fliphomebuttom[0].addEventListener("click", () => {
  document.querySelector("#home .container #content").classList.remove("flip");
  document
    .querySelector("#home .container #content .text")
    .classList.remove("flipinner");
  fliphomebuttom[0].style.backgroundColor = "yellow";
  fliphomebuttom[1].style.backgroundColor = "white";
  document
    .querySelector("#home .container #content .text h2")
    .classList.remove("changepadding");
  document.querySelector("#home .container #content .text p").textContent =
    "Fresher";
  document.querySelector("#home .container #content .text p.grow").textContent =
    "As an energetic and motivated Computer science graduate, I am seeking Frontend Developer Position that will Leverage My Skills in Html, Css, JavaScript, i am eager to apply my Knowledge and experience to help drive innovative solutions in a collaborative team Environment.";
  document.querySelector("#home .container #content .text").style.textAlign =
    "left";
  document.querySelector("#home .container #content img").src =
    "img/photo_2024-02-21_20-25-43.jpg";
});

const pages = document.querySelectorAll(".pages");
navanchor.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    removedisplay(pages);
    pages[index].style.display = "block";
  });
});

const header = document.querySelectorAll("header.first ul li");
header.forEach((li, index) => {
  li.addEventListener("click", () => {
    removedisplay(pages);
    if (index == 0) {
      pages[index].style.display = "flex";
    } else {
      pages[index].style.display = "block";
    }
  });
});
const header2 = document.querySelectorAll("header.second ul li");
console.log(header);
header2.forEach((li, index) => {
  li.addEventListener("click", () => {
    removedisplay(pages);
    if (index == 0) {
      pages[index].style.display = "flex";
    } else {
      pages[index].style.display = "block";
    }
  });
});

const scaledownonclick=document.querySelectorAll(".projectsbottomright ul li");
const twocontainers=document.querySelectorAll("section.twocontainers");
scaledownonclick.forEach((item,index)=>
{
  item.addEventListener("click",()=>
  {
    removeclass(scaledownonclick,"scaledown");
    item.classList.add("scaledown");
    removedisplay(twocontainers);
    twocontainers[index].style.display="block";
  })
});