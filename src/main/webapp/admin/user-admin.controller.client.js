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
    userService.createUser(user)
        .then(function (actualUser) {
            users.push(actualUser)
            renderUsers(users)
        })
}

function deleteUser(event) {
    var removeBtn = jQuery(event.target)
    var theIndex = removeBtn.attr("id")
    var theId = users[theIndex]._id
    userService.deleteUser(theId)
        .then(function (status) {
            users.splice(theIndex, 1)
            renderUsers(users)
        })
}

var selectedUser
function selectUser(event) {
    var selectBtn = jQuery(event.target)
    var theId = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === theId)
    $usernameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstname)
    $lastNameFld.val(selectedUser.lastname)
    $roleFld.val(selectedUser.role)
}

function updateUser() {
    selectedUser.username = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstname = $firstNameFld.val()
    selectedUser.lasttname = $lastNameFld.val()
    selectedUser.role = $roleFld.val()

    userService.updateUser(selectedUser._id, selectedUser)
        .then(status => {
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })

    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
}

function renderUsers(users) {
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
    jQuery(".wbdv-select")
        .click(selectUser)
}


function main() {
    $usernameFld = $(".wbdv-usernameFld")
    $passwordFld = $(".wbdv-passwordFld")
    $firstNameFld = $(".wbdv-firstNameFld")
    $lastNameFld = $(".wbdv-lastNameFld")
    $roleFld = $(".wbdv-roleFld")

    $createBtn = jQuery(".wbdv-create")
    $updateBtn = jQuery(".wbdv-update")

    tbody = jQuery("tbody")

    $createBtn.click(function () {
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

    $updateBtn.click(updateUser)

    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        })
}
jQuery(main)