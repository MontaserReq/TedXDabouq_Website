export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black to-primary-gray">
      {children}
    </section>
  );
}
