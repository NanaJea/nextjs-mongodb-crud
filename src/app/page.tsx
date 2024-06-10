// Importieren von Funktionen und Modellen aus den entsprechenden Dateien
import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'
import TaskCard from '@/components/TaskCard'

// Funktion zum Laden von Aufgaben aus der Datenbank
async function loadTasks() {
    // Verbindung zur Datenbank herstellen
    connectDB();
    // Alle Aufgaben aus der Datenbank abrufen
    const tasks = await Task.find();
    // Rückgabe der abgerufenen Aufgaben
    return tasks;
}

// Funktion für die Startseite, um Aufgaben anzuzeigen
async function HomePage() {
    // Aufgaben laden
    const tasks = await loadTasks();
    // JSX-Struktur zur Darstellung der Aufgaben
    return (
        <div className='grid grid-cols-3 gap-2'>
            {/* Durchlaufen der Aufgaben und Erstellung der TaskCard-Komponenten */}
            {tasks.map(task => (
                <TaskCard task={task} key={task._id}/>
            ))}
        </div>
    )
}

// Standardexport der HomePage-Funktion
export default HomePage;
