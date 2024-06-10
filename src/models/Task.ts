// Importiere die benötigten Module von Mongoose
import { Schema, model, models } from "mongoose";

// Definiere das Schema für die Aufgabe (Task)
const taskSchema = new Schema({
    // Titel der Aufgabe
    title: {
        type: String, // Datentyp: Zeichenkette (String)
        required: [true, 'El titulo es requerido'], // Erforderlich mit Fehlermeldung, falls nicht angegeben
        unique: true, // Eindeutiger Titel (keine Duplikate erlaubt)
        trim: true, // Leerzeichen am Anfang und Ende des Titels entfernen
    },
    // Beschreibung der Aufgabe
    description: {
        type: String, // Datentyp: Zeichenkette (String)
        required: [true, 'La description es requerida'], // Erforderlich mit Fehlermeldung, falls nicht angegeben
        trim: true, // Leerzeichen am Anfang und Ende der Beschreibung entfernen
    }
}, {
    timestamps: true, // Automatisches Hinzufügen von createdAt und updatedAt Feldern
});

// Exportiere das Task-Modell aus dem Mongoose-Modul
export default models.Task || model('Task', taskSchema);
