const PromptAsync = require("prompt-sync");
const hash = require('hash.js');

const prompt = PromptAsync();


/* ----- Function For New Line ----- */
const newLine = () => {
    console.log("\n");
}

/* ----- Function For Main Instruction ----- */
const mainInstructions = () => {
    console.log("\n----- QUANTUMCARE CLINIC -----\n");
    console.log("Enter 1 to Register.");
    console.log("Enter 2 to Login.");
    console.log("Enter 3 to Exit.\n");

    let key = prompt("Enter : ");
    return key;
}

/* ----- Array To Store Patient Informations ----- */
let patientInfo = [];
let patientIndex = 0;

/* ----- Function To Store Patient Informations ----- */
const patientInformations = () => {

    patientInfo[patientIndex] = {
        name: null,
        userName: null,
        gender: null,
        age: null,
        contact: null,
        password: null
    }
}

/* ----- Function To Register ----- */
const getRegister = () => {

    let userNameIndex = -1;
    patientInformations();

    console.log("\n----- Enter Your Registration Informations -----");
    let nameOfPatient = prompt("Enter Your Name : ");
    let userNameOfPatient = prompt("Enter Unique UserName : ");
    let genderOfPatient = prompt("Enter Your Gender : ");
    let ageOfPatient = prompt("Enter Your Age : ");
    let contactOfPatient = prompt("Enter Your Contact Number : ");
    let passwordOfPatient = prompt("Enter Your Password : ");

    for (let i = 0; i < patientInfo.length; i++) {
        if (userNameOfPatient === patientInfo[i].userName) {
            userNameIndex = i;
            break;
        }
    }

    if (userNameIndex === -1) {
        patientInfo[patientIndex].name = nameOfPatient;
        patientInfo[patientIndex].userName = userNameOfPatient;
        patientInfo[patientIndex].gender = genderOfPatient;
        patientInfo[patientIndex].age = ageOfPatient;
        patientInfo[patientIndex].contact = contactOfPatient;
        patientInfo[patientIndex].password = passwordOfPatient;
        patientInfo[patientIndex].password = hash.sha256().update(patientInfo[patientIndex].password).digest('hex');
        console.log("\nCongratulations, You Have Successfully Registered..!\n");
    }
    else {
        console.log("\nSorry..! UserName Already Exist.");
    }
    patientIndex++;
}

/* ----- Function For Taking Login Input ----- */
const logInInput = () => {
    console.log("\n----- Enter Your Login Informations -----");
    yourUserName = prompt("Enter Your UserName : ");
    yourPass = prompt("Enter Your Password : ");
    yourPass = hash.sha256().update(yourPass).digest('hex');
    newLine();
}

/* ----- Function To Checking Login Info Correct Or Not ----- */
const checkLoginInfo = () => {

    userIndex = -1;

    for (let i = 0; i < patientIndex; i++) {
        if (yourUserName === patientInfo[i].userName && yourPass === patientInfo[i].password) {
            userIndex = i;
            break;
        }
    }
    return userIndex;
}

/* ----- Function To Display Profile ----- */
const profile = (name, userName, gender, age, contact) => {
    console.log("\n----- Patient Profile -----");
    console.log("UserName :", userName);
    console.log("Name :", name);
    console.log("Gender :", gender);
    console.log("Age :", age);
    console.log("Contact :", contact);
}

/* ----- Function For Main Menu ----- */
const mainMenu = () => {
    console.log("\n----- Main Menu -----");
    console.log("Enter 1 To View Available Doctors");
    console.log("Enter 2 To Check Doctor Schedules");
    console.log("Enter 3 To Book An Appointment");
    console.log("Enter 4 To View Booked Appointments");
    console.log("Enter 5 For Log Out\n");

    let key = prompt("Enter: ");
    return key;
}

/* ----- Object Of Doctors Info ----- */
const doctors = {
    LKS197: {
        name: "Dr.Lal Krishna Sinha",
        specialty: "Neurologist",
        schedule: ["09:00AM - 10:30AM", "10:30AM - 12:00PM", "12:00PM - 01:30PM", "03:00PM - 04:30PM"],
        appointments: []
    },
    SR750: {
        name: "Dr.Soumen Roy",
        specialty: "Cardiologists",
        schedule: ["11:00AM - 12:30PM", "02:00PM - 03:30PM", "03:30PM - 05:00PM", "04:30PM - 05:30PM"],
        appointments: []
    },
    SK034: {
        name: "Dr.Shipra Khanra",
        specialty: "Surgeon",
        schedule: ["9:00AM - 11:00AM", "11:30AM - 01:30PM", "03:00PM - 05:00PM", "05:30PM - 07:30PM"],
        appointments: []
    },
    AS101: {
        name: "Dr.Abhik Singha",
        specialty: "Orphthalmologist",
        schedule: ["09:00AM - 10:30AM", "10:30AM - 12:00PM", "01:30PM - 03:00PM", "03:00PM - 04:30PM"],
        appointments: []
    },
    SR152: {
        name: "Dr.Shamir Rizawi",
        specialty: "Radiologist",
        schedule: ["10:00AM - 11:00AM", "11:00AM - 12:00PM", "12:00PM - 01:00PM", "02:30PM - 03:30PM", "03:30PM - 04:30PM", "04:30PM - 05:30PM"],
        appointments: []
    },
    FK107: {
        name: "Dr.Farhana Khatun",
        specialty: "Dermatology",
        schedule: ["11:00AM - 12:00PM", "12:00PM - 01:00PM", "02:30PM - 03:30PM", "03:30PM - 04:30PM", "04:30PM - 05:30PM"],
        appointments: []
    },
    SSS305: {
        name: "Dr.Suhana Sam Sam",
        specialty: "General Physician",
        schedule: ["09:00AM - 10:00AM", "10:00AM - 11:00AM", "11:00AM - 12:00PM", "12:00PM - 01:00PM", "02:30PM - 03:30PM", "03:30PM - 04:30PM", "04:30PM - 05:30PM", "05:30PM - 06:30PM"],
        appointments: []
    }
}

/* ----- Function To view Available Doctors ----- */
const availableDoctors = () => {
    console.log('\n----- Available Doctors -----');
    Object.keys(doctors).forEach((docId) => {
        const doctor = doctors[docId];
        console.log(`   [ID: ${docId}] => ${doctor.name} ( ${doctor.specialty} )`);
    });
}

/* ----- Function To Check Doctor Schedules ----- */
const doctorSchedules = () => {
    console.log("\n----- Check Doctor Schedules -----");
    availableDoctors();
    newLine();
    const doctorId = prompt("Enter Doctor ID: ");

    if (doctors[doctorId]) {
        console.log(`\n----- Schedule For ${doctors[doctorId].name} (${doctors[doctorId].specialty}) -----`);
        doctors[doctorId].schedule.forEach((timeSlot) => {
            if (!doctors[doctorId].appointments.includes(timeSlot)) {
                console.log(`      =>          ${timeSlot}`);
            }
        });
    } else {
        console.log("\nInvalid Doctor ID. Please Try Again..!");
    }
}

/* ----- Array To Store User Appointments ----- */
let userAppoints = [];
let appointIndex = 0;

/* ----- Function To Store User Appointments ----- */
const userAppointments = () => {

    userAppoints[appointIndex] = {
        appointUser: null,
        appointDoctor: null,
        appointDocSpeciality: null,
        appointTimeSlot: null
    }
}

/* ----- Function To Book An Appointment ----- */
function bookAppointment() {

    let bookAppointmentIndex = -1;
    userAppointments();
    for (let i = 0; i < userAppoints.length; i++) {
        if (patientInfo[userIndex].userName === userAppoints[i].appointUser) {
            bookAppointmentIndex = i;
            break;
        }
    }
    if (bookAppointmentIndex === -1) {

        availableDoctors();
        console.log("\n----- Book An Appointment -----\n");
        const doctorId = prompt("Enter Doctor ID: ");

        if (doctors[doctorId]) {
            console.log(`\n----- Available Time Slots For ${doctors[doctorId].name} (${doctors[doctorId].specialty}) -----`);
            doctors[doctorId].schedule.forEach((timeSlot) => {
                if (!doctors[doctorId].appointments.includes(timeSlot)) {
                    console.log(`                ${timeSlot}`);
                }
            });
            newLine();

            const selectSlot = prompt("Select A Time Slot: ");

            if (doctors[doctorId].schedule.includes(selectSlot) && !doctors[doctorId].appointments.includes(selectSlot)) {
                doctors[doctorId].appointments.push(selectSlot);

                let appointUserOfPatient = patientInfo[userIndex].name;
                let appointDoctorOfPatient = doctors[doctorId].name;
                let appointDocSpecialityOfPatient = doctors[doctorId].specialty;
                let appointTimeSlotOfPatient = selectSlot;

                userAppoints[appointIndex].appointUser = appointUserOfPatient;
                userAppoints[appointIndex].appointDoctor = appointDoctorOfPatient;
                userAppoints[appointIndex].appointDocSpeciality = appointDocSpecialityOfPatient;
                userAppoints[appointIndex].appointTimeSlot = appointTimeSlotOfPatient;

                appointIndex++;

                console.log(`\nYour Appointment Is Booked With ${doctors[doctorId].name} ( ${doctors[doctorId].specialty} ) At ${selectSlot}`);
            } else {
                console.log("\nInvalid Time Slot Or Already Booked. Choose Another Time Slot..!");
            }
        } else {
            console.log("\nInvalid Doctor ID. Please Try Again..!");
        }
    }
    else {
        console.log("\nSorry..! You Have Already Booked An Appointment.");
    }
}

/* ----- Function To View Booked Appointments ----- */
function viewBookedAppointment() {

    let bookedIndex = -1;

    for (let i = 0; i < userAppoints.length; i++) {
        if (patientInfo[userIndex].name === userAppoints[i].appointUser) {
            bookedIndex = i;
            break;
        }
    }
    if (bookedIndex !== -1) {
        console.log('\n----- Booked Appointments -----');
        console.log(`Patient: ${userAppoints[bookedIndex].appointUser}`);
        console.log(`Doctor: ${userAppoints[bookedIndex].appointDoctor} ( ${userAppoints[bookedIndex].appointDocSpeciality} )`);
        console.log(`Time Slot: ${userAppoints[bookedIndex].appointTimeSlot}`);
    }
    else {
        console.log("\nSorry..! You Haven't Booked An Appointment Yet.");
    }
}


/* ----- Main Function Starts ----- */
function main() {

    mainLoop: while (true) {

        let firstKey = mainInstructions();

        switch (firstKey) {
            case "1":
                getRegister();
                break;

            case "2":

                if (patientIndex === 0) {
                    console.log("You Haven't Registered Yet, Sorry..!");
                    continue mainLoop;
                }

                while (true) {
                    logInInput();
                    checkLoginInfo();

                    if (userIndex !== -1) {
                        console.log(`Welcome Again ${patientInfo[userIndex].name}..!`);

                        profile(patientInfo[userIndex].name, patientInfo[userIndex].userName, patientInfo[userIndex].gender, patientInfo[userIndex].age, patientInfo[userIndex].contact);

                        while (true) {
                            let secondKey = mainMenu();

                            switch (secondKey) {
                                case "1":
                                    availableDoctors();
                                    break;

                                case "2":
                                    doctorSchedules();
                                    break;

                                case "3":
                                    bookAppointment();
                                    break;

                                case "4":
                                    viewBookedAppointment();
                                    break;

                                case "5":
                                    console.log("\nYou Have Sucessfully Log Out..!");
                                    continue mainLoop;

                                default:
                                    console.log("\nInvalid Choice. Please Try Again..!");
                                    break;
                            }
                        }
                    }
                    else {
                        console.log("Invalid UserName Or PassWord..!");
                    }
                }

            case "3":
                console.log("You Are Exiting.....");
                setTimeout(() => {
                    console.log("You Are Exited.");
                }, 2000);
                break mainLoop;

            default:
                console.log("\nInvalid Choice. Please Try Again..!");
                continue mainLoop;
        }
    }
}

/* ----- Calling Main Function ----- */
main();