export default function DashBoardLayout({children}:{children:React.ReactNode}) {
  return (
    <section>
        <h1>Header</h1>
        {children}
        
        <h1>footer</h1>
    </section>
  );
}
