import axios from 'axios';

export function submitForm(values, successCallback, resetForm) {
    let data = {
        commodity: values.commodity,
        price: values.price,
        deliveryDate : values.deliveryDate,
        deliveryVehicle : values.deliveryVehicle,
        deliveryTerms : values.deliveryTerms,
        quantityAndterms : values.quantityAndterms,
        surveyCompany : values.surveyCompany,
        insuranceCompany : values.insuranceCompany,
        startDate:values.startDate, 
        endDate:values.endDate,
        priceReference:values.priceReference,
        priceAdjustments:values.priceAdjustments,
        calorificValue:values.calorificValue,
        glutenContent:values.glutenContent,
        glucose: values.glucose
    }
    return async function (dispatch) {
        try {
            await axios.post('http://localhost:4000/lcData', data)
            console.log('sneha', data);
            await successCallback(data);
        } catch (e) {
            console.error(e);
        }
    }
};
