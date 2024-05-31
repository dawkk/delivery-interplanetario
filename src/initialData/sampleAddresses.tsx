import { FormAddressValues } from "../types/FormAddressValues";

const addressesInLocalStorage = localStorage.getItem('addresses');
if (!addressesInLocalStorage) {
  const sampleAddresses: FormAddressValues[] = [
    {
      id: '1',
      planet: 'Terra',
      country: 'Brasil',
      state: 'São Paulo',
      city: 'São Paulo',
      zipcode: '01000-000',
      number: '123',
      street: 'Rua das Flores',
      locationName: 'Casa',
    },
    {
      id: '2',
      planet: 'Terra',
      country: 'EUA',
      state: 'Califórnia',
      city: 'Los Angeles',
      zipcode: '90001',
      number: '456',
      street: 'Sunset Blvd',
      locationName: 'Sede da Empresa',
    },
    {
      id: '3',
      planet: 'Terra',
      country: 'Reino Unido',
      state: 'Inglaterra',
      city: 'Londres',
      zipcode: 'EC1A 1BB',
      number: '789',
      street: 'Baker Street',
      locationName: 'Filial Logística',
    },

    {
      id: '4',
      planet: 'Marte',
      marsCode: '1234',
      locationName: 'Base Logística',
    },
    {
      id: '5',
      planet: 'Marte',
      marsCode: '5678',
      locationName: 'Centro de Distribuição',
    },
    {
      id: '6',
      planet: 'Marte',
      marsCode: '9101',
      locationName: 'Parametrização de Produtos',
    },
  ];
  localStorage.setItem('addresses', JSON.stringify(sampleAddresses));
}