import "./globals.css";
import Header from "./_components/Header";



export const metadata = {
  title: "healthcare appointment system",
  description: "project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
