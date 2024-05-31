import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormAddressValues } from '../../../../types/FormAddressValues';
import EarthForm from '../../../../components/EathForm';
import MarsForm from '../../../../components/MarsForm';



const EditAddressForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<FormAddressValues | null>(null);
  const [planet, setPlanet] = useState<string>('Terra');
  const [successMessage, setSuccessMessage] = useState<string>('');

  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    const address = addresses.find((address: FormAddressValues) => address.id === id);
    if (address) {
      setInitialValues(address);
      setPlanet(address.planet);
    }
  }, [id]);

  const validationSchema = Yup.object().shape({
    planet: Yup.string().required(),
    locationName: Yup.string().required('Preenchimento de campo Obrigatório'),
    country: planet === 'Terra' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    state: planet === 'Terra' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    city: planet === 'Terra' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    zipcode: planet === 'Terra' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    number: planet === 'Terra' ? Yup.number().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    street: planet === 'Terra' ? Yup.string().required('Preenchimento de campo Obrigatório') : Yup.string().notRequired(),
    marsCode: planet === 'Marte'
      ? Yup.string().matches(/^\d{4}$/, 'Os códigos de Marte possuem exatamente 4 digitos, favor revisar o código.').required('Preenchimento de campo Obrigatório')
      : Yup.string().notRequired(),
  });

  const handleSubmit = (values: FormAddressValues) => {
    const addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    const updatedAddresses = addresses.map((address: FormAddressValues) =>
      address.id === id ? { ...values, id } : address
    );
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    setSuccessMessage('Endereço atualizado com sucesso!');

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (!initialValues) {
    return <div>Loading...</div>;
  }

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
                <h3 className="font-bold">Selecione o Planeta que deseja registrar um novo endereço:</h3>
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
                  value={planet}
                >
                  <option value="Terra">Terra</option>
                  <option value="Marte">Marte</option>
                </Field>
              </div>
            </div>
            <div className='flex flex-col gap-2 py-6'>
              {planet === 'Terra' && <EarthForm />}
              {planet === 'Marte' && <MarsForm />}
            </div>
            <div className='flex justify-center font-bold text-white mt-4'>
              <button type="submit" className="submit-button bg-blue-500 w-full py-2.5 mt-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-md hover:scale-110">
                Atualizar Endereço
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {successMessage && (
        <div className="bg-green-200 p-4 mt-4 rounded-md">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default EditAddressForm;
