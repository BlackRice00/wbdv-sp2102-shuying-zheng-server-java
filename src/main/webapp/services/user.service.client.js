// function UserService() {
//
//     this.findAllUsers = findAllUsers
//     this.createUser = createUser
//
//     // POST - Create
//     function createUser(user) {
//         return fetch('http://users', {
//             method: 'POST',
//             body: JSON.stringify(user),
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }).then(function(response){
//             return response.json()
//         })
//     }
//
//     // GET - Read
//     function findAllUsers() {
//         return fetch('http://users')
//             .then(function(response){
//                 return response.json()
//             })
//     }
// }


function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/zheng.shuyi/users';
    var self = this;
    function createUser(user) {

    }

    function findAllUsers() {

    }
    function findUserById(userId) {

    }
    function updateUser(userId, user) {

    }
    function deleteUser(userId) {

    }
}

