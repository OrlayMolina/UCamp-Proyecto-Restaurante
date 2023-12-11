import { Link, Form } from 'react-router-dom';

function Header() {
    return (
        <header className="px-3 py-5 bg-emerald-600">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      
            <nav className="mb-4 lg:mb-0">
              <Link to="/" className="text-5xl text-white font-bold font-sans">UCamp Restaurant</Link>
            </nav>
      
            <div className="flex flex-col lg:flex-row items-center">
              <ul className="flex flex-wrap mb-4 lg:mb-0 gap-4">
                <li><Link to="/nosotros" className="text-3xl text-white font-sans">Nosotros</Link></li>
                <li><Link to="/" className="text-3xl text-white font-sans">Menú</Link></li>
                <li><Link to="/" className="text-3xl text-white font-sans">Reservaciones</Link></li>
              </ul>
      
              <Form className="lg:ml-4" role="search">
                <input type="search" className="form-control form-control-dark text-bg-dark p-3 rounded-lg text-2xl" placeholder="Search..." aria-label="Search" />
              </Form>
            </div>
      
          </div>
        </header>
    )
}

export default Header
