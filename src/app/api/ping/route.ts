// Importieren Sie das NextResponse-Objekt aus dem next/server-Paket
import { NextResponse } from "next/server";
// Importieren Sie die Funktion connectDB aus dem mongoose-Utility-Modul
import { connectDB } from "@/utils/mongoose";

// Definieren Sie die Funktion GET, die von der Next.js-Route aufgerufen wird
export function GET() {
    // Verbinden Sie sich mit der MongoDB-Datenbank
    connectDB();

    // Geben Sie eine JSON-Antwort zurück, die eine einfache Begrüßungsnachricht enthält
    return NextResponse.json({
        message: "Hello, World!"
    });
}
