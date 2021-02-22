import React, { useState } from 'react';

import classes from './PolicyPurchaseForm.css';

const PolicyPurchaseForm = React.memo(props => {

  const [purchasedPolicyType, setPurchasedPolicyType] = useState('');
  const [purchasedPolicyAmount, setPurchasedPolicyAmount] = useState('');
  const [purchasedPolicyDuration, setPurchasedPolicyDuration] = useState('');
  const [purchasedPolicyActiveDate, setPurchasedPolicyActiveDate] = useState('');

  var sysdate = function (separator) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (yyyy + separator + mm + separator + dd);
  };
  let valid = false;
  const submitHandler = event => {
    event.preventDefault();
    props.onAddPolicy({ policytype: purchasedPolicyType, amount: purchasedPolicyAmount, activedate: purchasedPolicyActiveDate, policyduration: purchasedPolicyDuration });
  };

  return (
    <section className={classes.PolicyPurchaseForm}>
      <div className={classes.PolicyPurchase}>
        <form onSubmit={submitHandler}>
          <table>
            <thead>
              <tr>
               <td><h2>Purchase Policy:</h2></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>  <label htmlFor="policytype">Policy Type:</label></td>
                <td><select id="policytype" value={purchasedPolicyType}
                  onChange={event => {
                    console.log(event.target.value);
                    setPurchasedPolicyType(event.target.value);
                  }} >
                  <option id="" value=" ">Select Policy Type</option>
                  <option id="lifeinsurance" value="Life Insurance">Life Insurance </option>
                  <option id="motorinsurance" value="Motor Insurance">Motor Insurance </option>
                  <option id="healthinsurance" value=" Health Insurance">Health Insurance </option>
                </select>
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="amount">Policy Amount:</label></td>
                <td> <input
                  type="number"
                  id="amount"
                  placeholder="Enter Policy Amount"
                  value={purchasedPolicyAmount}
                  onChange={event => {
                    console.log(event.target.value);
                    setPurchasedPolicyAmount(event.target.value);
                  }}
                />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="activedate">Policy Active Date:</label> </td>
                <td><input type="date" placeholder="DD-MM-YYYY" value={purchasedPolicyActiveDate} min={sysdate("-")} max="2030-12-31"
                  id="activedate" onChange={event => {
                    console.log(event.target.value);
                    setPurchasedPolicyActiveDate(event.target.value);
                  }} />
                </td>
              </tr>

              <tr>
                <td><label htmlFor="policyduration">Policy Duration:</label></td>
                <td><select id="policyduration" value={purchasedPolicyDuration}
                  onChange={event => {
                    console.log(event.target.value);
                    setPurchasedPolicyDuration(event.target.value);
                  }} >
                  <option id=" " value=" "> Please Select </option>
                  <option id="5" value=" 5">5 Years</option>
                  <option id="10" value="10">10 Years </option>
                  <option id="15" value="15">15 Years</option>
                  <option id="20" value="20">20 Years</option>
                  <option id="30" value="30">30 Years</option>
                </select></td>
              </tr>
              <tr >
                <td></td>
                <td><button type="submit" disabled={valid}>Purchase Policy</button></td>
              </tr>

            </tbody>
          </table>
        </form>
      </div>
    </section>
  );
});

export default PolicyPurchaseForm;
