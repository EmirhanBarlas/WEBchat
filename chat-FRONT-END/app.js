function init(){
    const firebaseConfig = {
        apiKey: "AIzaSyC1CmH3DUDjjLOdqwSJsK1qDZqA2gR00Qc",
        authDomain: "sohbet1-476b9.firebaseapp.com",
        projectId: "sohbet1-476b9",
        storageBucket: "sohbet1-476b9.appspot.com",
        messagingSenderId: "866207151893",
        appId: "1:866207151893:web:1dd4f8d5c75b94a9cbdb1c"
      };
      const app = initializeApp(firebaseConfig);

      /*firebase.database().ref("messages").push().set({
        sender:"tcf",
        message:"deneme",
        time:firebase.database.ServerValue.TIMESTAMP
      }) */

      firebase.database().ref("messages").on("child_added", (snapshot)=>{
        var html = '';
        if(snapshot.val().sender == myName){
            html += '<li class="message mine">';
            html += '<p class="text">Lorem </p>';
            html += '<span class="date">12:00</span>';
            html += '</li>';
        }else{
            html += '<li class="message mine">';
            html += '<p class="text">Lorem </p>';
            html += '<span class="date">12:00</span>';
            html += '<span class="sender">isim</span>';
            html += '</li>';
        }
        messages.innerHTML += html;
        messages.scroll({behavior: "smooth", top:999999999999999})
      });
}

function sohbeteBasla(){
    myName = nameInput.value;
    if(myName.length > 0){
        console.log(myName)
        login.classList.add("hidden");
        init();
    }
}



var login = document.querySelector(".login");
var nameInput = document.getElementById("name");
var messages = document.getElementById("messages");
messages.innerHTML = "";
var myName = "";