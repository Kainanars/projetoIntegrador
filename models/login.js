const users = [{
    login: 'admin',
    password: 'admin123'
}, {
    login: 'manager',
    password: 'manager123'
}]

function authenticateUser(login, password) {
    const user = users.find(function(user) {
        return user.login === login && user.password === password;
    });
    return user
}

module.exports = {
    authenticateUser: authenticateUser,
}