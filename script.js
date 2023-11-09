let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7"); //caracter x
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function addElemento() {
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();
  var dataFormatada = dia + "/" + mes + "/" + ano;

  console.log(dataFormatada);
  let li = document.createElement("li");
  let inputValue = document.getElementById("tarefa").value.toUpperCase();
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Você precisa descrever a tarefa");
  } else {
    let data = new Date();
    let dataParagrafo = document.createElement("p");
    dataParagrafo.textContent = "Adicionado em: " + data.toLocaleDateString();

    li.appendChild(dataParagrafo);

    document.getElementById("itemLista").appendChild(li);
  }
  document.getElementById("tarefa").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function limparTudoBtn() {
  var lista = document.getElementById("itemLista");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

function addEnter(event){
  if(event.key === "Enter"){
      addElemento();
  }
}
