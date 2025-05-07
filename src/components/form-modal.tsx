import { X } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { api } from '../lib/axios'
import { AxiosError } from 'axios'

interface Props {
  onHandleOpenModal: () => void
  onGetImoveis: () => void
}

export function FormModal({ onHandleOpenModal, onGetImoveis }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  async function createImovel(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.post('/imovel', {
        title,
        description,
        price,
      })

      onGetImoveis()

      alert('Imóvel criado com sucesso')

      setTitle('')
      setDescription('')
      setPrice(0)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
      }
    }
  }

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center w-full h-full'>
      <form
        onSubmit={createImovel}
        className='bg-zinc-800 p-10 max-w-xl w-full px-4 rounded-2xl space-y-6 relative'
      >
        <h1 className='text-2xl font-semibold text-zinc-100'>Postar Imóvel</h1>

        <button
          onClick={onHandleOpenModal}
          type='button'
          className='absolute top-4 right-4 text-zinc-100 cursor-pointer'
        >
          <X />
        </button>
        <input
          className='border border-zinc-700 w-full h-12 text-white px-3 rounded-md'
          type='text'
          placeholder='Título'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className='border border-zinc-700 w-full h-16 text-white p-3 rounded-md'
          placeholder='Descrição'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <input
          className='border border-zinc-700 w-full h-12 text-white px-3 rounded-md'
          type='number'
          placeholder='Preço'
          onChange={(e) => setPrice(Number(e.target.value))}
          value={price}
        />

        <button className='bg-teal-500 font-bold w-full px-3 cursor-pointer h-12 rounded-xl'>
          Postar
        </button>
      </form>
    </div>
  )
}
