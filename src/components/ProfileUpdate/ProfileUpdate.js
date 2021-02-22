import React, { Component } from 'react';
import HomeLayout from '../Home/HomeLayout';
import axios from 'axios';
import { connect } from 'react-redux';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Spinner from '../../common/UI/Spinner/Spinner';
import classes from './ProfileUpdate.css';
import * as actionName from '../../reducer/reducerAction';

class ProfileUpdate extends Component {

    state = {
        userForm: {
            name: {
                elementType: 'input',
                elementName: "Customer Name",
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name for Login'
                },
                value: this.props.user.name,
                validation: {
                    required: true,
                    validName: true
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
                value: this.props.user.username,
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
                value: this.props.user.password,
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
                value: this.props.user.address,
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
                value: this.props.user.citizenship,
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
                value: this.props.user.statename,
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
                value: this.props.user.country,
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
                value: this.props.user.zipCode,
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
                value: this.props.user.email,
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
                        { value: '', displayValue: 'Please select Gender' },
                        { value: 'Male', displayValue: 'Male' },
                        { value: 'Female', displayValue: 'Female' }
                    ]
                },
                value: this.props.user.gender,
                validation: { required: true },
                valid: true
            },
            maritalstatus: {
                elementType: 'select',
                elementName: "Marital Status",
                elementConfig: {
                    options: [
                        { value: '', displayValue: 'Please select  marital status' },
                        { value: 'Married', displayValue: 'Married' },
                        { value: 'Unmarried', displayValue: 'Unmarried' }
                    ]
                },
                value: this.props.user.maritalstatus,
                validation: { required: true },
                valid: true
            },
            phonenumber: {
                elementType: 'input',
                elementName: "Phone Number",
                elementConfig: {
                    type: 'text',
                    placeholder: 'phonenumber'
                },
                value: this.props.user.phonenumber,
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
                    label: 'DOB',
                    type: 'date',
                    placeholder: 'dateofbirth'
                },
                value: this.props.user.dateofbirth,
                validation: {
                    required: true,
                    ageCheck: true
                },
                valid: false,
                touched: false
            },
            idtype: {
                elementType: 'select',
                elementName: "ID Proof",
                elementConfig: {
                    options: [
                        { value: '', displayValue: 'Please select  ID  Type' },
                        { value: 'Passport', displayValue: 'Passport' },
                        { value: 'Driving', displayValue: 'Driving license' },
                        { value: 'ID card', displayValue: 'ID card' }
                    ]
                },
                value: this.props.user.idtype,
                validation: { required: true },
                valid: true
            },
            idnumber: {
                elementType: 'input',
                elementName: "ID Number",
                elementConfig: {
                    type: 'text',
                    placeholder: 'ID Number'
                },
                value: this.props.user.idnumber,
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


    userHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.userForm) {
            formData[formElementIdentifier] = this.state.userForm[formElementIdentifier].value;
            console.log(formElementIdentifier);
        }
        formData["username"] = this.props.user.username;
        formData["registrationDate"] = this.props.user.registrationDate;


        axios.put('http://localhost:8000/users', formData)
            .then(response => {
                this.setState({ loading: false });
                this.props.onUpdateAction(formData);
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.validName) {
            const pattern = /^[a-zA-Z ]*$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
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
        this.setState({ userForm: updatedUserForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.userForm) {
            formElementsArray.push({
                id: key,
                config: this.state.userForm[key]
            });
        }
        let form = (
            <form onSubmit={this.userHandler}>
                {formElementsArray.map(formElement => (

                    <tr key={formElement.id}>
                        <td>{formElement.config.elementName}:</td>
                        <td>
                            <Input
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
                <Button btnType="Success" >UPDATE</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ProfileUpdate}>
                <HomeLayout />
                <h4>UPDATE USER PROFILE</h4>
                {form}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.formData
    };
};

const mapDispatchToProps = dispatch => {

    return {
        onUpdateAction: (formData) => dispatch({ type: actionName.PROFILE_UPDATE_ACTION, formData: formData })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);
