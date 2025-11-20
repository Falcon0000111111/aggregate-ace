import { ThemeToggle } from "@/components/theme-toggle";
import Calculator from "./calculator";

export default function Home() {
  const SvgPattern = () => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
          <circle id="pattern-circle" cx="10" cy="10" r="1" fill="hsl(var(--foreground) / 0.1)"></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
    </svg>
  );

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background">
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <main className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
        <Calculator />
      </main>
      <footer className="relative z-10 text-center text-sm text-muted-foreground py-4">
        Build with love by a student for the students
      </footer>
    </div>
  );
}
