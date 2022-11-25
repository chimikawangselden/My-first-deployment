const form = document.querySelector("#promotionForm")

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
    const supervisor = document.querySelector("#position")
    const value = document.querySelector("#position").value.trim()
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
    const endDate = document.querySelector("#position-title")
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
    const startDate = document.querySelector("#position-level")
    const value = startDate.value.trim()
    if (value == "") {
        const parent = startDate.parentElement;
        startDate.classList.add("error-input")
        parent.lastElementChild.classList.remove("hide")
        valid = false;
    }
    return valid
}

