import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className='max-w-7xl mx-auto w-full px-4 py-6 flex items-center justify-between'>
      <img src={logo} alt='Logo da página' />

      <div className='flex items-center gap-4'>
        <div className='flex flex-col gap-1 text-right'>
          <strong className='text-lg font-bold text-zinc-100'>John Doe</strong>
          <span className='text-zinc-300'>john@email.com</span>
        </div>

        <div className='size-12 rounded-full bg-white'></div>
      </div>
    </header>
  )
}
