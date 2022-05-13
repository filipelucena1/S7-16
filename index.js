const tagBody = document.querySelector("body");
const tagMain = document.getElementById("main");
const tagP    = document.createElement("p");
const node    = document.createTextNode("Hello, World!");

tagP.appendChild(node);
tagMain.appendChild(tagP);
tagBody.appendChild(tagMain);
