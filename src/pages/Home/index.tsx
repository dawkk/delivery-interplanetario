import { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/javier-miranda-Jn2EaLLYZfY-unsplash.jpg';
import { FormAddressValues } from '../../types/FormAddressValues';

const Home = () => {
  const [addresses, setAddresses] = useState<FormAddressValues[]>(JSON.parse(localStorage.getItem('addresses') || '[]'));

  const handleDeleteAddress = (id: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      const updatedAddresses = addresses.filter(address => address.id !== id);
      setAddresses(updatedAddresses);
      localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    }
  };

  return (
    <div className="bg-cover bg-center w-full min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center py-30 xs:py-2">
        <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm rounded-lg shadow-xl p-6 w-[60vw]">
          <div className='flex justify-between m-2 py-4   flex-wrap gap-4  sm:px-2 sm:flex-row md:px-14'>
            <p className='font-bold text-xl md:text-2xl text-white'>Endereços Registrados</p>
            <Link to="/address" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded ">Adicionar Novo Endereço</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {addresses.map((address, index) => (
              <div key={index} className="shadow-xl bg-gray-200 p-6 rounded-lg w-[300px]">
                <div className="text-center flex flex-col h-[170px] justify-between">
                  <div className='flex flex-col gap-2'>
                    <span className="font-bold">{address.planet}</span>
                    <span className="font-bold">{address.locationName}</span>
                    {address.planet === 'Terra' ? (
                      <span>{address.country} - {address.street}, {address.number}, {address.city}, {address.state}, {address.zipcode}</span>
                    ) : (
                      <span>{address.marsCode}</span>
                    )}
                  </div>
                  <div className="flex justify-between gap-4 mt-2">
                    <Link to={`/edit-address/${address.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded">Editar Endereço</Link>
                    <button onClick={() => handleDeleteAddress(address.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded">Excluir Endereço</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;