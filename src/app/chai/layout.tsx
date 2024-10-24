

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    <h2 className="text-2xl text-center text-red-500 bg-green-500">Inner Layout Item</h2>
    {children}
   </>
        
      
  );
}
