import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Spinner from '../../common/UI/Spinner/Spinner';
import classes from './UserRegistration.css';

class UserRegistration extends Component {
    
    state = {
        userForm: {
            name: {
                elementType: 'input',
                elementName: "Customer Name", 
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    validName:true
                },
                valid: false,
                touched: false
            },
            username: {
                elementType: 'input',
                elementName: "UserName",
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name for Login'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementName: "Password", 
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                    
                },
                valid: false,
                touched: false
            },
            address: {
                elementType: 'input',
                elementName: "Address",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            citizenship: {
                elementType: 'input',
                elementName: "Citizenship",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Citizenship'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            statename: {
                elementType: 'input',
                elementName: "State Name",
                elementConfig: {
                    type: 'text',
                    placeholder: 'State'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementName: "Country Name",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementName: "ZIP Code",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementName: "E-Mail ID",
                elementConfig: {
                    type: 'email', 
                    placeholder: 'E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            gender: {
                elementType: 'select',
                elementName: "Gender",
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Please select Gender'},
                        {value: 'Male', displayValue: 'Male'},
                        {value: 'Female', displayValue: 'Female'}
                    ]
                },
                value: '',
                validation: {required: true},
                valid: true
            },
            maritalstatus: {
                elementType: 'select',
                elementName: "Marital Status",
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Please select  marital status'},
                        {value: 'Married', displayValue: 'Married'},
                        {value: 'Unmarried', displayValue: 'Unmarried'}
                    ]
                },
                value: '',
                validation: {required: true},
                valid: true
            },
            phonenumber: {
                elementType: 'input',
                elementName: "Phone Number",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phonenumber'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                },
                valid: false,
                touched: false
            },
            dateofbirth: {
                elementType: 'input',
                elementName: "Date of Birth",
                elementConfig: {
                    label : 'DOB',
                    type: 'date',
                    placeholder: 'dateofbirth'
                },
                value: '',
                validation: {
                    required :true,
                    ageCheck:true
                },
                valid: false,
                touched: false
            },
            registrationDate: {
                elementType: 'input',
                elementName: "Registration Date",
                elementConfig: {
                    type: 'date',
                    placeholder: 'registration date'
                },
                value: '',
                validation: {
                    required :true
                },
                valid: false,
                touched: false
            },
            idtype: {
                elementType: 'select',
                elementName: "ID Proof",
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Please select  ID  Type'},
                        {value: 'Passport', displayValue: 'Passport'},
                        {value: 'Driving', displayValue: 'Driving license'},
                        {value: 'ID card', displayValue: 'ID card'}
                    ]
                },
                value: '',
                validation: {required: true},
                valid: true
            },
            idnumber: {
                elementType: 'input',
                elementName: "ID Number",
                elementConfig: {
                    type: 'text',
                    placeholder: 'ID Number'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }

    userHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.userForm) {
            formData[formElementIdentifier] = this.state.userForm[formElementIdentifier].value;
            console.log(formElementIdentifier);
        }
        formData["id"] ='R-'+Math.floor(Math.random()*(999-100+1)+100);
        console.log("User id"+ formData.id);

        const user = {
           
            userData: formData
        }
        alert(" Your user Id is  :"+formData.id);
       
       
        axios.post( 'http://localhost:8000/users', formData )
          .then( response => {
              this.setState( { loading: false } );
             this.props.history.push( '/' );
           } )
          .catch( error => {
               this.setState( { loading: false } );
          } );
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if(rules.validName){
            const pattern = /^[a-zA-Z ]*$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedUserForm = {
            ...this.state.userForm
        };
        const updatedFormElement = { 
            ...updatedUserForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedUserForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedUserForm) {
            formIsValid = updatedUserForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({userForm: updatedUserForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.userForm) {
            formElementsArray.push({
                id: key,
                config: this.state.userForm[key]
            });
        }
        let form = (
            <form onSubmit={this.userHandler} className={classes.UserForm}>
                {formElementsArray.map(formElement => (
                    <tr key={formElement.id}>
                    <td>{formElement.config.elementName}:</td>
                    <td><Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    </td>
                    </tr>    
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Register</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.UserRegistration}>
                <h4>Enter Your Personal Details to Register</h4>
                {form}
            </div>
        );
    }
}

export default UserRegistration;