import axios from 'axios';
// import API_BASE_URL from '../common/config/config';
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
        gluten:values.gluten,
        glucose: values.gluten
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
// export function submitPriceForm(values, successCallback, resetForm) {
//     let data = {
//        startDate: values.startDate,
//        endDate: values.endDate,
//        priceReference: values.priceReference,
//        priceAdjustments: values.priceAdjustments
//     }
//     return async function (dispatch) {
//         try {
//             await axios.post('http://localhost:4000/lcData', data)
//             console.log('price', data);
//             await successCallback(data);
//         } catch (e) {
//             console.error(e);
//         }
//     }
// };