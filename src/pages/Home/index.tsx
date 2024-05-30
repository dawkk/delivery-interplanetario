import PlanetDeliveryForm from '../../components/planetDeliveryForm'
import backgroundImage from '../../assets/javier-miranda-Jn2EaLLYZfY-unsplash.jpg'

const Home = () => {
  return (
    <div className="bg-cover bg-center w-[100vw] h-[100vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex justify-center p-24'>
        <div className='bg-white rounded-lg w-[35%]'>
          <PlanetDeliveryForm />
        </div>
      </div>
    </div>
  )
}

export default Home