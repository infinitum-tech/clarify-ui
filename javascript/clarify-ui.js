function clarifyConfirm(htmlContent,confirmed,rejected){

  var backgroundMask = document.createElement("div");
  backgroundMask.classList.add("clarify-background-mask");
  document.body.appendChild(backgroundMask);

  var modal = document.createElement("div");
  modal.classList.add("clarify-modal");
  modal.classList.add("clarify-modal-open");
  backgroundMask.appendChild(modal);

  var header = document.createElement("div");
  header.classList.add("clarify-close-header");
  modal.appendChild(header);

  var contentContainer = document.createElement("div");
  contentContainer.innerHTML = htmlContent;
  modal.appendChild(contentContainer);

  var buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("clarify-confirm-buttons-container");
  modal.appendChild(buttonsContainer);

  var modalCloseButton = document.createElement("span");
  modalCloseButton.innerHTML = "&times;";
  modalCloseButton.classList.add("clarify-close-button");
  modalCloseButton.addEventListener("click",closeModal);
  header.appendChild(modalCloseButton);

  var rejectButton = document.createElement("button");
  rejectButton.classList.add("clarify-confirm-modal-button");
  rejectButton.innerHTML="No";
  rejectButton.addEventListener("click",function(){ closeModal(); rejected(); });
  buttonsContainer.appendChild(rejectButton);

  var confirmButton = document.createElement("button");
  confirmButton.classList.add("clarify-confirm-modal-button");
  confirmButton.innerHTML="Yes";
  confirmButton.addEventListener("click",function(){ closeModal(); confirmed(); });
  buttonsContainer.appendChild(confirmButton);

  function closeModal(){
    modal.classList.remove("clarify-modal-open");
    modal.classList.add("clarify-modal-close");
    setTimeout(function(){ backgroundMask.remove(); }, 300);
  }
}


function ClarifyModal(){

  var backgroundMask = document.createElement("div");
  backgroundMask.classList.add("clarify-background-mask");
  backgroundMask.style.display = "none";
  document.body.appendChild(backgroundMask);

  var modal = document.createElement("div");
  modal.classList.add("clarify-modal");
  modal.classList.add("clarify-modal-close");
  backgroundMask.appendChild(modal);

  var header = document.createElement("div");
  header.classList.add("clarify-close-header");
  modal.appendChild(header);

  this.content = document.createElement("div");
  modal.appendChild(this.content);

  this.remove = function(){
    modal.classList.remove("clarify-modal-open");
    modal.classList.add("clarify-modal-close");
    setTimeout(function(){ backgroundMask.remove(); }, 300);
  }

  this.open = function(){
  modal.classList.remove("clarify-modal-close");
  modal.classList.add("clarify-modal-open");
  backgroundMask.style.display="block";
  }

  this.close = function(){
  modal.classList.remove("clarify-modal-open");
  modal.classList.add("clarify-modal-close");
  setTimeout(function(){ backgroundMask.style.display="none"; }, 300);
  }

  var modalCloseButton = document.createElement("span");
  modalCloseButton.innerHTML = "&times;";
  modalCloseButton.classList.add("clarify-close-button");
  modalCloseButton.addEventListener("click",this.close);
  header.appendChild(modalCloseButton);
}

HTMLElement.prototype.pressed = function(time,callback){

  this.addEventListener("mousedown",function(){

    var timeOut = setTimeout(callback,time);

    this.addEventListener("mouseup",function(){

      clearTimeout(timeOut);

    });
  });
}


// Date picker
HTMLElement.prototype.clarifyDatePicker = function(year,month,format){
  var targetElement = this;

  this.addEventListener("click",function(){

  var backgroundMask = document.createElement("div");
  backgroundMask.classList.add("clarify-background-mask");
  document.body.appendChild(backgroundMask);

  var modal = document.createElement("div");
  modal.classList.add("clarify-modal");
  modal.classList.add("clarify-modal-open");
  modal.classList.add("clarify-datepicker");
  backgroundMask.appendChild(modal);

  // Create controls
  var monthDecreaseButton = document.createElement("button");
  monthDecreaseButton.innerHTML = "&ltrif;";
  monthDecreaseButton.classList.add("clarify-datepicker-control");
  modal.appendChild(monthDecreaseButton);

  var monthHeader = document.createElement("p");
  modal.appendChild(monthHeader);

  var monthIncreaseButton = document.createElement("button");
  monthIncreaseButton.innerHTML = "&rtrif;";
  monthIncreaseButton.classList.add("clarify-datepicker-control");
  modal.appendChild(monthIncreaseButton);

  var yearDecreaseButton = document.createElement("button");
  yearDecreaseButton.innerHTML = "&ltrif;";
  yearDecreaseButton.classList.add("clarify-datepicker-control");
  modal.appendChild(yearDecreaseButton);

  var yearHeader = document.createElement("p");
  modal.appendChild(yearHeader);

  var yearIncreaseButton = document.createElement("button");
  yearIncreaseButton.innerHTML = "&rtrif;";
  yearIncreaseButton.classList.add("clarify-datepicker-control");
  modal.appendChild(yearIncreaseButton);

  // Submit the date
  function submit(year,month,day){
    if(format==="yy-mm-dd"){
      targetElement.innerHTML=year+"/"+month+"/"+day;
    }
    if(format==="dd-mm-yy"){
      targetElement.innerHTML=day+"/"+month+"/"+year;
    }
    if(format==="mm-dd-yy"){
      targetElement.innerHTML=month+"/"+day+"/"+year;
    }
    modal.classList.remove("clarify-modal-open");
    modal.classList.add("clarify-modal-close");
    setTimeout(function(){ backgroundMask.remove(); }, 300);
  }

  // Function to set content of calendar
  function displayCalendar(year,month){

  var dateCells = [];

  var dateRows = [];

  var daysInMonth = new Date(year, month, 0).getDate();

  month-=1;

  var firstDay = new Date(year,month,1).getDay();

  var dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  // Remove table if already exists
  if(document.getElementById("datepicker-table")){
    document.getElementById("datepicker-table").remove();
  }

  // Create table
  var datePickerTable = document.createElement("table");
  datePickerTable.id="datepicker-table";
  modal.appendChild(datePickerTable);

  var daysHeader = document.createElement("tr");
  daysHeader.innerHTML="<th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>";
  datePickerTable.appendChild(daysHeader);

  // Create table cells
  for(var x=0;x<6;x++){
    var dateTableRow = document.createElement("tr");
    datePickerTable.appendChild(dateTableRow);
    dateRows.push(dateTableRow);
    for(var y=0;y<7;y++){
      // Create the cell
      var dateCell = document.createElement("td");
      dateTableRow.appendChild(dateCell);
      // Submit the information
      dateCell.addEventListener("click",function(){
        submit(year,month,this.innerHTML*1);
      });
      dateCells.push(dateCell);
    }
  }

  // Populate table cells with dates
  for(var x=0;x<daysInMonth;x++){
    dateCells[x+firstDay].innerHTML=dates[x];
  }

  // Remove empty rows
  for(var x=0;x<dateRows.length;x++){
    if (dateRows[x].innerHTML==="<td></td><td></td><td></td><td></td><td></td><td></td><td></td>"){
      dateRows[x].remove();
    }
  }

  // Disable empty cells
  for(var x=0;x<dateCells.length;x++){
    if(dateCells[x].innerHTML===""){
      dateCells[x].style.pointerEvents="none";
    }
  }

  // Provide information in header

  monthHeader.innerHTML=months[new Date(year,month).getMonth()];
  yearHeader.innerHTML = new Date(year,month).getFullYear();
  }

  displayCalendar(year,month);

monthDecreaseButton.addEventListener("click",function(){month-=1;displayCalendar(year,month);});
monthIncreaseButton.addEventListener("click",function(){month+=1;displayCalendar(year,month)});
yearDecreaseButton.addEventListener("click",function(){year-=1;displayCalendar(year,month)});
yearIncreaseButton.addEventListener("click",function(){year+=1;displayCalendar(year,month)});

// Stop modal clicks from closing the datepicker
modal.addEventListener("click",function(){event.stopPropagation()})

// Close datepicker on background click;
backgroundMask.addEventListener("click",function(){
  modal.classList.remove("clarify-modal-open");
  modal.classList.add("clarify-modal-close");
  setTimeout(function(){ backgroundMask.remove(); }, 300);
});

});
}
