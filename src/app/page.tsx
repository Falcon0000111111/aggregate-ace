import Calculator from "./calculator";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <main className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
        <Calculator />
      </main>
    </div>
  );
}
