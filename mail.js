const firebaseConfig = {
    apiKey: "AIzaSyB_fspuu1oU0V6xiieRG8lzUtT0TgMhh9k",
    authDomain: "preorder-4fc2c.firebaseapp.com",
    databaseURL: "https://preorder-4fc2c-default-rtdb.firebaseio.com",
    projectId: "preorder-4fc2c",
    storageBucket: "preorder-4fc2c.appspot.com",
    messagingSenderId: "228576952917",
    appId: "1:228576952917:web:d7cfdd8c354212b9e78adc"
  };

  // initial
  firebase.initializeApp(firebaseConfig);

  //ref db
var PreOrderDB =firebase.database().ref('PreOrder');
document.getElementById('PreOrder').addEventListener('submit', submitForm);

function submitForm(e){
    e.prevenDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var email = getElementVal('email');
    var age = getElementVal('age');
    var gender = getElementVal('gender');
    var trial = getElementVal('trial');
    var countryCode = getElementVal('countryCode');
    var cont = getElementVal('cont');

   
     saveMessages (fname, lname, email, age, gender, trail, countryCode, cont);

}



const getElementVal = (id) => {
  var  newPreOrder = PreOrderDB.push();

    newPreOrder.set({
        fname : fname,
        lname : lname,
        email: email,
        age: age,
        gender:gender,
        trail :  trail,
        countryCode : countryCode,
        cont:cont,

    });



    return document.getElementById(id).value;
}