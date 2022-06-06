
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{x.innerHTML="Seu browser não suporta Geolocalização.";}
  }
function showPosition(position)
  {
  var lt = position.coords.latitude;
  var lg = position.coords.longitude;
    
  document.getElementById("lg").value = lg;
  document.getElementById("lt").value = lt;
  
  }

function showError(error)
  {
  switch(error.code)
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Localização indisponível."
      break;
    case error.TIMEOUT:
      x.innerHTML="A requisição expirou."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="Algum erro desconhecido aconteceu."
      break;
    }
  }
function send(){
  var fname = document.getElementById("fname").value;
  var telephone = document.getElementById("telephone").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var state = document.getElementById("state").value;
  var bdate = document.getElementById("bdate").value;
  var lt = document.getElementById("lt").value;
  var lg = document.getElementById("lg").value;
  alert("Dados Enviados: " + 
        "\nFull Name: " + fname +
        "\nTelephone: " + telephone +
          "\nE-mail: " + email +
          "\nCountry: " + country +
          "\nState: " + state +
          "\nBirth date: " + bdate +
          "\nLatitude: " + lt +
          "\nLongitude: " + lg);

  
}


