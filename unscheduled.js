import { initializeApp } from 'firebase/app';
import { getDatabase,ref,set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQBINRXgXTdIcFthbdPHcpBacplfiInUI",
  authDomain: "mgm-events.firebaseapp.com",
  databaseURL: "https://mgm-events-default-rtdb.firebaseio.com",
  projectId: "mgm-events",
  storageBucket: "mgm-events.appspot.com",
  messagingSenderId: "195307897416",
  appId: "1:195307897416:web:e469a64586a23df8f68e7d",
  measurementId: "G-SXZL0MW74Q"
};
const database = getDatabase();
const event = document.getElementById("event")
const fullName = document.getElementById("fullName")
const email = document.getElementById("emailAddress")
const phone = document.getElementById("phoneNum")
const submitButton = document.getElementById("submitBtn")
const nickname = document.getElementById("nickname")
const unscheduledForm = document.getElementById("unscheduledForm")
const database = firebase.database();
const rootRef = database.ref('Unscheduled Event Recipients');
const ticketNum = document.getElementById("howMany")
const agree = document.getElementById("agree")
let didAgree = false
if (unscheduledForm) {
function writeUserData(event, fullName, email, phone, nickname, ticketnum) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    fullName: fullName,
    emailaddress: email,
    phonenumber : phone,
    nick:nickname,
    ticketnumber:ticketnum,
  });
}
    let paymentAmount = ((ticketNum.value)*11)+((ticketNum.value)*9)+((ticketNum.value)*7)
    e.preventDefault()
    rootRef.child(fullName.value).set({
        nickname: nickname.value,
        event: event.value,
        email: email.value,
        phoneNum: phone.value,
        numberOfTickets: ticketNum.value,
        cost: paymentAmount,
        didAgree: didAgree
    })
    paymentAmount = ((ticketNum.value)*11)+((ticketNum.value)*9)+((ticketNum.value)*7)
    console.log(paymentAmount+" kisses")
    alert("It will be "+paymentAmount+" kisses when it is time for this "+event.value+" event. We will email you and/or text you when it is scheduled!")
    location = "EventsList.html" 
})
}
