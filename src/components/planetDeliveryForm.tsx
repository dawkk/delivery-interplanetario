import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  planet: string;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  number?: string;
  street?: string;
  marsCode?: string;
}

const EarthForm: React.FC = () => (
  <>

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

const MarsForm: React.FC = () => (
  <>
    <label htmlFor="marsCode" className='font-bold text-xs'>*Código de Localização Marte:</label>
    <Field id="marsCode" name="marsCode" type="text" className=" bg-articBlue border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
    <ErrorMessage name="marsCode" component="div" className="error-message text-red-500 text-xs mt-1" />
  </>
);

const PlanetDeliveryForm: React.FC = () => {
  const [planet, setPlanet] = useState<string>('Earth');

  const initialValues: FormValues = {
    planet: 'Earth',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    number: '',
    street: '',
    marsCode: '',
  };

  const validationSchema = Yup.object().shape({
    planet: Yup.string().required(),
    country: planet === 'Earth' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    state: planet === 'Earth' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    city: planet === 'Earth' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    zipcode: planet === 'Earth' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    number: planet === 'Earth' ? Yup.number().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    street: planet === 'Earth' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    marsCode: planet === 'Mars'
      ? Yup.string().matches(/^\d{4}$/, 'Os códigos de Marte possuem exatamente 4 digitos, favor revisar o código.').required('Preenchimento de campo Obrigatório')
      : Yup.string().notRequired(),
  });

  const handleSubmit = (values: FormValues) => {
    const addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    addresses.push(values);
    localStorage.setItem('addresses', JSON.stringify(addresses));
  };

  return (
    <div className='p-10'>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <div>
                <h3 className="font-bold">Selecione o Planeta no deseja registrar um novo endereço:</h3>
                <Field
                  as="select"
                  id="planet"
                  name="planet"
                  className="block w-full mt-1 p-2.5 bg-articBlue border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const selectedPlanet = e.target.value;
                    setPlanet(selectedPlanet);
                    setFieldValue('planet', selectedPlanet);
                  }}
                >
                  <option value="Earth">Terra</option>
                  <option value="Mars">Marte</option>
                </Field>
              </div>
            </div>
            <div className='flex flex-col gap-2 py-6'>
              {planet === 'Earth' && <EarthForm />}
              {planet === 'Mars' && <MarsForm />}
            </div>
            <div className='flex justify-center font-bold text-white mt-4'>
              <button type="submit" className="submit-button bg-blue-500 w-full py-2.5 mt-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-md hover:scale-110">
                Criar Endereço
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PlanetDeliveryForm;
