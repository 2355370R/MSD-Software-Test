
function owlCaro() {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items :5,
    itemsDesktop : [640,5],
    itemsDesktopSmall : [414,2],
    navigation : true

  });
}

$(document).ready(function() {
  const init = { method: 'GET',
  cache: 'default' };

  fetch('https://api.openweathermap.org/data/2.5/forecast?q=Singapore&units=metric&APPID=ad839b03834fb3d5b808d6ce81cb648a', init)
  .then(function(response) {

    if(response.ok) {
      response.json().then(function(data) {
        $("#ol").append('<div id="owl-demo" class="owl-carousel"></div>');
        var optionDates = [];
        for (var i = 0; i < data.list.length; i++) {
          var currentDate = new Date(data.list[i].dt_txt);
          var date = currentDate.getDate();
          var month = currentDate.getMonth();
          var year = currentDate.getFullYear();
          var minutes = currentDate.toLocaleTimeString();
          var dateString = date + "-" +(month + 1) + "-" + year;
          optionDates.push(dateString);


          var a = '<div class="card  mb-4"><div class="card-header py-3"> <h6 class="m-0 font-weight-bold text-primary">Date: '
          + dateString + '</h6></div>' +
          '<div class="card-body">'
          +"<p> Time:</p>"
          +"<p>"+minutes + "</p>"
          +"<p>"+'<img src=http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png>' + "</p>"
          +"<p>"+data.list[i].weather[0].description + "</p>"
          +"<p> Temperature:</p>"
          +"<p>"+data.list[i].main.temp + ".C</p>"
          +'</div> </div>' ;
          $("#owl-demo").append(a);
        }

        var unique = optionDates.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        var arrayLength = unique.length;
        var option = document.createElement("option");
        option.text = "5 days";
        option.value = "all";
        var select = document.getElementById("weatherDate");
        select.appendChild(option);
        for (var i = 0; i < arrayLength; i++) {
          var option = document.createElement("option");
          option.text = unique[i];
          option.value = unique[i];
          var select = document.getElementById("weatherDate");
          select.appendChild(option);
        }
        owlCaro();
        console.log(data);
      })
    }
    else {
      console.log(response.status)
    }

  })

});

function onSelectChange() {
  var selectBox = document.getElementById("weatherDate");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue === "all") {
    const init = { method: 'GET',
    cache: 'default' };
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Singapore&units=metric&APPID=ad839b03834fb3d5b808d6ce81cb648a', init)
    .then(function(response) {

      if(response.ok) {
        response.json().then(function(data) {
          $("#ol").empty();
          $("#ol").append('<div id="owl-demo" class="owl-carousel"></div>');
          for (var i = 0; i < data.list.length; i++) {
            var currentDate = new Date(data.list[i].dt_txt);
            var date = currentDate.getDate();
            var month = currentDate.getMonth();
            var year = currentDate.getFullYear();
            var minutes = currentDate.toLocaleTimeString();
            var dateString = date + "-" +(month + 1) + "-" + year;
            var a = '<div class="card  mb-4"><div class="card-header py-3"> <h6 class="m-0 font-weight-bold text-primary">Date: '
            + dateString + '</h6></div>' +
            '<div class="card-body">'
            +"<p> Time:</p>"
            +"<p>"+minutes + "</p>"
            +"<p>"+'<img src=http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png>' + "</p>"
            +"<p>"+data.list[i].weather[0].description + "</p>"
            +"<p> Temperature:</p>"
            +"<p>"+data.list[i].main.temp + ".C</p>"
            +'</div> </div>' ;

            $("#owl-demo").append(a);
          }
          owlCaro();

          console.log(data);
        })
      }
      else {
        console.log(response.status)
      }

    })

  }

  else {
    const init = { method: 'GET',
    cache: 'default' };
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Singapore&units=metric&APPID=ad839b03834fb3d5b808d6ce81cb648a', init)
    .then(function(response) {

      if(response.ok) {
        response.json().then(function(data) {
          $("#ol").empty();
          $("#ol").append('<div id="owl-demo" class="owl-carousel"></div>');
          for (var i = 0; i < data.list.length; i++) {
            var currentDate = new Date(data.list[i].dt_txt);

            var date = currentDate.getDate();
            var month = currentDate.getMonth();
            var year = currentDate.getFullYear();
            var minutes = currentDate.toLocaleTimeString();

            var dateString = date + "-" +(month + 1) + "-" + year;
            if (dateString === selectedValue)
            {
              var a = '<div class="card  mb-4"><div class="card-header py-3"> <h6 class="m-0 font-weight-bold text-primary">Date: '
              + dateString + '</h6></div>' +
              '<div class="card-body">'
              +"<p> Time:</p>"
              +"<p>"+minutes + "</p>"
              +"<p>"+'<img src=http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png>' + "</p>"
              +"<p>"+data.list[i].weather[0].description + "</p>"
              +"<p> Temperature:</p>"
              +"<p>"+data.list[i].main.temp + ".C</p>"
              +'</div> </div>' ;
              $("#owl-demo").append(a);

            }
          }
          owlCaro();
          console.log(data);
        })
      }
      else {
        console.log(response.status)
      }
    })

  }
}
