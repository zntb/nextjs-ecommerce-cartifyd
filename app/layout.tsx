import { Toaster } from 'react-hot-toast';
import './globals.css';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#000000',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
};
export default RootLayout;
