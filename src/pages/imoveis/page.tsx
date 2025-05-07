import { Plus } from 'lucide-react'
import { Header } from '../../components/header'
import { Card } from '../../components/card'
import { FormModal } from '../../components/form-modal'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Props {
  id: string
  title: string
  description: string
  price: number
  createdAt: string
}

export function Imoveis() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [imovel, setImovel] = useState<Props[]>([])

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal)
  }

  async function getImoveis() {
    const response = await api.get('/imovel')

    setImovel(response.data)
  }

  useEffect(() => {
    getImoveis()
  }, [])

  return (
    <div className='relative'>
      <Header />

      <main className='max-w-7xl mx-auto w-full px-4 mt-10'>
        <div className='flex items-center gap-10'>
          <h2 className='text-2xl font-semibold text-zinc-100'>Imóveis</h2>

          <button
            onClick={handleOpenModal}
            className='bg-teal-500 font-bold w-fit px-3 cursor-pointer h-8 rounded-3xl flex items-center gap-2'
          >
            <Plus />
            Postar Imóvel
          </button>
        </div>

        <div className='grid grid-cols-3 gap-10 mt-10'>
          {imovel.map((item) => (
            <Card key={item.id} item={item} onGetImoveis={getImoveis} />
          ))}
        </div>
      </main>

      {isOpenModal && (
        <FormModal
          onHandleOpenModal={handleOpenModal}
          onGetImoveis={getImoveis}
        />
      )}
    </div>
  )
}
