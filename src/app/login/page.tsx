
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (userType: "admin" | "member") => {
    // In a real app, you would have authentication logic here.
    // For this demo, we'll just redirect.
    if (userType === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
      <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-3xl font-bold font-headline">
            <Dumbbell className="h-10 w-10 text-primary" />
            <span>GymWise</span>
          </Link>
        </div>
        <Tabs defaultValue="member" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="member">Member</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          <TabsContent value="member">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Member Login</CardTitle>
                <CardDescription>
                  Access your dashboard to view bills and updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="member-email">Email</Label>
                  <Input id="member-email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="member-password">Password</Label>
                  <Input id="member-password" type="password" required />
                </div>
                 <div className="text-sm">
                    <Link href="#" className="underline">
                      Forgot your password?
                    </Link>
                  </div>
                <Button onClick={() => handleLogin("member")} className="w-full bg-accent hover:bg-accent/90">
                  Login as Member
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Admin Login</CardTitle>
                <CardDescription>
                  Manage your gym, members, and billing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" required />
                </div>
                <div className="text-sm">
                    <Link href="#" className="underline">
                      Forgot your password?
                    </Link>
                  </div>
                <Button onClick={() => handleLogin("admin")} type="submit" className="w-full">
                  Login as Admin
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
