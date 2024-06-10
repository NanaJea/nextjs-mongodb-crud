// Verwendet client-Seitiges Rendering
"use client";
// Importieren von benötigten Hooks und Funktionen aus React und Next.js
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useRouter, useParams } from "next/navigation";

// Definiert die Komponente FormPage
function FormPage() {
    // Zustandsvariablen für die neue Aufgabe und den Router initialisieren
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });
    const router = useRouter();
    const params = useParams();

    // Funktion zum Abrufen einer Aufgabe anhand der ID
    const getTask = async () => {
        const res = await fetch(`/api/tasks/${params.id}`)
        const data = await res.json()
        console.log(data);
        setNewTask({
            title: data.title,
            description: data.description,
        })
    };

    // Funktion zum Erstellen einer neuen Aufgabe
    const createTask = async () => {
        try {
            const res = await fetch('/api/tasks', {
                method: "POST",
                body: JSON.stringify(newTask),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                router.push('/');
                router.refresh();
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    // Funktion zum Aktualisieren einer vorhandenen Aufgabe
    const updateTask = async () => {
        try {

        const res = await fetch(`/api/tasks/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(newTask),
            headers: {
                "Content-type": "application/json",
            }
        })
        const data = await res.json();
        router.push("/");
        router.refresh();
        } catch (error) {
            console.log(error);
            
        } 
    };

    // Funktion zum Löschen einer Aufgabe
    const handleDelete = async () => {
        if (
        window.confirm("Are you sure you want to delete this task?")) {
            try {

            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "DELETE",
            });
            router.push('/');
            router.refresh();
        }   catch (error) {
            console.log(error);   
        }
    }
    };

    // Funktion zum Bearbeiten des Formulars bei einer Formularübermittlung
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!params.id) {
            await createTask();
        } else {
            updateTask()
            
        }
    };

    // Funktion zum Aktualisieren des Zustands, wenn ein Eingabefeld geändert wird
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    // Effekt zum Abrufen der Aufgabe, wenn die Komponente montiert wird
    useEffect(() => {
        if (params.id) {
            getTask()
        }
    }, []);

    // Rückgabe der JSX-Komponente
    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <header className='flex justify-between'>
                <h1 className='font-bold text-3xl'>
                    {
                        !params.id ? "Create Task" : "Update task"
                    }
                </h1>

                   <button
                   type="button"
                   className='bg-red-500 px-3 py-1 rounded-md'
                   onClick={handleDelete}
                   >
                    Delete
                   </button>
                </header>

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newTask.title}
                />
                <textarea
                    name="description"
                    rows={3}
                    placeholder="Description"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newTask.description}
                ></textarea>
                <button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-t px-4 py-2 rounded-lg">
                {
                    !params.id ? "Create" : "Update"
                }
                </button>
            </form>
        </div>
    );
}

// Standardexport der Komponente
export default FormPage;
