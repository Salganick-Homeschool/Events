const fullName = document.getElementById("schoolFullName")
const event = document.getElementById("schoolEvent")
const email = document.getElementById("schoolEmailAddress")
const phone = document.getElementById("schoolPhoneNum")
const submitButton = document.getElementById("schoolSubmitBtn")
const nickname = document.getElementById("schoolNickname")
const schoolProectForm = document.getElementById("schoolProjectForm")
const database = firebase.database();
const rootRef = database.ref('Gaby School Projects');
const ticketNum = document.getElementById("schoolHowMany")
const agree = document.getElementById("schoolAgree")
let didAgree = false
if (schoolProectForm) {
schoolProectForm.addEventListener("submit", (e) => {
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
        cost: paymentAmount+" kisses",
        didAgree: didAgree
    })
    paymentAmount = ((ticketNum.value)*11)+((ticketNum.value)*9)+((ticketNum.value)*7)
    console.log(paymentAmount+" kisses")
    alert("It will be "+paymentAmount+" kisses when it is time for this "+event.value+" event. We will email you and/or text you when it is scheduled!")
    location = "EventsList.html" 
})
}