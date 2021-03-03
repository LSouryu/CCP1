$(window).ready(function () {

    $("#con").click(function (event) {
        event.preventDefault()
        $("#Inscription").hide()
        $("#Connection").show()

        }
    )

    $("#Ins").click(function (event) {
            event.preventDefault()
            $("#Connection").hide()
            $("#Inscription").show()

        }
    )

})