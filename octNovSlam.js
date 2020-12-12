const fullName = document.getElementById("octNovName")
const event = document.getElementById("octNovEvent")
const email = document.getElementById("octNovEmailAddress")
const phone = document.getElementById("octNovPhoneNum")
const submitButton = document.getElementById("octNovSubmitBtn")
const nickname = document.getElementById("octNovNickname")
const schoolProectForm = document.getElementById("octNovPoemForm")
const database = firebase.database();
const rootRef = database.ref('October/November Poem Slam');
const ticketNum = document.getElementById("octNovHowMany")
const agree = document.getElementById("octNovAgree")
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
    paymentAmount = ((ticketNum.value)*11)+((ticketNum.value)*9)+((ticketNum.value)*8)
    console.log(paymentAmount+" kisses")
    alert("It will be "+paymentAmount+" kisses when it is time for this "+event.value+" event. We will email you and/or text you when it is scheduled!")
    location = "EventsList.html" 
})
}