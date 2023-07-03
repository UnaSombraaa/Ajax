function solicitudAJAX(params) {
    var url = "https://catfact.ninja/fact?max_length=140";
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
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.send();
  }
