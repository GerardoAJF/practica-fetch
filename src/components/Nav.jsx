import { Link } from "react-router"; // Importar el componente Link para la navegación entre páginas

function Nav() { // Definir el componente Nav para la barra de navegación
    return (
        <nav className="flex items-center justify-between border-b border-slate-200 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white">
            <h2 className="m-0 text-lg font-semibold text-white">React Fetching</h2>
            <div className="flex items-center gap-4 text-sm">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/dragon" className="hover:underline">
                    DragonBall
                </Link>
            </div>
        </nav>
    );
}

export default Nav; // Exportar el componente para su uso en otras partes de la aplicación