const event = document.getElementById("event")
const fullName = document.getElementById("fullName")
const email = document.getElementById("emailAddress")
const phone = document.getElementById("phoneNum")
const submitButton = document.getElementById("submitBtn")
const nickname = document.getElementById("nickname")
const form = document.getElementById("unscheduledForm")
const database = firebase.database();
const rootRef = database.ref('recipients');
const ticketNum = document.getElementById("howMany")
let paymentAmount = ((ticketNum.value)*11)+((ticketNum.value)*9)+((ticketNum.value)*7)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    rootRef.child(fullName.value).set({
        nickname: nickname.value,
        event: event.value,
        email: email.value,
        phoneNum: phone.value,
        numberOfTickets: ticketNum.value,
        cost: paymentAmount
    })
    paymentAmount = ((ticketNum.value)*11)+((ticketNum.value)*9)+((ticketNum.value)*7)
    console.log(paymentAmount+" kisses")
    alert("It will be "+paymentAmount+" kisses when it is time for this "+event.value+". We will email you and/or text you when it is scheduled!")
    location = "EventsList.html" 
})
