import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="p-3 font-extrabold">
            <div className="flex flex-wrap items-center justify-center">
                <nav>
                    <Link to="/" className="m-2 text-2xl">Home</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
