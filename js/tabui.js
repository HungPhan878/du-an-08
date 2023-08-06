"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".solution__tab");
console.log(tabs);
const panes = $$(".solution__item");
const lineActive = $(".line");
console.log([$(".solution__tab.active")]);

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        $(".solution__tab.active").classList.remove("active");
        $(".solution__item.active").classList.remove("active");

        lineActive.style.width = this.offsetWidth + "px";
        lineActive.style.left = this.offsetLeft + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});
