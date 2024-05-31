import backgroundImage from '../../../assets/javier-miranda-Jn2EaLLYZfY-unsplash.jpg'
import EditAddressForm from './Form'

const EditAddress = () => {
  return (
    <div className="bg-cover bg-center w-[100vw] min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex justify-center p-24'>
        <div className='bg-white rounded-lg w-[35%]'>
          <EditAddressForm />
        </div>
      </div>
    </div>
  )
}

export default EditAddress