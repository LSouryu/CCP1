$(window).ready(() => {

    var locallogin
    var sessionlogin
    var pseudo = $("#pseudo").val()
    var pseudo2 = $("#pseudo2").val()
    var email2 = $("#e-mail2").val()
    var mdp = $("#mdp").val()
    var mdp2 = $("#mdp2").val()
    var validmdp = $("#vald-mdp2").val()

    if (!localStorage.getItem("users")) {
        locallogin = {
            users: []
        }
    } else {
        locallogin = JSON.parse(localStorage.getItem("users"))
    }

    if (!sessionStorage.getItem("user")) {
        sessionlogin = {
            user: []
        }
    } else {
        sessionlogin = JSON.parse(sessionStorage.getItem("user"))
    }

    function displayRegist() {
        $("#Connection").hide()
        $("#Inscription").show()
    }

    function displayLog() {
        $("#Inscription").hide()
        $("#Connection").show()
    }

    function displayPage() {
        $("#Inscription").hide()
        $("#Connection").hide()
        $("#page-principal").show()

    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    $("#Ins").click((event) => {
            event.preventDefault()
            displayRegist()
        }
    )

    $("#Con").click((event) => {
            event.preventDefault()
            displayLog()
        }
    )

    $("#RegisterForm").submit((event) => {
        event.preventDefault()
        if (pseudo2 === "" || pseudo2.length < 4) {
            alert ("pseudo incomplet")
        } else if (email2 == "") {
            alert ("email incomplet")
        } else if ((mdp2 == "" || mdp2.length < 8) && mdp2 == validmdp){
            alert ("mdp incomplet")
        } else {
            alert("good days")
            let PseudoExist = false
            let EmailExist = false

            let x
            for (x in locallogin.users) {
                var actualuser =locallogin.users[x]
                if (actualuser.pseudo == pseudo2) {
                    PseudoExist = true
                    alert("pseudo already exist")
                    break;
                }
                if (actualuser.email == email2) {
                    EmailExist = true
                    alert("email already exist")
                    break;
                }
            }

            if (PseudoExist == false && EmailExist == false) {
                var NewUser = {
                    id: uuidv4(),
                    pseudo: pseudo2,
                    email: email2,
                    mdp: mdp2
                }
                locallogin.users.push(NewUser)
                localStorage.setItem("users", JSON.stringify(locallogin))
            }
            $("#pseudo2").val("")
            $("#e-mail2").val("")
            $("#mdp2").val("")
            $("#vald-mdp2").val("")
            displayLog()
        }

    })

})