import React, { useState } from 'react';
import { useForm } from "react-hook-form"

const PersonForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const initialErrorState = {firstNameError: '', lastNameError: ''};
    const [error, setError] = useState(initialErrorState);

    const[showData, setShowData]= useState(false);

    const ResetForm = () =>{
        setShowData(false);
        setFirstName('');
        setLastName('');

        setError(initialErrorState);
    }
    const ValidateForm =() =>{
        let validationResult = true;

        let _error= {};
        if( firstName.length <2 || firstName.length >40){
            _error.firstNameError= "first name should be between 2 and 40 characters";
            validationResult= false;
        }
        if(lastName.length <2 || lastName.length >40){
            _error.lastNameError= "last name should be between 2 and 40 characters";
            validationResult= false;
        }

        setError(_error);
        return validationResult;

    }

    const clickBtn= () => {
        console.log('firstName: ' + firstName);
        console.log('lastName: ' + lastName);
        if(ValidateForm()){
            console.log('form was valid!');
            setShowData(true);
        } else {
            console.log('form was invalid!');
        }
        
    }

    const DisplayData =() =>{
        return(
            <div class="card">
            <div class="card-header bg-dark text-white">Data</div>
            <div class="card-body">
                <p><b>First Name: {firstName}</b></p>
                <p><b>Last Name: {lastName}</b></p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-danger" onClick={ResetForm}>Close</button>
            </div>
        </div>
        );
    };


    return (
        <div class="container col-10">

        <form class="form-control my-4">
            <div class="form-floating my-3">
                <input 
                type="text" 
                class="form-control" 
                id="firstname" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter FirstName"
                />
                <label for="firstname">Enter FirstName</label>
            </div>
            <div class="form-floating mb-3">
                <input 
                type="text" 
                class="form-control" 
                id="lastname" 
                placeholder="Enter Lastname"
                value={lastName}
                onChange={(e) =>setLastName(e.target.value)}
                />
                <label for="lastname">Enter LastName</label>
            </div>

            <div class="card-footer">
                <button type="button" class="btn btn-primary mb-2" onClick={clickBtn}>Submit</button>
            </div>

        </form>
        {showData &&<DisplayData/>}
    </div>
    );
};

export default PersonForm;