import { Field, ErrorMessage } from 'formik';

const EarthForm: React.FC = () => (
  <>
    <label htmlFor="locationName" className="label mt-1 mr-2 font-bold text-xs">*Nome da Localização:</label>
    <Field id="locationName" name="locationName" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="locationName" component="div" className="error-message text-red-500 text-xs mt-1" />

    <label htmlFor="country" className="label mt-1 mr-2 font-bold text-xs">*País:</label>
    <Field id="country" name="country" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="country" component="div" className="error-message text-red-500 text-xs mt-1" />

    <label htmlFor="state" className="label mt-1 mr-2 font-bold text-xs">*Estado:</label>
    <Field id="state" name="state" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="state" component="div" className="error-message text-red-500 text-xs mt-1" />

    <label htmlFor="city" className="label mt-1 mr-2 font-bold text-xs">*Cidade:</label>
    <Field id="city" name="city" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="city" component="div" className="error-message text-red-500 text-xs mt-1" />

    <label htmlFor="zipcode" className="label mt-1 mr-2 font-bold text-xs">*CEP:</label>
    <Field id="zipcode" name="zipcode" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="zipcode" component="div" className="error-message text-red-500 text-xs mt-1" />

    <label htmlFor="number" className="label mt-1 mr-2 font-bold text-xs">*Numero:</label>
    <Field id="number" name="number" type="number" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="number" component="div" className="error-message text-red-500 text-xs mt-1" />

    <label htmlFor="street" className="label mt-1 mr-2 font-bold text-xs">*Rua:</label>
    <Field id="street" name="street" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="street" component="div" className="error-message text-red-500 text-xs mt-1" />
  </>
);

export default EarthForm;