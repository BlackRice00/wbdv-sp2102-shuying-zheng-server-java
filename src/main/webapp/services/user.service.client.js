function UserService() {

    this.findAllUsers = findAllUsers
    this.createUser = createUser

    // POST - Create
    function createUser(user) {
        return fetch('http://users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json()
        })
    }

    // GET - Read
    function findAllUsers() {
        return fetch('http://users')
            .then(function(response){
                return response.json()
            })
    }
}
