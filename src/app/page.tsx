import { ThemeToggle } from "@/components/theme-toggle";
import Calculator from "./calculator";
import { InstallButton } from "@/components/install-button";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <InstallButton />
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <main className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
        <Calculator />
      </main>
      <footer className="absolute bottom-4 w-full text-center text-sm text-muted-foreground">
        Build with love by a student for the students
      </footer>
    </div>
  );
}
