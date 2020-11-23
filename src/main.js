/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let app = document.querySelector("#app"); //busca el selector
  app.innerHTML = "<h1>hola poker</h1>"; //en dicho selector agrega el texto
  document.body.classList.add("bg-success"); //agrega al body la clase bg-success que tiene como característica el fondo verde

  let filaBootstrap = document.querySelector("#app"); //busca el selector
  filaBootstrap.innerHTML = '<div class="row" id="row1"></div>'; //en dicho selector crea el texto

  let colBootstrap3 = document.querySelector("#row1"); //busca el selector
  colBootstrap3.innerHTML = '<div class="col-md-3" id="col11">'; //en dicho selector crea el texto
  filaBootstrap.appendChild(colBootstrap3);

  //Funciones creadas para agregar nuevos elementos HTML después de nodos indicados
  let divRowValor = createElement("div", { class: "row", id: "rowValor" });
  insertAfter(colBootstrap3, divRowValor);

  let divRow2 = createElement("div", { class: "row", id: "row2" });
  insertAfter(divRowValor, divRow2);

  let colBootstrap9 = document.querySelector("#row2"); //busca el selector
  colBootstrap9.innerHTML = '<div class="col-md-12" id="col12">'; //en dicho selector crea el texto
  filaBootstrap.appendChild(colBootstrap9);

  //Crear una nueva carta, con valor aleatorio y de color tipo aleatorio

  //seleccionar color y tipo aleatorio
  let color = ["red", "black"];
  let symbol = ["♥", "♣", "♦", "♠"]; //emojis se buscan al pisar windows+.
  let club = {
    color: "black",
    symbol: "♠"
  };
  let suits = [
    {
      color: "red",
      symbol: "♦"
    },
    {
      color: "red",
      symbol: "♥"
    },
    {
      color: "black",
      symbol: "♠"
    },
    {
      color: "black",
      symbol: "♣"
    }
  ];

  //selecciona color aleatorio
  var numAleatorio = Math.floor(Math.random() * suits.length);

  //selecciona un número aleatorio de la carta
  var cardValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var valorAleatorio = Math.floor(Math.random() * cardValues.length);

  //let span = document.body.querySelector("#app");
  let spanTop = document.body.querySelector("#col11");
  let spanBottom = document.body.querySelector("#col12");
  spanTop.innerHTML = `<h1>${suits[numAleatorio].symbol}</h1>`;
  spanTop.style.color = suits[numAleatorio].color;
  spanBottom.innerHTML = `<h1>${suits[numAleatorio].symbol}</h1>`;
  spanBottom.style.color = suits[numAleatorio].color;

  spanBottom.style.transform = "rotate(180deg)";

  //insertar en el dom el valor de la carta
  let valueSelector = document.body.querySelector("#rowValor");
  valueSelector.innerHTML = `<h1>${cardValues[valorAleatorio]}</h1>`;

  //Estilos CSS
  let allViewport = document.querySelector(".bg-success");
  allViewport.style.width = "100%";
  allViewport.style.justifyContent = "Space-Around";
  allViewport.style.alignContent = "center";

  app.style.backgroundColor = "white";
  app.style.width = "170px";
  app.style.height = "220px";
  app.style.padding = "25px";
  app.style.margin = "50px";
  app.style.marginLeft = "35%";
  app.style.marginRight = "35%";
  app.style.borderRadius = "5%";
  app.style.verticalAlign = "middle";
  app.style.justifyContent = "Space-Around";
  app.style.alignContent = "center";

  //Estilo del valor de la carta, fila del medio
  divRowValor.style.justifyContent = "Space-Around";
  divRowValor.style.height = "70%";
  divRowValor.style.alignContent = "center";
  valueSelector.style.fontSize = "300%";

  //Estilo de la fila superior
  filaBootstrap.style.justifyContent = "Left";
  filaBootstrap.style.height = "15%";

  //Estilo de la fila inferior
  divRow2.style.justifyContent = "right";
  divRow2.style.height = "15%";
};

//Funciones aparte
//función para ordenar los nodos
function insertAfter(referenceNode, newNode) {
  if (referenceNode.nextSibling) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  } else {
    referenceNode.parentNode.appendChild(newNode);
  }
}

//función para crear elemento html (div, p, b, h1, etc...)
function createElement(element, attribute, inner) {
  if (typeof element === "undefined") {
    return false;
  }
  if (typeof inner === "undefined") {
    inner = "";
  }
  var el = document.createElement(element);
  if (typeof attribute === "object") {
    for (var key in attribute) {
      el.setAttribute(key, attribute[key]);
    }
  }
  if (!Array.isArray(inner)) {
    inner = [inner];
  }
  for (var k = 0; k < inner.length; k++) {
    if (inner[k].tagName) {
      el.appendChild(inner[k]);
    } else {
      el.appendChild(document.createTextNode(inner[k]));
    }
  }
  return el;
}
