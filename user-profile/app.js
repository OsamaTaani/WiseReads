let tabs = document.querySelectorAll(".action-buttons ul li");

tabs.forEach(el => {
  el.addEventListener("click", () => {
    console.log("Tab clicked:", el);

    tabs.forEach(li => {
      console.log("Removing active class from:", li);
      li.classList.remove("active");
    });

    el.classList.add("active");

    const contentDivs = document.querySelectorAll(".content > div");
    console.log("Content Divs:", contentDivs);

    contentDivs.forEach(div => {
      console.log("Removing active class from:", div);
      div.classList.remove("active");
    });

    const targetClassName = el.dataset.name || el.parentElement.dataset.name;
    console.log("Adding active class to:", targetClassName);
    document.querySelector(`.${targetClassName}`).classList.add("active");
  });
});
