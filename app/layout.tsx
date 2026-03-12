import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Piccolo Rospo | Pizza Artesanal',
  description: 'La mejor pizza artesanal en tu ciudad. Prueba nuestras especialidades Tres Quesos, Champperoni, Mexicana y Hawaiiana. Envío a domicilio o recoge en sucursal.',
  keywords: 'pizza, artesanal, piccolo rospo, comida, domicilio, restaurante',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Birthstone&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plaster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
