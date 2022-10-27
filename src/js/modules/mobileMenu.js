module.exports = () => {
    const trigger = document.getElementById("hamburger");
    let isClosed = true;

    trigger.addEventListener("click", ()=>{
        if (isClosed == true) {
            trigger.classList.remove("is-open");
            trigger.classList.add("is-closed");
            isClosed = false;
        } else {
            trigger.classList.remove("is-closed");
            trigger.classList.add("is-open");
            isClosed = true;
        }
    });
};