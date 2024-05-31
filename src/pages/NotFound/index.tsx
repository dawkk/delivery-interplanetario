import { Link } from 'react-router-dom'
import errorImage from '../../assets/404-error-with-portals-rafiki.svg'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center align-middle p-20 gap-2'>
      <div>
        <img src={errorImage} alt="Error 404" style={{ width: '600px' }} />
        <a href="https://storyset.com/web" className='text-white flex justify-center align-middle text-xs'>Web illustrations by Storyset</a>
        <div className='text-white flex justify-center align-middle text-2xl'>Erro 404: Pagina Não Encontrada</div>
        <div className='p-5'>
          <Link to="/" className=' flex justify-center align-middle text-2xl'>
            <button className='bg-primary w-[200px] rounded-md my-4 py-2 text-black font-bold'>
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage