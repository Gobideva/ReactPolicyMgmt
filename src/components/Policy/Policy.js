import React, { useState } from 'react';
import PolicyPurchaseForm from './PolicyPurchaseForm';
import PolicyViewForm  from './PolicyViewForm';

const Policy = () => {
    const [policyDetails, setPolicyDetails] = useState([]);
    const policyPurchaseHandler = policydata => {
        setPolicyDetails(addedPolicyData => [
        ...addedPolicyData,
        { id: Math.random().toString(), ...policydata }
      ]);
    };

    return (
        <div>
          <PolicyPurchaseForm onAddPolicy={policyPurchaseHandler} />
          <PolicyViewForm policydata={policyDetails} />
        </div>
      );
    };

    export  default Policy;