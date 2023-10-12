import { logo } from '../assets/index'


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() => window.open('https://')}
          className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles <br className='max-md:hidden'/>
        <span className='orange_gradient'>with AI</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with our AI powered tool that summarizes any article into a few key sentences.
      </h2>
      </header>
  )
}

export default Hero