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
      <body>
        {children}
      </body>
    </html>
  );
}
