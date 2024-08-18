//import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Flashcard App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}