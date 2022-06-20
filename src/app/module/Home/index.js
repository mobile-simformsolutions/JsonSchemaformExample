import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Form from '@rjsf/core';
import CustomeCheckWidget from '../../component/CustomeCheckWidget';

const schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: [
    'firstName',
    'lastName',
    'email',
    'age',
    'city',
    'phoneno',
    'terms_and_conditions',
  ],
  properties: {
    firstName: {
      title: 'FirstName',
      type: 'string',
    },
    lastName: {
      title: 'LastName',
      type: 'string',
    },
    email: {
      title: 'Email',
      type: 'string',
      format: 'email',
    },
    age: {
      title: 'Age',
      type: 'number',
    },

    city: {
      title: 'City',
      type: 'string',
      enum: ['Anand', 'Ahmedabad', 'Vadodra', 'Rajkot', 'Surat'],
      default: 'Anand',
    },
    phoneno: {
      title: 'Phone No',
      type: 'string',
      minLength: 10,
    },

    terms_and_conditions: {
      title: 'I have read and accept the terms & conditions',
      type: 'boolean',
    },
  },
};
function validate(formData, errors) {
  if (formData.age < 18) {
    errors.age.addError('You must be have 18+');
  }
  return errors;
}
const uiSchema = {
  firstName: {
    'ui:focus': true,
  },
  terms_and_conditions: {
    // 'ui:widget': CustomeCheckWidget,
    label: true,
  },
};
function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const onChange = ({ formData }) => {
    setFormData(formData);
  };
  const submit = ({ formData }) => {
    alert(JSON.stringify(formData, null, 2));
  };
  return (
    <div class='container'>
      <div class='row'>
        <div class='col-md-6'>
          <Form
            schema={schema}
            uiSchema={uiSchema}
            onChange={onChange}
            formData={formData}
            validate={validate}
            showErrorList={false}
            onSubmit={submit}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
