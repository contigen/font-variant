import './App.css'

function App() {
  return (
    <div>
      <h1 className='text-balance'>
        Font{' '}
        <span className='bg-gradient-to-br from-[#313b1b] from-50% to-[#1A1A1A] bg-clip-text text-transparent'>
          Variants
        </span>
        .&nbsp;
        <span className='bg-gradient-to-br from-[#959693] from-50% to-[#1A1A1A] bg-clip-text text-transparent'>
          Typography
        </span>
        &nbsp;has secrets too.
      </h1>
      <p>
        View font internals and enable font features you never knew existed.
      </p>
    </div>
  )
}

export default App
