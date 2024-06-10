// Die NotFound-Komponente wird definiert, um die 404-Seite darzustellen
function NotFound() {
    return (
        // Die 404-Seite wird in einem Abschnitt dargestellt, der vertikal zentriert ist
        <section className="h-[calc(100vh-7rem)] flex items-center justify-center flex-col">
            {/* Die große 404-Überschrift */}
            <h1 className="text-7xl font-bold block">404</h1>
            {/* Die Nachricht "Page not found" */}
            <p className="text-slate-300 my-5 text-3xl">Page not found</p>
        </section>
    )
}

// Die NotFound-Komponente wird als Standardexport exportiert
export default NotFound
