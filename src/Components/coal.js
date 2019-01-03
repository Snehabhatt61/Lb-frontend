
import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { submitForm } from '../Actions/dashboard';
import { connect } from 'react-redux';

class Coal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoading: false
        };
    }
    handleSubmit = (values) => {
        console.log('valll', values);
        // alert("Submit");
        this.props.submitForm(values, this.successCallback);
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
                                    calorificValue: ''
                                }}
                                validate={validate}
                                onSubmit={this.handleSubmit}
                                render={({ errors, touched, resetForm, handleChange, handleBlur, values }) => (
                                    <Form
                                    >
                                        <div className="form-group form-group-inline d-flexbox">
                                            <label>Calorific Value</label>
                                            <select
                                                name='calorificValue'
                                                className='form-control form-control-sm'
                                                onChange={handleChange}
                                                value={values.calorificValue}
                                                placeholder='Calorific Value'
                                                id='calorificValue'
                                            // required
                                            >
                                                <option value="REF#1">Ship</option>

                                            </select>
                                            {errors.calorificValue &&
                                                touched.calorificValue && (
                                                    <div>{errors.calorificValue}</div>
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
export default connect(mapStateToProps, { submitForm })(Coal);

