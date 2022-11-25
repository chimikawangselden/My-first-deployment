const form = document.querySelector("#helpForm")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isSupervisorValid = checkSupervisor(),
        isEndValid = checkEndDate()
    if (isSupervisorValid && isStartValid && isEndValid) {
        location.reload()
    }

})
console.log("test")

function checkSupervisor() {
    let valid = true;
    const supervisor = document.querySelector("#Service")
    const value = document.querySelector("#Service").value.trim()
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
    const endDate = document.querySelector("#description")
    const value = endDate.value.trim()
    if (value == "") {
        const parent = endDate.parentElement;
        endDate.classList.add("error-input")
        parent.lastElementChild.classList.remove("hide")
        valid = false;
    }
    return valid

}

