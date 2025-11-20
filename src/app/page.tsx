import { ThemeToggle } from "@/components/theme-toggle";
import Calculator from "./calculator";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background">
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <main className="relative z-10 flex flex-grow w-full items-center justify-center p-4">
        <Calculator />
      </main>
      <footer className="relative z-10 text-center text-sm text-muted-foreground py-4">
        Build with love by a student for the students
      </footer>
    </div>
  );
}
