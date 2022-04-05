
var firebaseConfig = {
      apiKey: "AIzaSyB5w5TE3uSTriN8qN8ZFBved-MEA8TJSr4",
      authDomain: "kwiter-49f68.firebaseapp.com",
      projectId: "kwiter-49f68",
      storageBucket: "kwiter-49f68.appspot.com",
      messagingSenderId: "266887319752",
      appId: "1:266887319752:web:6e753f420fccee534155fd"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
