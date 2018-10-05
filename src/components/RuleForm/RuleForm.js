import React from 'react'
import { func } from 'prop-types'
import { Field } from 'redux-form'
import { required, length } from 'redux-form-validators'
import Input from './Input'

const descriptionValidator = [
  length({
    min: 5,
    max: 100,
    msg: {
      tooLong: 'La description est trop longue !',
      tooShort: 'La description est trop courte !',
    },
  }),
]

const RuleForm = ({ handleSubmit }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">New rule</h3>
    </div>
    <div className="panel-body">
      <form onSubmit={handleSubmit}>
        <Field
          component={Input}
          name="title"
          label="Titre"
          validate={[
            required({ msg: 'Champ obligatoire !' }),
            length({ max: 50, msg: { tooLong: 'Le titre est trop long !' } }),
          ]}
        />
        <Field
          component={Input}
          name="description"
          label="Description"
          validate={descriptionValidator}
        />
        <button type="submit" className="btn btn-primary pull-right">Submit</button>
      </form>
    </div>
  </div>
)

RuleForm.propTypes = {
  handleSubmit: func,
}

export default RuleForm
