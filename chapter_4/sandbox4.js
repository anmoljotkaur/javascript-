//objects in javascript have properties and things they can do (methods)
//for example: blog object properties (title, content, author)
//methods (publish, unpublish, delete)

let user = {
    name: 'anmol',
    age: 23,
    email: 'anmol@123',
    location: 'winnipeg',
    blogs: ['why mac and cheese rules', '10 things to make with mermite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    }

};

user.login();
user.logout();

const name = 'mario';
name.toUpperCase();
// console.log(user);
// console.log(user.name);

// user.age = 24;
// console.log(user.age);

// console.log(user['name']);
// user['name'] = 'ANU';
// console.log(user.name);

