
import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { submitForm } from '../Actions/dashboard';
import { connect } from 'react-redux';

class Grains extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoading: false
            key: ' '
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
                // if (values.price === " ") {
                //     errors.price = "Enter Price";
                // }
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
                                    glutenContent: ''
                                }}
                                validate={validate}
                                onSubmit={this.handleSubmit}
                                render={({ errors, touched, resetForm, handleChange, handleBlur, values }) => (
                                    <Form
                                    >
                                        <div className="form-group form-group-inline d-flexbox">
                                            <label>Gluten Value</label>
                                            <select
                                                name='glutenContent'
                                                className='form-control form-control-sm'
                                                onChange={handleChange}
                                                value={values.glutenContent}
                                                placeholder='Gluten Content'
                                                id='glutenContent'
                                            // required
                                            >
                                                <option value="REF#1">REF#1</option>
                                                <option value="REF#2">REF#2</option>
                                                <option value="REF#3">REF#3</option>

                                            </select>
                                            {errors.glutenContent &&
                                                touched.glutenContent && (
                                                    <div>{errors.glutenContent}</div>
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
export default connect(mapStateToProps, { submitForm })(Grains);

