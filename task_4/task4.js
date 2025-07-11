// Task 1
function register(name, email){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
if(name.trim() === "" || email.trim() === ""){
    reject("ERROR");
}
else{
    resolve("Success..Sending Confirmation Email");
}
    },4000)
})
}
function sendVerificationEmail(email) {
    console.log(`Verification email sent to: ${email}`);}

async function registeruser(){
try{
const registeration= await register("Youssef", "youssef.mena2002@gmail.com");
console.log(registeration);
sendVerificationEmail("youssef.mena2002@gmail.com");
}
catch(error){
    console.error(error);
}
try{
const registeration= await register(" ", "youssef.mena2002@gmail.com");
console.log(registeration);
}
catch(error){
    console.error(error);
}
}
registeruser();

// Task 2
function timeslot(slot){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        let arr=["b3","a1"];
      if (arr.includes(slot)){
        reject("Already Booked");
      }
      else{
        resolve("Available for booking");
      }
        },2000)
    })
}
async function availableOrNot(){
try{
const timeslotAvailability = await timeslot("a1");
console.log(timeslotAvailability);
}
catch(error){
    console.error(error);
}
try{
const timeslotAvailability2 = await timeslot("a2");
console.log(timeslotAvailability2);
}
catch(error){
    console.error(error);
}
}
availableOrNot();

//Task 3
function pinging(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const ping= Math.random();
        if(ping<0.3){
            resolve("Server Found");
        }
        else{
            reject("Failed Server");
        }
        },1000)
    })
}
async function pingingServer(){
    for(let i=1;i<=5;i++){
      try{
       const working= await pinging();
       console.log(`Try number ${i}...${working}`);
       return;
      }  
      catch(error){
      console.error(`Try number ${i}...${error}`);
      }
      if(i===5){
        console.log("Failed...Logging out now");
      }
    }
}

pingingServer();

//Task 4
function upload(filename){
    return new Promise ((resolve, reject)=>{
       if(filename.trim()===""){
            reject("File has no name");
        }
        else{
            console.log("Uploading File")
            setTimeout(()=>{
            resolve("Done Uploading");
            },6000)
        }
    })
}
async function uploading(){
    try{
    const good=await upload("NAME");
    console.log(good);
    const bad=await upload(" ");
    console.log(bad);
    }
    catch(error){
        console.error(error);
    }
}

uploading();

//Task 5
function product(id){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(id==1){
    resolve("Laptop");
}
else if(id==2){
    resolve("Phone");
}
else if(id==3){
    resolve("Tablet");
}
else{
    reject("Not Found");
}
},5000)
})
}
product(2).then(value=>{console.log(value);})
.catch(error=>console.error(error));

//Task 6
function shipping(weight){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let cost= weight*5;
          if(weight>0){
          resolve(`Weight valid...Cost equals ${cost}`);
          }
          else{
            reject("Weight is not valid");
          }
        },2000)
    })
}
shipping(5).then(value=>{console.log(value);})
.catch(error=>console.error(error));

//Task 7
function deleteAcc(confirm){
    return new Promise((resolve,reject)=>{
        if(confirm==="true"){
            setTimeout(()=>{
            resolve("Deleting your account");
            },3000)
        }
        else{
            reject("Account Deletion is rejected");
        }
    })
}
deleteAcc("true").then(value=>{console.log(value);})
.catch(error=>console.error(error));

//Task 8
function checkPass(password){
   return new Promise((resolve,reject)=>{
    console.log("Checking Password...");
    setTimeout(()=>{
    if(password.length>=6){
        resolve("Your Password is Strong");
    }
    else{
        reject("Your Password is Weak");
    }
    },5000)
   })
}
async function checking(){
    try{
        const checkPassword= await checkPass("tyhgids");
    console.log(checkPassword);
}
catch(error){
    console.error(error);
}
try{
        const checkPassword= await checkPass("edf");
    console.log(checkPassword);
}
catch(error){
    console.error(error);
}
try{
        const checkPassword= await checkPass("tyhgid");
    console.log(checkPassword);
}
catch(error){
    console.error(error);
}
}
checking();

//Task 9
async function getUserProfile(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error("User not found (HTTP " + response.status + ")");
        }
        const data = await response.json();
        console.log("Name:", data.name);
        console.log("Email:", data.email);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
getUserProfile(1);
getUserProfile(1000);

//Task 10
function listUserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            return response.json();
        })
        .then(posts => {
            posts.forEach(post => {
                console.log(post.title);
            });
        })
        .catch(error => {
            console.error(error.message);
        });
}
listUserPosts(1);
