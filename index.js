
function solicitudAJAX(params) {
    var url = "https://api.thecatapi.com/v1/images/search?breed_ids=%7Bbreed.id%7D";
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
            console.log(objXMLHttpRequest.responseText);
          let json = JSON.parse(objXMLHttpRequest.responseText);
        

          console.dir(JSON);
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url + ".breeds");
    objXMLHttpRequest.send();
  }
