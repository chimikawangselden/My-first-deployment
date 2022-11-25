const form = document.querySelector("#leaveForm")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isSupervisorValid = checkSupervisor(),
        isStartValid = checkStartDate(),
        isEndValid = checkEndDate()
    if (isSupervisorValid && isStartValid && isEndValid) {
        location.reload()
    }

})
console.log("test")

function checkSupervisor() {
    let valid = true;
    const supervisor = document.querySelector("#super-name")
    const value = document.querySelector("#super-name").value.trim()
    if (value == "") {
        const parent = supervisor.parentElement;
        supervisor.classList.add("error-input")
        parent.lastElementChild.classList.remove("hide")
        valid = false;
    }
    return valid
}
function checkEndDate() {
    let valid = true;
    const endDate = document.querySelector("#endDate")
    const value = endDate.value.trim()
    if (value == "") {
        const parent = endDate.parentElement;
        endDate.classList.add("error-input")
        parent.lastElementChild.classList.remove("hide")
        valid = false;
    }
    return valid

}

function checkStartDate() {
    let valid = true;
    const startDate = document.querySelector("#startDate")
    const value = startDate.value.trim()
    if (value == "") {
        const parent = startDate.parentElement;
        startDate.classList.add("error-input")
        parent.lastElementChild.classList.remove("hide")
        valid = false;
    }
    return valid
}

