import PlanetDeliveryForm from '../../components/PlanetDeliveryForm'
import backgroundImage from '../../assets/javier-miranda-Jn2EaLLYZfY-unsplash.jpg'

const CreateAddress = () => {
  return (
    <div className="bg-cover bg-center w-[100vw] min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex justify-center p-24'>
        <div className='bg-white rounded-lg w-[35%]'>
          <PlanetDeliveryForm />
        </div>
      </div>
    </div>
  )
}

export default CreateAddress