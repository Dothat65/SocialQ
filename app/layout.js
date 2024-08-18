//import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SocialQ</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}