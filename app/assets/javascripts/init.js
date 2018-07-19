$("#link").on("click keyup", function (e) {
    if (e.type == "click") {
        document.getElementById('two').scrollIntoView({behavior: "smooth"})
    }
});
