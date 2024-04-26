const button = document.querySelector("#botaofalta");
const modalfalta = document.querySelector("#popfalta");
const buttonClose = document.querySelector("#popfalta #fechar");

const abrirgolpe = document.querySelector("#botaogolpe");
const modalgolpe = document.querySelector("#popgolpe");
const fechargolpe = document.querySelector("#popgolpe #fechar");

const direita = document.querySelector("#boataodireita");
const modaldireita = document.querySelector("#popdireita");
const fechardireita = document.querySelector("#popdireita #fechar")

button.onclick = function () {
  modalfalta.showModal();
};

buttonClose.onclick = function () {
  modalfalta.close();
};

abrirgolpe.onclick = function () {
  modalgolpe.showModal();
};
fechargolpe.onclick = function () {
  modalgolpe.close();
};

direita.onclick = function () {
  modaldireita.showModal();
};
fechardireita.onclick = function () {
  modaldireita.close();
}

