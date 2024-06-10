import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose"
import Task from "@/models/Task"

// GET-Anfragebehandlungsfunktion, um eine Aufgabe anhand ihrer ID abzurufen
export async function GET(request, { params }) {
    try {
        // Verbindung zur Datenbank herstellen
        connectDB()
        
        // Aufgabe anhand ihrer ID suchen
        const taskFound = await Task.findById(params.id)

        // Wenn die Aufgabe nicht gefunden wurde, eine 404-Antwort zurückgeben
        if (!taskFound)
            return NextResponse.json({
                message: "Task not found",
            }, {
                status: 404
            })

        // Wenn die Aufgabe gefunden wurde, geben Sie sie als JSON-Antwort zurück
        return NextResponse.json(taskFound);
    } catch (error) {
        // Bei Fehlern eine Fehlermeldung zurückgeben
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

// DELETE-Anfragebehandlungsfunktion, um eine Aufgabe anhand ihrer ID zu löschen
export async function DELETE(request, { params }) {
    try {
        // Aufgabe anhand ihrer ID löschen
        const taskDeleted = await Task.findByIdAndDelete(params.id)

        // Wenn die Aufgabe nicht gefunden wurde, eine 404-Antwort zurückgeben
        if (!taskDeleted)
            return NextResponse.json({
                message: "Task not found",
            }, {
                status: 404
            })

        // Wenn die Aufgabe erfolgreich gelöscht wurde, geben Sie sie als JSON-Antwort zurück
        return NextResponse.json(taskDeleted)
    } catch (error) {
        // Bei Fehlern eine Fehlermeldung zurückgeben
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

// PUT-Anfragebehandlungsfunktion, um eine Aufgabe anhand ihrer ID zu aktualisieren
export async function PUT(request, { params }) {
    try {
        // Daten aus der Anfrage lesen
        const data = await request.json()
        
        // Aufgabe anhand ihrer ID aktualisieren
        const taskUpdated = await Task.findByIdAndUpdate(params.id, data, {
            new: true
        })
        
        // Aktualisierte Aufgabe als JSON-Antwort zurückgeben
        return NextResponse.json(taskUpdated)
    } catch (error) {
        // Bei Fehlern eine Fehlermeldung zurückgeben
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}
