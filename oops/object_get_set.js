const User = {//object
    _email: 'h@hc.com', //after private by using underscore currently using # for private
    _password: "abc",
  
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);// value set and get