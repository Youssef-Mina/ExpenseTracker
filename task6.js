//task1
class User{
    #email;
    #ID;
    constructor(name,email,ID){
        this.name=name;
        this.#email=email;
        this.#ID=ID;
    }
    set email(newEmail) {
        if (email.includes("@")) {
            this.#email = newEmail;
        } else {
            this.#email = "example@gmail.com";
            console.log("Invalid Email");
        }
    }

   getEmail(){
   return this.#email;
   }
   setId(newId){
    this.#ID=newId;
   }
   getID(){
    return this.#ID;
   }
}
class Admin extends User{
constructor(name,email,ID){
    super(name,email,ID);
    this.user=[];
}
addUser(user){
        this.users.push(user);
        console.log(`Admin ${this.name} added user ${user.name}`)
    }
    removeUser(userId){
        this.users=this.users.filter((user)=>{ return user.id != userId})
    }
performTask(){
    console.log("Admin Perform");
}
}
class Doctor extends User{
constructor(name,email,ID,specialty){
super(name,email,ID);
this.specialty=specialty;
this.patient=[];
this.disease=[];
}
savePatient(patient,disease){
        this.patient.push(patient);
        this.disease.push(disease);
        console.log(`Doctor ${this.name} saved patient ${this.patient} and has a disease of ${this.disease}`)
    }
    performTask(){
    console.log("Doctor Perform");
}
}
class Patient{
constructor(name,email,ID){
super(name,email,ID);
this.appointments = [];
}
bookAppointment(doctorName, date) {
    this.appointments.push({ doctorName, date });
    console.log(`Booked appointment with Dr. ${doctorName} on ${date}`);
  }
  viewAppointments() {
    console.log("Appointments:");
    this.appointments.forEach(app => {
      console.log(`- Dr. ${app.doctorName} on ${app.date}`);
    });
  }

performTask(){
    console.log("Patient Perform");
}
}

//Task2
class Member{
    #email;
    #ID;
    constructor(name,email,ID){
    this.name=name;
    this.#email=email;
    this.#ID=ID;
    }
    set email(newEmail) {
        if (email.includes("@")) {
            this.#email = newEmail;
        } else {
            this.#email = "example@gmail.com";
            console.log("Invalid Email");
        }
    }

   getEmail(){
   return this.#email;
   }
   setId(newId){
    this.#ID=newId;
   }
   getID(){
    return this.#ID;
   }
    performTask(){}
}
class Professor extends Member{
    constructor(name,email,ID,department){
    super(name,email,ID);
    this.department=department;
    this.courses=[];
    }
    addcourse(course){
        this.courses.push(course);
        console.log(`Proffesor ${this.name} added course ${this.course}`)
    }
performTask(){
    console.log("Professor Perform");
}
}
class Student extends Member{
constructor(name,email,ID,major){
    super(name,email,ID);
    this.major=major;
    this.enrolledcourses=[];
}
enroll(course) {
    this.enrolledCourses.push(course);
    console.log(`${this.name} enrolled in ${course}`);
  }

performTask(){
    console.log("Student Perform");
}
}
class Admin extends Member{
constructor(name,email,ID,){
    super(name,email,ID);
    this.members = [];
}
addMember(member) {
    this.members.push(member);
    console.log(`Added member: ${member.name}`);
  }

  removeMember(id) {
    const index = this.members.findIndex(m => m.getId() === id);
    if (index !== -1) {
      console.log(`Removed member: ${this.members[index].name}`);
      this.members.splice(index, 1);
    } else {
      console.log(`No member found with ID: ${id}`);
    }
  }

performTask(){
    console.log("Admin Perform");
}
}