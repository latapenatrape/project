import Link from 'next/link'


export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
    <div className="text-4xl md:text-4xl font-bold tracking-tight md:tracking-tighter ">
      <Link href="/" className="hover:underline">
      <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
        <span style={{color: 'blue'}}>H</span><span style={{color: 'black'}}>S</span>
      </h3>
      </Link>
     </div>
      <div className="text-center flex justify-between">
        <Link href="/">
          <div className="mr-6 mt-4 ">Покинуть проект</div>
        </Link>
        <Link href="/">
          <div className="mr-6 mt-4">Присоединиться к проекту</div>
        </Link>
        <Link href="/project">
        <div className="mr-6 mt-4">Предложить проект</div>
        </Link>
      </div>
      <Link href="/login">
      <button  className="mr-6 mt-4 mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-8 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">Войти</button>
   </Link> 
   </header>
  )
}

