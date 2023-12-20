import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 ">
      <Container>
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">

      <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
        <span style={{color: 'blue'}}>H</span><span style={{color: 'black'}}>S</span>
      </h3>
      
      <div className="footer-section">
      <h4 className="mx-3 font-bold">Аккаунт</h4>
        <ul class="mt-4">
          <li class="mt-1"><a href="#">Изменить аккаунт</a></li>
          <li class="mt-1"><a href="#">Изменить пароль</a></li>
          <li class="mt-1"><a href="#">Выйти</a></li>
        </ul>
      </div>
      <div className="footer-section"> 
        <h4 className="mx-3 font-bold">Возможности</h4>
        <ul class="mt-4">
          <li><a href="#">Отслеживание</a></li>
          <li><a href="#">IOS & Android</a></li>
          <li><a href="#">Передача файлов</a></li>
        </ul>
      </div>
      <div className="footer-section">
      <h2 className="mx-3 font-bold">Контакты</h2>
        <ul class="mt-4">
          <li class="mt-1">info@hs.com</li>
          <li class="mt-1">+7999999999</li>
          <li class="mt-1">Владивосток, Гоголя 41</li>
          <li class="mt-1">ВВГУ</li>
        </ul>
      </div>
      <div className="footer-section">
         <div className="footer-search">
         <h4 className=" mx-3 font-bold">Подписаться на рассылку</h4>
        <button  className="mt-10 mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-8 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">Перейти</button>
     </div> 
     </div>
      </div>
      </div>
      </Container>
    </footer>
  )
}



