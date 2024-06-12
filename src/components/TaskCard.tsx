// Definiere das Interface für den Task-Typ
interface Task {
  _id: string; // Eindeutige ID des Tasks
  title: string; // Titel des Tasks
  description: string; // Beschreibung des Tasks
  createdAt: string; // Erstellungsdatum des Tasks als Zeichenkette (oder Date, wenn `createdAt` als Date-Objekt gespeichert wird)
}

// Importiere die notwendigen Module
import Link from "next/link";

// Verwende das Task-Interface für die Props der TaskCard-Komponente
function TaskCard({ task }: { task: Task }) {
  return (
    // Verlinkung zur Detailansicht des Tasks
    <Link href={`/tasks/${task._id}`}>
      {/* Container für die Task-Karte mit Hover-Effekten */}
      <div className="bg-gray-600 p-10 text-white rounded-md hover:cursor-pointer hover:bg-blue-700">
        {/* Überschrift mit dem Titel des Tasks */}
        <h3 className="text-2xl font-bold">{task.title}</h3>
        {/* Beschreibung des Tasks */}
        <p className="text-slate-300">{task.description}</p>
        {/* Erstellungsdatum des Tasks */}
        <p className="text-slate-400 my-2">
          <span className="mr-1">
            Erstellt am:
          </span>
          {/* Umwandlung des Erstellungsdatums in ein lesbares Format */}
          {
            new Date(task.createdAt).toLocaleDateString()
          }
        </p>
      </div>
    </Link>
  );
}

// Exportiere die TaskCard-Komponente als Standardexport
export default TaskCard;
