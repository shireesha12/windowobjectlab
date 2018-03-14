/*eslint-env browser*/

/*window.console.log(Object.getOwnPropertyNames(window));*/

/*window.console.log(window.navigator.userAgent);
window.console.log(window.navigator.appName);
window.console.log(window.navigator.appVersion);
window.console.log(window.navigator.language);
window.console.log(window.navigator.platform);
window.console.log(window.navigator.vendor);
window.console.log(window.navigator.onLine);
window.console.log(window.navigator.geolocation);*/

/*var sBrowser, sUsrAg = window.navigator.userAgent; 
if(sUsrAg.indexOf("Chrome") > -1) { 
    sBrowser = "Google Chrome"; 
} else if (sUsrAg.indexOf("Safari") > -1) { 
    sBrowser = "Apple Safari";  
} else if (sUsrAg.indexOf("Opera") > -1) { 
    sBrowser = "Opera"; 
} else if (sUsrAg.indexOf("Firefox") > -1) { 
    sBrowser = "Mozilla Firefox"; 
} else if (sUsrAg.indexOf("MSIE") > -1) { 
    sBrowser = "Microsoft Internet Explorer"; 
} 
window.alert("You are using: " + sBrowser);*/

/*window.console.log(window.location.hash);
window.console.log(window.location.href);
window.console.log(window.location.host);
window.console.log(window.location.hostname);
window.console.log(window.location.pathname);
window.console.log(window.location.port);
window.console.log(window.location.protocol);
window.console.log(window.location.search);*/

//window.location.href = "http://www.google.com";
//window.location.href = "http://www.google.com";

//window.console.log(window.history.length);

/*window.addEventListener("load", function () {
    "use strict";
    var mybutton = window.document.getElementById("mybutton");
    mybutton.addEventListener("click", function () {
       window.open("http://www.google.com", "google", "width=600,height=600");
    });
    
});*/

/*window.addEventListener("load", function () {
    "use strict";
    var mybutton = window.document.getElementById("mybutton");
    mybutton.addEventListener("click", function () {
       window.open("sample.html", "google", "width=600,height=400");
    });
    
});*/
/*window.addEventListener("load", function () {
    "use strict";
    function writeMessage() {
        window.alert("hello world");
    }
    var mybutton = window.document.getElementById("mybutton");
    mybutton.addEventListener("click", function () {
       window.setTimeout(writeMessage, 10000);
    });
    
});*/

/*window.addEventListener("load", function () {
    "use strict";
    var mybutton = window.document.getElementById("mybutton");
    mybutton.addEventListener("click", function () {
       window.document.write(window.document.nodeType);
    });
    
});*/

/*window.addEventListener("load", function () {
    "use strict";
    var mybutton = window.document.getElementById("mybutton");
    mybutton.addEventListener("click", function (e) {
       window.document.write(e.currentTarget.attributes[0].nodeType + "<br>");
       window.document.write(mybutton.nodeType);    
    });
    
});*/
//var $ = function (id) {
//    "use strict";
//    return window.document.getElementById(id);
//};
/*window.addEventListener("load", function () {
  "use strict";
   $("submit").addEventListener("click", function () {
     $("email_error").firstChild.nodeValue = "Invalid Entry";  
   });
});*/
/*var inputs = window.document.getElementsByClassName(".myform");
window.console.log(inputs);
*/
/*var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
window.addEventListener("load", function () {
  "use strict";
//window.console.log(window.document.forms[0].id);
//window.document.forms[0].elements["email_address"].value = "hello";

//
window.getElementById("email_address").value = "helloworld";
$("email_address").value = "hello world";
});*/

var newdiv = window.document.createElement("div");
var content = window.document.createTextNode("This class is too difficult");
newdiv.appendChild(content);
var placeholder = window.document.querySelector("h1");
window.document.body.insertBefore(newdiv, placeholder);