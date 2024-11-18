import React, { useState } from "react";
import style from "../css/homepage.module.css";

function HomePage(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [age, setAge] = useState();
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("male");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [id, setId] = useState("");
    const [dob, setDob] = useState("");
    const [institution, setInstitution] = useState("");
    const [grade, setGrade] = useState("");
    const [parentName, setParentName] = useState("");
    const [emergencyContact, setEmergencyContact] = useState("");
    const [examCenter, setExamCenter] = useState("");
    const [language, setLanguage] = useState("english");
    const [experience, setExperience] = useState("");
    const [notes, setNotes] = useState("");

 function submit(e){
    if (!gender || !language) {
        alert("Please fill in all required fields.");
        return;
    }
    e.preventDefault();
    console.log("hello");
    console.log(name);
    fetch("http://localhost:1000/submit",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            age,
            phone,
            gender,
            address,
            city,
            state,
            country,
            zip,
            id,
            dob,
            institution,
            grade,
            parentName,
            emergencyContact,
            examCenter,
            language,
            experience,
            notes,
        }),
    }).then(res=>res.json()).then((data)=>{
        console.log('Success');
    }).catch((err)=>{
        console.log(err);
    });
 }
    return (
        <div className={style.body}>
            <div className={style.formContainer}>
                <h1>Exam Registration Form</h1>
                <form>
                    <div className={style.formRow}>
                        <label className={style.label} htmlFor="name">Name:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label className={style.label} htmlFor="email">Email:</label>
                        <input
                            className={style.input}
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label className={style.label} htmlFor="subject">Subject:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="subject"
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />

                        <label className={style.label} htmlFor="exam-date">Exam Date:</label>
                        <input
                            className={style.input}
                            type="date"
                            id="exam-date"
                            name="exam-date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />

                        <label className={style.label} htmlFor="age">Age:</label>
                        <input
                            className={style.input}
                            type="number"
                            id="age"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />

                        <label className={style.label} htmlFor="phone">Phone Number:</label>
                        <input
                            className={style.input}
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <label className={style.label} htmlFor="gender">Gender:</label>
                        <select
                            className={style.input}
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                        <label className={style.label} htmlFor="address">Address:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <label className={style.label} htmlFor="city">City:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />

                        <label className={style.label} htmlFor="state">State:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="state"
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />

                        <label className={style.label} htmlFor="country">Country:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="country"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />

                        <label className={style.label} htmlFor="zip">ZIP Code:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="zip"
                            name="zip"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />

                        <label className={style.label} htmlFor="id-number">ID Number:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="id-number"
                            name="id-number"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />

                        <label className={style.label} htmlFor="institution">Institution Name:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="institution"
                            name="institution"
                            value={institution}
                            onChange={(e) => setInstitution(e.target.value)}
                        />

                        <label className={style.label} htmlFor="grade">Grade/Year:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="grade"
                            name="grade"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                        />

                        <label className={style.label} htmlFor="parent-name">Parent/Guardian Name:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="parent-name"
                            name="parent-name"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                        />

                        <label className={style.label} htmlFor="emergency-contact">Emergency Contact:</label>
                        <input
                            className={style.input}
                            type="tel"
                            id="emergency-contact"
                            name="emergency-contact"
                            value={emergencyContact}
                            onChange={(e) => setEmergencyContact(e.target.value)}
                        />

                        <label className={style.label} htmlFor="exam-center">Preferred Exam Center:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="exam-center"
                            name="exam-center"
                            value={examCenter}
                            onChange={(e) => setExamCenter(e.target.value)}
                        />

                        <label className={style.label} htmlFor="language">Language Preference:</label>
                        <select
                            className={style.input}
                            id="language"
                            name="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="other">Other</option>
                        </select>

                        <label className={style.label} htmlFor="experience">Prior Experience:</label>
                        <input
                            className={style.input}
                            type="text"
                            id="experience"
                            name="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />

                        <label className={style.label} htmlFor="notes">Additional Notes:</label>
                        <textarea
                            className={style.input}
                            id="notes"
                            name="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        ></textarea>
                    </div>
                    <button onClick={submit} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default HomePage;
