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
        if (pseudo2 == "" || pseudo2.length < 4) {
            alert("pseudo incomplet")
        } else if (email2 == "") {
            alert("email incomplet")
        } else if ((mdp2 == "" || mdp2.length < 8) && mdp2 == validmdp) {
            alert("mdp incomplet")
        } else {
            alert("good days")
            let PseudoExist = false
            let EmailExist = false

            let x
            for (x in locallogin.users) {
                var actualuser = locallogin.users[x]
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

    $("#LoginForm").submit((event) => {
        event.preventDefault()
        let PseudoExist2 = true
        let EmailExist2 = true
        let MdpExist2 = true

        let y
        for (y in locallogin.users) {
            var actualuser2 = locallogin.users[y]
            if (actualuser2.pseudo == pseudo) {
                PseudoExist2 = false
                alert("pseudo dont exist")
                break;
            }
            if (actualuser2.email == pseudo) {
                EmailExist2 = false
                alert("email dont exist")
                break;
            }
            if (actualuser2.mdp == mdp) {
                MdpExist2 = false
                alert("Mdp dont exist")
                break;
            }
        }

        if (PseudoExist2 == true && EmailExist2 == true && MdpExist2 == true) {
            var id = id
            var autoconnect = {
                connect: true
                id: id
            }
            locallogin.user.push(autoconnect)
            sessionStorage.setItem("user", JSON.stringify(locallogin))
        }
        $("#pseudo").val("")
        $("#mdp").val("")
    })


})