import { NextResponse } from "next/server";
import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'

// Handler für GET-Anfragen, um alle Aufgaben abzurufen
export async function GET() {
    // Verbindung zur Datenbank herstellen
    connectDB();

    // Alle Aufgaben aus der Datenbank abrufen
    const tasks = await Task.find();

    // Die abgerufenen Aufgaben als JSON-Antwort zurückgeben
    return NextResponse.json(tasks); 
}

// Handler für POST-Anfragen, um eine neue Aufgabe zu erstellen
export async function POST(request) {
    try {
        // Daten aus der Anfrage lesen
        const data = await request.json();

        // Neue Aufgabe aus den Daten erstellen
        const newTask = new Task(data);

        // Neue Aufgabe in der Datenbank speichern
        const savedTask = await newTask.save();

        // Die gespeicherte Aufgabe als JSON-Antwort zurückgeben
        return NextResponse.json(savedTask);
    } catch (error) {
        // Bei Fehlern eine Fehlermeldung zurückgeben
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
