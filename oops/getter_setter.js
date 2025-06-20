class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){ //getter and setter both needed to use it further
        return this._email.toUpperCase()
    }//_email we used because constructor and getter setter both try to set toh error show 
    //so we create new instance
    set email(value){
        this._email = value
    }

    get password(){//return needed ya toh emoty bhej do
        return `${this._password}hitesh`
    }

    set password(value){//there is no need to use return
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);


//funtion ka use krke bhi bna skte hai there we use defineproperty to set getter and setter