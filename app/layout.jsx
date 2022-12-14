import Head from "./head"
import Navigation from "./components/Navigation"
import '../styles/globals.css'

export default function RootLayout({
    children,
  }){
    return (
      <html lang="en">
        <Head/>
        <body>
          <Navigation/>
          <main className="cnt">
            {children}
          </main>
        </body>
      </html>
    );
  }