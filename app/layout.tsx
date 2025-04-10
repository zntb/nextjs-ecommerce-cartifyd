import './globals.css';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='font-poppins antialiased'>{children}</body>
    </html>
  );
};
export default RootLayout;
