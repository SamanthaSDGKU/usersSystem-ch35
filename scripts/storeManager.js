function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);// obj into string
    console.log(val);  //this is an string
    localStorage.setItem("users",val);// this fn sends elements to localStorage
}

function readUsers(){
    let users = localStorage.getItem("users");//this fn get elements from localStorage
    console.log(users);//this is an string
    if(!users){//NOT users?
        //here the LS is empty
        return [];//creating the array
    }else{
        //if you get here the LS has users
        let listUsers = JSON.parse(users)//parse back into an array
        console.log(listUsers); // this is an array
        return listUsers;
    }
}