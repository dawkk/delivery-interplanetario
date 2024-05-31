import { Field, ErrorMessage } from 'formik';

const MarsForm: React.FC = () => (
  <>
    <label htmlFor="locationName" className="label mt-1 mr-2 font-bold text-xs">*Nome da Localização:</label>
    <Field id="locationName" name="locationName" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="locationName" component="div" className="error-message text-red-500 text-xs mt-1" />

    <label htmlFor="marsCode" className='font-bold text-xs'>*Código de Localização Marte:</label>
    <Field id="marsCode" name="marsCode" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="marsCode" component="div" className="error-message text-red-500 text-xs mt-1" />
  </>
);

export default MarsForm;