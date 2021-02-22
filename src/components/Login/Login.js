import React,{Component} from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import classes from  './Login.css';
import * as actionName from '../../reducer/reducerAction';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    state = {
        controls: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
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
            }
        },
        isSignup: true
    }
    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.controls) {
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
            console.log(formElementIdentifier);
        }
        axios.get('http://localhost:8000/users')
    .then(resp => {
        let data = resp.data;
        data.forEach(e => {
            if((e.username===formData.username) &&(e.password===formData.password)){
                console.log("Login successfull");
                const formData = {};
                formData["name"] =e.name;
                formData["username"] =e.username;
                formData["password"] =e.password;
                formData["address"] =e.address;
                formData["citizenship"] =e.citizenship;
                formData["statename"] =e.statename;
                formData["country"] =e.country;
                formData["zipCode"] =e.zipCode;
                formData["email"] =e.email;
                formData["gender"] =e.gender;
                formData["maritalstatus"] =e.maritalstatus;
                formData["phonenumber"] =e.phonenumber;
                formData["dateofbirth"] =e.dateofbirth;
                formData["registrationDate"] =e.registrationDate;
                formData["idtype"] =e.idtype;
                formData["idnumber"] =e.idnumber;
                formData["id"] =e.id;
                                         
                this.props.onLoginAction(e.username,formData);
                this.props.history.push( '/Home' );
            }
        });
    })
    .catch(error => {
        console.log(error);
    }); 
       
        
    }

    registerHandler = ( event ) => {
        event.preventDefault();
        this.props.history.push( '/Registration' );
        
    }
   

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

      

        return (
            
            <div className={classes.Login}>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success" >LOGIN</Button>
                    <NavLink className={classes.Register} to="/Registration" exact >REGISTER</NavLink>
                </form>
            </div>
            
        );
    }
}

const mapDispatchToProps = dispatch =>{

        return{
            onLoginAction : (name,formData) => dispatch({type:actionName.LOGIN_ACTION,userName:name,formData:formData})
        }
};


export default connect(null, mapDispatchToProps)(Login);
