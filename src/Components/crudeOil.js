
import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { submitForm } from '../Actions/dashboard';
import { connect } from 'react-redux';

class CrudeOil extends Component {
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
                            <Formik
                                initialValues={{
                                    startDate: '',
                                    endDate: '',
                                    priceReference: '',
                                    priceAdjustments: ''
                                }}
                                validate={validate}
                                onSubmit={this.handleSubmit}
                                render={({ errors, touched, resetForm, handleChange, handleBlur, values }) => (
                                    <Form
                                    >
                                        <div className="form-group form-group-inline d-flexbox">
                                            <label>Pricing Period  { }</label>
                                            <Field
                                                name='startDate'
                                                className='form-control form-control-sm'
                                                placeholder="Start Date"
                                                id='startDate'
                                            // onChange={e => this.setState({ age: e.target.value })}
                                            />
                                            {errors.startDate &&
                                                touched.startDate &&
                                                <div>{errors.startDate}</div>
                                            }
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <Field
                                                name='endDate'
                                                className='form-control form-control-sm'
                                                placeholder="End Date"
                                                id='endDate'
                                            // onChange={e => this.setState({ age: e.target.value })}
                                            />
                                            {errors.endDate &&
                                                touched.endDate &&
                                                <div>{errors.endDate}</div>
                                            }
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <select
                                                name='pricingReference'
                                                className='form-control form-control-sm'
                                                onChange={handleChange}
                                                value={values.pricingReference}
                                                placeholder='Your delivery vehicle'
                                                id='pricingReference'
                                            // required
                                            >
                                                <option value="REF#1">REF#1</option>
                                                <option value="REF#2">REF#2</option>
                                                <option value="REF#3">REF#3</option>
                                            </select>
                                            {errors.pricingReference &&
                                                touched.pricingReference && (
                                                    <div>{errors.pricingReference}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <select
                                                name='pricingAdjustments'
                                                className='form-control form-control-sm'
                                                onChange={handleChange}
                                                value={values.pricingAdjustments}
                                                placeholder='Your delivery vehicle'
                                                id='pricingAdjustments'
                                            // required
                                            >
                                                <option value="density">Density</option>
                                                <option value="Sulfer level">Sulfer level</option>
                                                <option value="nitrogen level">Nitrogen level</option>
                                            </select>
                                            {errors.pricingAdjustments &&
                                                touched.pricingAdjustments && (
                                                    <div>{errors.pricingAdjustments}</div>
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
export default connect(mapStateToProps, { submitForm })(CrudeOil);

