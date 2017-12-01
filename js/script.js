document.addEventListener("DOMContentLoaded", function() {

    AFRAME.registerComponent("click-event", {
        init: function() {
            var el = this.el;
            el.addEventListener("click", function() {
                handleClickEvent(el);
            });
        }
    });

    function handleClickEvent(element) {
        if (element.id === "eBox") {
            window.open("https://www.embriq.no/", "_self");
        } else if (element.id === "githubImage") {
            window.open("https://github.com/larwef", "_self");
        } else if (element.id === "linkedinImage") {
            window.open("http://wefald.no", "_self");
        }
    }
});
