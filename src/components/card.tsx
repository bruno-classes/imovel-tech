import { Link } from 'react-router-dom'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Trash2 } from 'lucide-react'
import { api } from '../lib/axios'

interface Props {
  item: {
    id: string
    title: string
    description: string
    price: number
    createdAt: string
  }
  onGetImoveis: () => void
}

export function Card({ item, onGetImoveis }: Props) {
  async function handleDelete(id: string) {
    try {
      await api.delete(`/imovel/${id}`)
      onGetImoveis()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-zinc-900 border border-zinc-700/30 rounded-2xl p-4 space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold text-zinc-100'>{item.title}</h2>

        <button
          onClick={() => handleDelete(item.id)}
          className='text-red-600 cursor-pointer'
        >
          <Trash2 />
        </button>
      </div>

      <p className='text-zinc-300 line-clamp-3'>{item.description}</p>

      <div className='border-t border-zinc-700/30 pt-6 flex items-center justify-between'>
        <time className='text-sm text-zinc-400'>
          Postado dia {format(item.createdAt, 'dd MMMM yyyy', { locale: ptBR })}
        </time>

        <Link
          className='text-teal-500 font-semibold text-sm'
          to={`/details/${item.id}`}
        >
          Mais detalhes
        </Link>
      </div>
    </div>
  )
}
