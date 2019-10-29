function clarifyConfirm(htmlcontent,confirmed,rejected){

var backgroundMask = document.createElement("div");
backgroundMask.classList.add("clarify-background-mask");
document.body.appendChild(backgroundMask);

var modal = document.createElement("div");
modal.innerHTML=htmlcontent;
modal.classList.add("clarify-modal");
modal.classList.add("clarify-modal-open");
for(var i=0;i<modal.childNodes.length;i++){
modal.childNodes[i].classList.add("clarify-modal-content");
}
backgroundMask.appendChild(modal);

var buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("clarify-verify-buttons-container");
modal.appendChild(buttonsContainer);

var modalCloseButton = document.createElement("span");
modalCloseButton.innerHTML = "&times;";
modalCloseButton.classList.add("clarify-modal-close-button");
modalCloseButton.addEventListener("click",function(){ closeModal(); });
modal.insertBefore(modalCloseButton,modal.childNodes[0]);

var rejectButton = document.createElement("button");
rejectButton.classList.add("clarify-verify-modal-button");
rejectButton.innerHTML="No";
rejectButton.addEventListener("click",function(){ closeModal(); rejected(); });
buttonsContainer.appendChild(rejectButton);

var confirmButton = document.createElement("button");
confirmButton.classList.add("clarify-verify-modal-button");
confirmButton.innerHTML="Yes";
confirmButton.addEventListener("click",function(){ closeModal(); confirmed(); });
buttonsContainer.appendChild(confirmButton);

function closeModal(){

  modal.classList.remove("clarify-modal-open");
  modal.classList.add("clarify-modal-close");
  setTimeout(function(){ backgroundMask.remove(); }, 300);
}

}


function clarifyModal(htmlcontent){

  var backgroundMask = document.createElement("div");
  backgroundMask.classList.add("clarify-background-mask");
  document.body.appendChild(backgroundMask);

  var modal = document.createElement("div");
  modal.innerHTML=htmlcontent;
  modal.classList.add("clarify-modal");
  modal.classList.add("clarify-modal-open");
  for(var i=0;i<modal.childNodes.length;i++){
  modal.childNodes[i].classList.add("clarify-modal-content");
  }
  backgroundMask.appendChild(modal);

  var modalCloseButton = document.createElement("span");
  modalCloseButton.innerHTML = "&times;";
  modalCloseButton.classList.add("clarify-modal-close-button");
  modalCloseButton.addEventListener("click",function(){ closeModal(); });
  modal.insertBefore(modalCloseButton,modal.childNodes[0]);

  function closeModal(){

    modal.classList.remove("clarify-modal-open");
    modal.classList.add("clarify-modal-close");
    setTimeout(function(){ backgroundMask.remove(); }, 300);
  }

}


function closeModals(){

var modals=document.getElementsByClassName("clarify-modal");
for(var i=0;i<modals.length;i++){
modals[i].classList.remove("clarify-modal-open");
modals[i].classList.add("clarify-modal-close");
modals[i].parentNode.remove();
}
}



function clarifyMenu(openNode,htmlContent,width,direction,closeOnClick){

var sidenav = document.createElement("div");
sidenav.innerHTML = htmlContent;
document.body.appendChild(sidenav)
sidenav.classList.add("clarify-sidenav");

var closebutton = document.createElement("button");
closebutton.innerHTML="&times;";
closebutton.classList.add("clarify-closebtn");
sidenav.appendChild(closebutton);

if(direction === "left"){
var sidenavLeft ="-"+width+"px";
sidenav.style.left=sidenavLeft;
sidenav.style.width=width+"px";


closebutton.addEventListener("click",closeNav);

openNode.addEventListener("click",openNav);


function openNav() {
sidenav.style.left = "0px";
sidenav.style.boxShadow=" 5px 0px 68px rgb(50,50,50)";
}

function closeNav() {
sidenav.style.left=sidenavLeft;
sidenav.style.boxShadow="none";
}
}


if(direction === "right"){
var sidenavRight ="-"+width+"px";
sidenav.style.right=sidenavRight;
sidenav.style.width=width+"px";


closebutton.addEventListener("click",closeNav);

openNode.addEventListener("click",openNav);

closebutton.style.left="5px";
closebutton.style.marginLeft="0px";

function openNav() {
sidenav.style.right = "0px";
sidenav.style.boxShadow=" 5px 0px 28px rgb(0,0,0)";
}

function closeNav() {
sidenav.style.right=sidenavRight;
sidenav.style.boxShadow="none";
}
}

if(closeOnClick){
var menuChildNodes = sidenav.childNodes;
for(var i=0;i<menuChildNodes.length;i++){
  menuChildNodes[i].addEventListener("click",closeNav);
}
}


}


HTMLElement.prototype.pressed = function(time,callback){

    var timeOut;

    this.addEventListener("mousedown",function(){

    timeOut = setTimeout(callback,time);

    this.addEventListener("mouseup",function(){

       clearTimeout(timeOut);

    });

    });

}
