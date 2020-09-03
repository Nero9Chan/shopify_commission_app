var xhr = new XMLHttpRequest();
var original_url = "http://localhost:3000/";
const referred_by = "referred_by"

function postData(data, endPoint){
  const url = original_url+endPoint;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json);
      }
  };
  xhr.send(data);
}

function main(){
  if(extractURL(window.location.href.split("/") == 5) && typeof window.location.href.split("?")[1] != 'undefined'){//home page

    var data = {};
    setCookie(referred_by, extractURL(window.location.href.split("?")[1]), 30);
    data[referred_by] = document.cookie.split(referred_by + '=')[1].split(";")[0];
    postData(JSON.stringify(data),'opened');
  }

  else if(extractURL(window.location.href.split("/").length == 7) && document.cookie.split(referred_by)[1] != undefined){ //thank you, extract os-xxx-number next
    var data = {};
    var order_number = "order_number";
    data[order_number] = document.getElementsByClassName('os-order-number')[0].innerHTML.split('#')[1].split('\n')[0];
    data[referred_by] = document.cookie.split(referred_by + '=')[1].split(";")[0];
    postData(JSON.stringify(data),'transactionCompleted');

    console.log(document.getElementsByClassName('os-order-number')[0].innerHTML.split('#')[1].split('\n')[0]) //get order number, send to backend next
  }

  else{
    console.log("Error, not hit one of the above");
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function extractURL(cvalue){
	if(typeof cvalue == 'undefined' || cvalue=='')
		return "NULL"
	else
		return cvalue
}

function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}

main();

console.log(document.cookie);

listCookies();