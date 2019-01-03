import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { submitForm } from '../Actions/dashboard';
import { connect } from 'react-redux';
import Routes from '../common/Routes';


class DashboardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoading: false
        };
    }
    handleSubmit = async (values) => {
        console.log('valll', values);
        await localStorage.setItem('key', JSON.stringify(values));
        // await console.log(".............", Routes.values);
        // alert("Submit");
        // this.props.submitForm(values, this.successCallback);
        this.handleOnclick(values.commodity);
    }
    handleOnclick = (values) => {
        // localStorage.setItem('key',JSON.stringify(values));
        console.log(Routes[values]);
        this.props.history.push(Routes[values]);
        // console.log(".............", Routes.values)
    }
    successCallback = (values) => {
        alert("Your data is Saved");
        console.log("success", values);
    }
    handleChange = async (value) => {
        console.log(value);
        // await this.props.history.push(Routes[value]);
        // await console.log(".............",Routes[value]);
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

                // if (['admin', 'null', 'god'].includes(values.firstName)) {
                //     errors.firstName = "You can't use 'admin' as your firstname";
                // }
                if (values.commodity === " ") {
                    errors.commodity = "Cannot be null";
                }
                if (values.price === " ") {
                    errors.price = "Enter Price";
                }

                // if (!values.deliveryDate) {
                //     errors.deliveryDate = 'Field is Required';
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
                                    commodity: '',
                                    price: '',
                                    deliveryDate: '',
                                    deliveryVehicle: '',
                                    deliveryTerms: '',
                                    quantityAndterms: '',
                                    surveyCompany: '',
                                    insuranceCompany: ''
                                }}
                                validate={validate}
                                onSubmit={this.handleSubmit}
                                render={({ errors, touched, resetForm, handleChange, handleBlur, values }) => (

                                    <Form
                                        // onSubmit={this.handleSubmit}
                                    >
                                        <div className="form-group form-group-inline d-flexbox">
                                            <select
                                                name='commodity'
                                                className='form-control form-control-sm'
                                                onChange={handleChange}
                                                value={values.commodity}
                                                placeholder='Commodity'
                                                id='commodity'>
                                                <option value="crudeoil">Crude Oil</option>
                                                <option value="price">Price</option>
                                                <option value="distillates">Distillates</option>
                                                <option value="coal">Coal</option>
                                                <option value="grain">Grain</option>
                                                <option value="sugar">Sugar</option>
                                            </select>

                                            {errors.commodity &&
                                                touched.commodity && (
                                                    <div>{errors.commodity}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <Field
                                                name='price'
                                                className='form-control form-control-sm'
                                                placeholder="Enter price"
                                                id='price'
                                                onChange={handleChange}
                                            />
                                            {errors.price &&
                                                touched.price &&
                                                <div>{errors.price}</div>
                                            }
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <Field
                                                name='deliveryDate'
                                                className='form-control form-control-sm'
                                                placeholder='Enter delivery date'
                                                id='deliveryDate'
                                            // required
                                            />
                                            {errors.deliveryDate &&
                                                touched.deliveryDate && (
                                                    <div>{errors.deliveryDate}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <select
                                                name='deliveryVehicle'
                                                className='form-control form-control-sm'
                                                onChange={handleChange}
                                                value={values.deliveryVehicle}
                                                placeholder='Your delivery vehicle'
                                                id='deliveryVehicle'
                                            // required
                                            >
                                                <option value="ship">Ship</option>
                                                <option value="trucks">Trucks</option>
                                                <option value="other">Other Means</option>
                                            </select>
                                            {errors.deliveryVehicle &&
                                                touched.deliveryVehicle && (
                                                    <div>{errors.deliveryVehicle}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <select
                                                name='deliveryTerms'
                                                className='form-control form-control-sm'
                                                placeholder='Enter delivery terms'
                                                onChange={handleChange}
                                                value={values.deliveryTerms}
                                                id='deliveryTerms'
                                            // required
                                            >
                                                <option value="FOB">FOB</option>
                                                <option value="CIF">CIF</option>
                                                <option value="DAP">DAP</option>
                                                <option value="CandF">CandF</option>
                                            </select>
                                            {errors.deliveryTerms &&
                                                touched.deliveryTerms && (
                                                    <div>{errors.deliveryTerms}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <Field
                                                name='quantityAndterms'
                                                className='form-control form-control-sm'
                                                placeholder='Enter quantity and terms'
                                                id='quantityAndterms'
                                            // required
                                            />
                                            {errors.quantityAndterms &&
                                                touched.quantityAndterms && (
                                                    <div>{errors.quantityAndterms}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <Field
                                                name='surveyCompany'
                                                className='form-control form-control-sm'
                                                placeholder='Enter survey company'
                                                id='surveyCompany'
                                            // required
                                            />
                                            {errors.surveyCompany &&
                                                touched.surveyCompany && (
                                                    <div>{errors.surveyCompany}</div>
                                                )}
                                        </div>
                                        <div className="form-group form-group-inline d-flexbox">
                                            <Field
                                                name='insuranceCompany'
                                                className='form-control form-control-sm'
                                                placeholder='Enter insurance company'
                                                id='insuranceCompany'
                                            // required
                                            />
                                            {errors.insuranceCompany &&
                                                touched.insuranceCompany && (
                                                    <div>{errors.insuranceCompany}</div>
                                                )}
                                        </div>

                                        <div className="form-group form-group-inline d-flexbox">
                                            <button
                                                type='submit'
                                                className='btn btn-primary'
                                            >
                                                Next</button>
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
export default connect(mapStateToProps, { submitForm })(DashboardForm);

