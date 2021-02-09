var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $createBtn
var tbody
var userService = new AdminUserServiceClient()
var users = []

function createUser(user) {
    users.push(user)
    render(users)
}

function deleteUser(event) {
    var removeBtn = jQuery(event.target)
    var index = removeBtn.attr("id")
    var id = users[index]._id
    userService.deleteUser(id)
        .then(function (status) {
            users.splice(index, 1)
            render(users)
        })
}

function render(users) {
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
        .click(deleteUser)
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
        alert("Create a new user!")
        var newUser = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstname: $firstNameFld.val(),
            lastname: $lastNameFld.val(),
            role: $roleFld.val()
        }
        createUser(newUser)
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
    })

    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            render(users)
        })
}
jQuery(main)