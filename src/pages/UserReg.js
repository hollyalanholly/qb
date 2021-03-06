import React, { Fragment, useState, useEffect } from 'react';
import Bootbox from 'bootbox-react';

import './UserReg.css';

function UserReg(props) {

    //telling react that some info will be inputted in the reg screen and we need to keep track of and use it.
    //calling ("") as there may be nothing written in input TODO box yet
    const [user_email, setUser_email] = useState("");
    const [user_phone, setUser_phone] = useState("");
    const [user_language, setUser_language] = useState("");
    const [user_firstName, setUser_firstName] = useState("");
    const [user_lastName, setUser_lastName] = useState("");

    //onChange is used so everytime the text input field changes react will update this STATE
    function handleUser_emailChange(event) {
        setUser_email(event.target.value);
    }

    function handlePhoneChange(event) {
        setUser_phone(event.target.value);
    }

    function handleFirstname(event) {
        setUser_firstName(event.target.value);
    }

    function handleSurname(event) {
        setUser_lastName(event.target.value);
    }

    function handleLanguage(event) {
        setUser_language(event.target.value);
    }

    function handleAddUserClick() {
        props.addUser(user_firstName, user_lastName, user_email, user_phone, user_language);
    }


    //function to make a pop up box
    const [showAlert_userReg, setShowAlert_userReg] = useState(false)
    const handleClose_userReg = () => {
        console.log("You tots closed that ALERT from the user reg screen man!");
        window.open("/Login", "_self"); //once alert closed it takes user back to home page
        return setShowAlert_userReg(false);
    }
    //end of pop up box function

    //function to make the onClick do more than one thing
    function regButtonPressed() {
        console.log('reg button pressed');
        // window.open("/","_self") 
        setShowAlert_userReg(true);
        handleAddUserClick();
    }

    return (
        <div className="container UserReg">
            <div className="register-text">
                <h3>Register below ...</h3>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-md-offset-2 form-group" align="center">
                    <input
                        type="name"
                        className="form-control"
                        id="exampleInputForName"
                        placeholder="First Name"
                        onChange={handleFirstname}
                        value={user_firstName} />
                </div>
                <div className="col-12 col-md-6 col-md-offset-2 form-group" align="center">
                    <input
                        type="name"
                        className="form-control"
                        id="exampleInputForName"
                        placeholder="Surname"
                        onChange={handleSurname}
                        value={user_lastName} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email: name@example.com"
                        onChange={handleUser_emailChange}
                        value={user_email} />
                </div>
                <div className="col-12 col-md-6 form-group">
                    <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone: (+44)101 110 1010"
                        onChange={handlePhoneChange}
                        value={user_phone} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 form-group">
                    <input
                        type="date"
                        className="form-control"
                        id="dob"
                        placeholder="D.O.B"
                    />
                </div>
                <div className="col-12 col-md-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect01"
                        >Language</label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        onChange={handleLanguage}
                        value={user_language}>
                        <option value="Afrikaans">Afrikaans</option>
                        <option value="Albanian">Albanian</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Basque">Basque</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Catalan">Catalan</option>
                        <option value="Cambodian">Cambodian</option>
                        <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                        <option value="Croatian">Croatian</option>
                        <option value="Czech">Czech</option>
                        <option value="Danish">Danish</option>
                        <option value="Dutch">Dutch</option>
                        <option value="English">English</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finnish">Finnish</option>
                        <option value="French">French</option>
                        <option value="Georgian">Georgian</option>
                        <option value="German">German</option>
                        <option value="Greek">Greek</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Icelandic">Icelandic</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Irish">Irish</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Javanese">Javanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Latin">Latin</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Lithuanian">Lithuanian</option>
                        <option value="Macedonian">Macedonian</option>
                        <option value="Malay">Malay</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Maltese">Maltese</option>
                        <option value="Maori">Maori</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Mongolian">Mongolian</option>
                        <option value="Nepali">Nepali</option>
                        <option value="Norwegian">Norwegian</option>
                        <option value="Persian">Persian</option>
                        <option value="Polish">Polish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Quechua">Quechua</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="Samoan">Samoan</option>
                        <option value="Serbian">Serbian</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Slovenian">Slovenian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Swedish ">Swedish </option>
                        <option value="Tamil">Tamil</option>
                        <option value="Tatar">Tatar</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Thai">Thai</option>
                        <option value="Tibetan">Tibetan</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Ukrainian">Ukrainian</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Uzbek">Uzbek</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Welsh">Welsh</option>
                        <option value="Xhosa">Xhosa</option>
                    </select>
                </div>
            </div>
            <div className="text-center text-center">
                {/* <Link to="/About"> */}
                <button
                    type="button"
                    onClick={regButtonPressed} //() => setShowAlert_userReg(true)
                    className="btn btn-dark">
                    Register
                            </button>
                {/* </Link> */}
                <div className="alert-message_userReg">
                    <Bootbox
                        show={showAlert_userReg}
                        type={"alert"}
                        message={"You are now a Quake°Beacon user!"}
                        onClose={handleClose_userReg}
                    />
                </div>
            </div>
            <div className="register-footer">
                <h6>already have an account? - <a href="/"> log in</a></h6>
            </div>
        </div>
    );
}


export default UserReg;