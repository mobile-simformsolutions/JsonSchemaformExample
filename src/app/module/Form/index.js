import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Form from '@rjsf/core';

const schema = {
  title: 'Training Session Form',
  type: 'object',
  required: ['speaker', 'date_time', 'title', 'short_desc'],
  properties: {
    title: {
      title: 'Title',
      type: 'string',
    },
    short_desc: {
      title: 'Short description',
      type: 'string',
      format: 'textarea',
    },
    speaker: {
      title: 'Speaker',
      type: 'string',
    },
    date_time: {
      title: 'Date & Time',
      type: 'string',
      format: 'date-time',
    },
  },
};

function FormData() {
  const [form, setForm] = useState([]);
  const [getformData, setGetFormData] = useState([]);
  const [name, setName] = useState([]);
  const [feedbackForm, setFeedbackForm] = useState({});
  const [submittedForm, setSubmittedForm] = useState(false);
  const [submittedFeedbackForm, setSubmittedFeedbackForm] = useState(false);

  useEffect(() => {
    getformData.forEach((fornmData) => setName([fornmData.title, ...name]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getformData]);
  const FeedbackSchema = {
    required: ['SelectTopic'],
    properties: {
      SelectTopic: {
        type: 'string',
        enum: name,
        title: 'Please Select Topic',
      },
    },
    dependencies: {
      SelectTopic: {
        oneOf: [
          {
            properties: {
              SelectTopic: {
                enum: '',
              },
            },
          },
          {
            properties: {
              SelectTopic: {},
              user_name: {
                title: 'User Name',
                type: 'string',
              },
              subject_knowledge: {
                title: '1. Subject Knowledge and Delivery.',
                enum: [1, 2, 3, 4],
              },
              presentation_body: {
                title: '2. Presentation / Body Language / Clarity.',
                enum: [1, 2, 3, 4],
              },
              examples_case: {
                title: '3. Examples / Exercises / Case study Benefits.',
                enum: [1, 2, 3, 4],
              },
              query: {
                title: '4. Query Solving / Interaction.',
                enum: [1, 2, 3, 4],
              },
              time_breaks: {
                title: '5. Time Management / Punctuality / Breaks / Pace.',
                enum: [1, 2, 3, 4],
              },
              learning: {
                title: '6. Learning Objectives Met / Covered.',
                enum: [1, 2, 3, 4],
              },
              overall_trainer: {
                title: '7. Overall Capability As Trainer',
                enum: [1, 2, 3, 4],
              },
              content: {
                title: '8. Content / Coverage.',
                enum: [1, 2, 3, 4],
              },
              language: {
                title: '9. Language / Organization / Layout.',
                enum: [1, 2, 3, 4],
              },
              suggestions: {
                title: '10. Suggestions to trainer',
                type: 'string',
              },
              recommend: {
                title:
                  '11. Would You Recommend This Program to Peers, Team, Seniors in the Organisation. ',
                type: 'string',
                format: 'textarea',
              },
              feature: {
                title: '12. Best Feature of the Training:',
                type: 'string',
                format: 'textarea',
              },
              improvement_opportunities: {
                title: '13. Improvement opportunities:',
                type: 'string',
                format: 'textarea',
              },
            },
            required: [
              'user_name',
              'subject_knowledge',
              'presentation_body',
              'examples_case',
              'query',
              'time_breaks',
              'learning',
              'overall_trainer',
              'content',
              'language',
            ],
          },
        ],
      },
    },
  };

  const onChange = ({ formData }) => {
    setForm(formData);
  };

  const submit = ({ formData }) => {
    setGetFormData([...getformData, formData]);
    setForm(null);
    // setSubmittedForm(true);
  };

  const onChangeFeedBack = ({ formData }) => {
    setFeedbackForm(formData);
  };

  const onFeedBackSubmit = ({ formData }) => {
    setFeedbackForm(formData);
    setSubmittedFeedbackForm(true);
    console.log(feedbackForm, 'feedbackForm');
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          {!submittedForm && (
            <Form
              schema={schema}
              formData={form}
              onChange={onChange}
              onSubmit={submit}
              showErrorList={false}
            />
          )}

          {!submittedFeedbackForm ? (
            <div className='feedbacl-form'>
              <h3>Session Feedback Form</h3>
              <h6 className='grade-text'>
                Grades is 1 = Little, 2 = Partly, 3 = Adequate, 4 = Fully
              </h6>

              <Form
                schema={FeedbackSchema}
                onSubmit={onFeedBackSubmit}
                formData={feedbackForm}
                onChange={onChangeFeedBack}
                showErrorList={false}
              />
            </div>
          ) : (
            <div className='feedbacl-form'>
              <h2>Thank you for your feedback</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormData;
