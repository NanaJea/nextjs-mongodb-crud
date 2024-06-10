// Importiere die notwendigen Module von Mongoose und dotenv
import { connect, connection, ConnectOptions } from "mongoose";
import dotenv from 'dotenv';

// Lade Umgebungsvariablen aus der .env-Datei
dotenv.config();

// Objekt, um den Verbindungsstatus zur Datenbank zu verfolgen
const conn = {
    isConnected: false
}

// Funktion zum Herstellen der Verbindung zur MongoDB-Datenbank
export async function connectDB() {
    // Überprüfe, ob bereits eine Verbindung besteht
    if (conn.isConnected) return;

    // Abrufen der MongoDB-Verbindungs-URI aus den Umgebungsvariablen
    const mongoURI = process.env.MONGODB_URI;
    // Überprüfe, ob die Umgebungsvariable vorhanden ist
    if (!mongoURI) {
        throw new Error('La variable d\'environnement MONGODB_URI est manquante dans le fichier .env');
    }

    try {
        // Verbindung zur MongoDB-Datenbank herstellen
        const db = await connect(mongoURI, {
            useUnifiedTopology: true // Verwende eine einheitliche Topologie für die Verbindung
        } as ConnectOptions);
        // Ausgabe des Verbindungsnamens der Datenbank
        console.log(`Connecté à la base de données: ${db.connection.db.databaseName}`);
        // Setze den Verbindungsstatus auf 'verbunden'
        conn.isConnected = db.connections[0].readyState === 1;
    } catch (error) {
        // Behandlung von Fehlern bei der Verbindungsherstellung
        console.error('Erreur de connexion à MongoDB:', error);
        throw error;
    }
}

// Ereignisbehandlung für eine erfolgreiche Verbindung
connection.on('connected', () => {
    console.log('Mongoose est connecté');
});

// Ereignisbehandlung für Verbindungsfehler
connection.on('error', (err) => {
    console.error('Erreur de connexion Mongoose', err);
});
