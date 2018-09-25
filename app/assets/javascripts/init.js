$("#kiazma-link").on("click keyup", function (e) {
    if (e.type == "click") {
        console.log("h");
        document.getElementById('two').scrollIntoView({behavior: "smooth"})
    }
});
