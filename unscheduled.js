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
unscheduledForm.addEventListener("submit", (e) => {
    if (agree) {
        didAgree=true
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