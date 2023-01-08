import { useState } from "react";
import toast from 'react-hot-toast';

export  const useFetchEnquiry = () =>{
const [course, setcourse] = useState("");
const [fullName, setfullName] = useState("");
const [contactNum, setcontactNum] = useState("");
const [Email, setEmail] = useState("");
const [Gender, setGender] = useState("");
const [Qualification, setQualification] = useState("");
const [Occupation, setOccupation] = useState("");
const [dateOfBirth, setdateOfBirth] = useState("");
const [queAndSug, setqueAndSug] = useState("");
const enquiryDataHandler =()=>{
    console.log(
        "CourseName = ",course,
        "FullName = ",fullName,
        "ContactNumber = ",contactNum,
        "Email = ",Email,
        "Gender = ",Gender,
        "Qualification = ",Qualification,
        "Occupation = ",Occupation,
        "Date of Birth = ",dateOfBirth,
        "questions = ",queAndSug
    );
    if(course === ""){
        toast.error("Hi there visitor Please make sure to fill out all the fields so that we can guide you better");
    }
    else if(fullName === ""){
        toast.error("Hi there visitor Please make sure to fill out all the fields so that we can guide you better");
    }
    else if(contactNum === "" && contactNum.length > 11) {
        toast.error("Hi there visitor Please make sure to fill out all the fields so that we can guide you better");
    }
    else if(Email === ""){
        toast.error("Hi there visitor Please make sure to fill out all the fields so that we can guide you better");
    }

    else{
    toast.success(`Hi there ${fullName} Your Query has been noted you will be contacted by our team shortly`);
    setcourse("");
    setfullName("");
    setcontactNum("");
    setEmail("");
    setGender("");
    setQualification("");
    setOccupation("");
    setdateOfBirth("");
    setqueAndSug("");
    }
    
   
}

return{
    enquiryDataHandler,
    setcourse,
    setfullName,
    setcontactNum,
    setEmail,
    setGender,
    setQualification,
    setOccupation,
    setdateOfBirth,
    setqueAndSug,
}

}