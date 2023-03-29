const firebaseConfig = {
    apiKey: "AIzaSyC2NWNkLzSHMYDleTbWuFsGpY-0VUEZeXc",
    authDomain: "star-music-439bc.firebaseapp.com",
    databaseURL: "https://star-music-fdc34-default-rtdb.firebaseio.com/",
    projectId: "star-music-439bc",
    storageBucket: "star-music-439bc.appspot.com",
    messagingSenderId: "146318471268",
    appId: "1:146318471268:web:6129577beaa85f18ad2f71",
    measurementId: "G-33GCJFV7JC"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //ref
  const contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var mobile = getElementVal("mobile");
    var address = getElementVal("address");
    var message = getElementVal("message");

    saveMessage(name, email, mobile, address, message);

    //enable alert
    document.querySelector(".alert").style.display = "block";

    //disable alert and reset form
    setTimeout(() =>{
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contactForm").reset();
    
  }

  const saveMessage = (name, email, mobile, address, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        message: message,
    });
  }

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }


//Counter script


const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 100);
    } else counter.innerText = target;
  };
  updateCounter();
});

function show() {
  var reveal = document.querySelectorAll(".reveal");

  for (var i = 1; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal[i].getBoundingClientRect().top;
    var e = 190;

    if (elementTop < windowHeight-e) {
      reveal[i].classList.add("active");}
    else {
      reveal[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", show);


