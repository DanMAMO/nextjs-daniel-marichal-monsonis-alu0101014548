import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Página no encontrada</h1>
            <p>¡Ups! Parece que has llegado a un lugar inexistente.</p>
            <p>Pero no te preocupes, siempre puedes volver al inicio:</p>
            <Link href="/">
                <a>Volver al inicio</a>
            </Link>
        </div>
    );
};

export default NotFoundPage;
