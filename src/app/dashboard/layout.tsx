
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Bell, CreditCard, LayoutDashboard, LogOut, PanelLeft, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { members } from "@/lib/data";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/billing", icon: CreditCard, label: "My Billing" },
  { href: "/dashboard/profile", icon: User, label: "Profile" },
];

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentMember = members[0]; // mock current user
  const userAvatar = PlaceHolderImages.find(img => img.id === currentMember.avatar);


  const NavLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string; }) => (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        pathname === href && "bg-muted text-primary"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );

  const sidebarContent = (
    <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold font-headline">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="">GymWise</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>
        </div>
      </div>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
       {sidebarContent}
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
             {sidebarContent}
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt={currentMember.name} />}
                  <AvatarFallback>{currentMember.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
