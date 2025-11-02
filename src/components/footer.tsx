import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-6 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} GymWise. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
          <Link href="#" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
