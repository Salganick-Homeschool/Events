const event = document.getElementById("event")
const fullName = document.getElementById("fullName")
const email = document.getElementById("emailAddress")
const phone = document.getElementById("phoneNum")
const submitButton = document.getElementById("submitBtn")
const nickname = document.getElementById("nickname")
const form = document.getElementById("unscheduledForm")
const database = firebase.database();
const rootRef = database.ref('recipients');

form.addEventListener("submit", (e) => {
    e.preventDefault()
    rootRef.child(fullName.value).set({
        nickname: nickname.value,
        event: event.value,
        email: email.value,
        phoneNum: phone.value,

    })
   location = "EventsList.html" 
})