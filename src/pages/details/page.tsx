import { Link, useParams } from 'react-router-dom'
import { Header } from '../../components/header'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Props {
  id: string
  title: string
  description: string
  price: number
}

export function Details() {
  const { id } = useParams()

  const [data, setData] = useState<Props>({} as Props)

  async function getImoveisById() {
    const response = await api.get(`/imovel/${id}`)
    setData(response.data)
  }

  useEffect(() => {
    getImoveisById()
  }, [])

  return (
    <div>
      <Header />

      <main className='max-w-7xl mx-auto w-full px-4 mt-10'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-semibold text-zinc-100'>Detalhes</h2>

          <Link
            to={'/imoveis'}
            className='bg-teal-500 font-bold w-fit px-3 cursor-pointer h-8 rounded-3xl flex items-center gap-2'
          >
            Voltar
          </Link>
        </div>

        <div className='mt-10 space-y-10'>
          <h1 className='text-4xl font-semibold text-zinc-100'>{data.title}</h1>

          <p className='text-zinc-300 leading-relaxed'>{data.description}</p>

          <p className='text-8xl text-teal-500 font-bold'>
            {data.price &&
              data.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </p>
        </div>
      </main>
    </div>
  )
}
