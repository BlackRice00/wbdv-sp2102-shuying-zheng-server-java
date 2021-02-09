/***
 * 自己写的
 * ***/
var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $createBtn
var tbody

var users = [
    // {username: "Aaaa", password: "axxx", firstname: "aaa", lastname: "A", role: "STUDENT"},
    // {username: "Baaa", password: "bxxx", firstname: "aaa", lastname: "b", role: "STUDENT"},
    // {username: "Caaa", password: "cxxx", firstname: "aaa", lastname: "c", role: "STUDENT"},
    // {username: "Daaa", password: "cxxx", firstname: "aaa", lastname: "d", role: "STUDENT"}
]

function creating(user) {
    users.push(user)
    rendering(users)
}

function rendering(users) {
    tbody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        tbody.prepend(`tbody
.append('<tr class="wbdv-template wbdv-user wbdv-hidden">
              <td class="wbdv-username">${user.username}</td>
              <td>&nbsp;</td>
              <td class="wbdv-first-name">${user.firstname}</td>
              <td class="wbdv-last-name">${user.lastname}</td>
              <td class="wbdv-role">${user.role}</td>
              <td class="wbdv-actions">
                <span class="float-right">
                    <button class="wbdv-btn">
                        <i id="${i}" class="fa-2x fa fa-times wbdv-remove"></i>
                    </button>
                    <button class="wbdv-btn">
                        <i  id="${user._id}" class="fa-2x fa fa-pencil wbdv-select"></i>
                    </button>
                </span>
            </td>
            </tr>')`)
    }
    jQuery(".wbdv-remove")
        .click(function (event) {
            var removeBtn = jQuery(event.target)
            var theId = removeBtn.attr("id")
            users.splice(theId, 1)
            rendering(users)
    })
}


function main() {
    $usernameFld = $(".wbdv-usernameFld")
    $passwordFld = $(".wbdv-passwordFld")
    $firstNameFld = $(".wbdv-firstNameFld")
    $lastNameFld = $(".wbdv-lastNameFld")
    $roleFld = $(".wbdv-roleFld")

    $createBtn = jQuery(".wbdv-create")

    tbody = jQuery("tbody")

    $createBtn.click(function () {
        // creating({
        //     username: $usernameFld.val(),
        //     password: $passwordFld.val(),
        //     firstname: $firstNameFld.val(),
        //     lastname: $lastNameFld.val(),
        //     role: $roleFld.val()
        // })
        alert("Create a new user!")
        var newUser = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstname: $firstNameFld.val(),
            lastname: $lastNameFld.val(),
            role: $roleFld.val()
        }
        creating(newUser)
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
    })
}
jQuery(main)