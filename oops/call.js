function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  //call toh jaa rhi hai  but save nhi ho rha reference iske liye use call
   //this  pass krna ki call function ko apna this dena then you can use that function methdos properties
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);