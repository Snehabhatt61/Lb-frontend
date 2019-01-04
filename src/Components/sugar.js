
import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { submitForm } from '../Actions/dashboard';
import { connect } from 'react-redux';

const sugarSchema = Yup.object().shape({
	glucose: Yup.string()
		.min(0, "Number must be between 2 to 40 characters.")
		.max(100, "Number must be between 2 to 40 characters.")
});
class Sugar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoading: false
        };
    }
    handleSubmit = (values) => {
        console.log('valll', values);
        var setData = JSON.parse(localStorage.getItem("key"));
        console.log("--------",setData);
        this.props.submitForm({...values,...setData}, this.successCallback);
    }
    successCallback = (values) => {
        alert("Your data is Saved");
        console.log("success", values);
    }
    componentDidMount() {
        this.setState({
            // isLoading: true
        })
    }
    render() {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const validate = (values, props) => {
            return sleep(300).then(() => {
                let errors = {};
                if (values.price === " ") {
                    errors.price = "Enter Price";
                }
                if (Object.keys(errors).length) {
                    throw errors;
                }
            });
        };
        return (
            <div className="form-page">
                {this.state.isLoading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <span className="spinner" />
                    </div>
                ) : (
                        <div className="bg-form">
                            {/* <p>LC Screen</p> */}
                            <Formik
                                initialValues={{
                                    glucose: ''
                                }}
                                validationSchema={sugarSchema}
                                validate={validate}
                                onSubmit={this.handleSubmit}
                                render={({ errors, touched, resetForm, handleChange, handleBlur, values }) => (
                                    <Form
                                    >
                                        <div className="form-group form-group-inline d-flexbox">
                                            <label>Sugar</label>
                                            <select
                                                name='calorificValue'
                                                className='form-control form-control-sm'
                                                onChange={handleChange}
                                                value={values.glucose}
                                                placeholder='Glucose'
                                                id='glucose'
                                            // required
                                            >
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>

                                            </select>
                                            {errors.glucose &&
                                                touched.glucose && (
                                                    <div>{errors.glucose}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <button
                                                type='submit'
                                                className='btn btn-primary'
                                            // onClick = {resetForm}
                                            >
                                                Submit</button>
                                        </div>
                                    </Form>
                                )}
                            />
                        </div>
                    )
                }
                {/* <Userlist /> */}
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {
        data: state
    }
}
export default connect(mapStateToProps, { submitForm })(Sugar);

