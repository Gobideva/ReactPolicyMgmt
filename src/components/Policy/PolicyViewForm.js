import React from 'react';

import classes from './PolicyViewForm.css';

const PolicyViewForm = props => {
  return (
    <section>
      <h2>Current Active Policies:</h2>
      <table >
        <thead><tr><th>Policy Type </th><th>Amount</th><th>Active Date</th><th>Duration (years)</th></tr></thead>
        {props.policydata.map(policylist => (
          <tr key={policylist.id} >
            <td>{policylist.policytype}</td>
            <td>{policylist.amount}</td>
            <td>{policylist.activedate}</td>
            <td>{policylist.policyduration}</td>
          </tr>

        ))}

      </table>
    </section>
  );
};

export default PolicyViewForm;
