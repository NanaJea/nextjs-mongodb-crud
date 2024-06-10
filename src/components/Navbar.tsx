// Importieren der Link-Komponente aus Next.js
import Link from 'next/link';

// Definieren der Navbar-Komponente
function Navbar() {
    return (
        // Navigationsleiste mit grauem Hintergrund und Abstand unten
        <nav className="bg-gray-950 py-5 mb-2">
            {/* Container für zentrierte und horizontal ausgerichtete Elemente */}
            <div className='container flex justify-between px-10 md:px-0 mx-auto'>
                {/* Link zur Startseite mit dem Titel "Next Mongo" */}
                <Link href="/">
                    <h1 className='text-2xl font-bold'>
                        Next Mongo
                    </h1>
                </Link>
                {/* Liste von Navigationslinks */}
                <ul className='flex gap-x-4'>
                    {/* Link zur Seite zum Hinzufügen einer neuen Aufgabe */}
                    <li>
                        <Link href="/tasks/new">New Task</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

// Exportieren der Navbar-Komponente als Standardexport
export default Navbar;
