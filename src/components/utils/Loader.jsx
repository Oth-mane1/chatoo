function showLoader() {
    document.body.classList.add("overflow-hidden")
    let loader = document.getElementById("loader-container");
    loader.classList.add("inLoading");
    loader.classList.remove("outLoading");
    loader.style.display = "flex";
}

function hideLoader() {
    let loader = document.getElementById("loader-container");
    loader.classList.remove("inLoading");
    loader.classList.add("outLoading");
    setTimeout(() => {
        loader.style.display = "none";
        setTimeout(() => {
            document.body.classList.remove("overflow-hidden")
            loader.classList.remove("outLoading");
        }, 111);
    }, 555);

}

export { showLoader, hideLoader }