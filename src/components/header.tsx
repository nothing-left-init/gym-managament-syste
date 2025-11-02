
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 w-full bg-transparent py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white font-headline">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span>GymWise</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild variant="outline" className="border-primary-foreground/50 text-white hover:bg-white/10 hover:text-white">
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
