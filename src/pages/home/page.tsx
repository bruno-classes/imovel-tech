import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { ArrowRight } from 'lucide-react'

export function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-6'>
      <img src={logo} alt='Logo da página' />
      <h1 className='text-4xl font-bold text-zinc-100'>
        Bem-vindo ao Imóvel Tech
      </h1>
      <p className='text-zinc-200 text-lg'>
        Crie um imóvel para venda ou veja a lista{' '}
      </p>

      <Link
        to={'/imoveis'}
        className='bg-teal-500 font-bold w-56 px-2 h-12 flex items-center justify-center rounded-md gap-2'
      >
        Acessar
        <ArrowRight />
      </Link>
    </div>
  )
}
