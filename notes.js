var entries = [];
var counter = 0;
var updateID = "";
function AddEntry() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var date = document.getElementById("dateEntry").value;
  var obj = {
    'title': title,
    'description': description,
    'date': date,
    'id': counter,
  }
  entries.push(obj);

  var a =   '<div id="'+ counter +'" class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body">'+
  '<div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">'+
  date + '</div><div class="h5 mb-0 font-weight-bold text-gray-800">' + title+
  '</div><div class="h6 mb-0 ">' +  description +
  '</div></div><div class="col-auto"><a href="#" id=" "onClick="removeEntry('+ counter +');" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a><a href="#" onClick="openUpdateForm('+"'"+ counter+"','"+date+"','"+title+"','"+description +"'" +')" class="btn btn-warning btn-circle btn-sm">'
  +'<i class="fas fa-edit"></i></a></div></div></div></div></div>'
  $("#ol").append(a);
  closeForm();
  alert("Entry Added!");
  counter++;
  console.log(entries);
  console.log(counter);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function openUpdateForm(counter,date,title,description) {

  document.getElementById("updateForm").style.display = "block";
  $("#updateTitle").val(title);
  $("#updateDescription").val(description);
  $("#updateDateEntry").val(date);
  updateID =counter;
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeUpdateForm() {
  document.getElementById("updateForm").style.display = "none";
}

function removeEntry(id) {
  for (var i = 0; i < entries.length; i++) {
    if(entries[i].id == id)
    {
      entries = entries.filter(function( obj ) {
        return obj.id !== id;
      });

      var element = document.getElementById(id);
      element.parentNode.removeChild(element);
      closeForm();
      alert("Entry Removed!");
      console.log(entries);
    }
  }
}


function updateEntry() {
  var title = document.getElementById("updateTitle").value;
  var description = document.getElementById("updateDescription").value;
  var date = document.getElementById("updateDateEntry").value;
  for (var i = 0; i < entries.length; i++) {
    if(entries[i].id == updateID)
    {
      entries[i].title = title;
      entries[i].description = description;
      var element = document.getElementById(updateID);
      element.parentNode.removeChild(element);

      var a =   '<div id="'+ updateID +'" class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body">'+
      '<div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">'+
      date + '</div><div class="h5 mb-0 font-weight-bold text-gray-800">' + title+
      '</div><div class="h6 mb-0 ">' +  description +
      '</div></div><div class="col-auto"><a href="#" id=" "onClick="removeEntry('+ counter +');" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a><a href="#" onClick="openUpdateForm('+"'"+ updateID+"','"+date+"','"+title+"','"+description +"'" +')" class="btn btn-warning btn-circle btn-sm">'
      +'<i class="fas fa-edit"></i></a></div></div></div></div></div>'

      $("#ol").append(a);
      console.log(entries);
      alert("Entry Updated!");
      closeUpdateForm();

    }
  }
}
