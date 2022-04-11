$(() => {
    $(".openmodal").click(() => {
        $(".modal").toggleClass("active")
        $(".openmodal").toggleClass("close")
        $("header").toggleClass("active")
    })
})