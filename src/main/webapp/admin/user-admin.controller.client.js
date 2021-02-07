(function () {
    /** test
    var createB = $(".wbdv-create")
    createB.click(function () {
        alert("Hahahahaha")
    })
     **/

    // var userService = new UserService();
    var rowTemplate;
    var tbody;
    var createUserBtn;

    /**
     *  use users to test
     * **/
    var users = [
        {username: "MoiraZ", password: "dfdsf",
            firstName: "yila", lastName: "Z", role: "student"}
    ]



    jQuery(main);

    function main() {
        rowTemplate = jQuery('.wbdv-template');
        createUserBtn = jQuery('.wbdv-create');
        // test
        // createUserBtn.click(function () {
        //     alert("Haha")
        // })

        tbody = jQuery('tbody');

        createUserBtn.click(createUser);

        userService
            .findAllUsers()
            .then(renderUsers)

        // var testuser = {username: "MoiraZ", password: "dfdsf",
        //     firstName: "yila", lastName: "Z", role: "student"}
        //
        // function testtt() {
        //     tbody.append(testuser)
        // }
        // testtt()
    }

    function createUser() {
        var usernameFld = $('#usernameFld');
        var passwordFld = '';

        var username = usernameFld.val();
        // alert(username)

        var password = 'boggus';

        var user = {
            username: username,
            password: password,
            firstName: ''
        }

        // tesstt
        users.push(user)
        renderUsers(users)

        // userService
        //     .createUser(user)
        //     .then(renderUsers)
    }

    function renderUsers(users) {
        tbody.empty()
        for(var i = 0; i < users.length; ++i) {
            const user = users[i]
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden');
            rowClone.find('.wbdv-username').html(user.username);
            tbody.append(rowClone);
        }
    }

})()
