import './globals.css'
import styles from "@/app/page.module.css";

export const metadata = {
  title: "RSC Example",
  description: "",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <div className={styles.page}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
    </body>
    </html>
  );
}
