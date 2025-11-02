import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { members, notifications } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MemberDashboard() {
  const currentMember = members[0]; // Mock current user

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-headline">Welcome back, {currentMember.name}!</h1>
        <p className="text-muted-foreground">Here's a summary of your account.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Membership Status</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Current Plan</span>
              <span className="font-semibold">{currentMember.membershipPlan}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <Badge variant={currentMember.status === "Active" ? "default" : "destructive"}>
                {currentMember.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Next Billing Date</span>
              <span className="font-semibold">October 15, 2023</span>
            </div>
            <Button asChild className="w-full mt-4 bg-accent hover:bg-accent/90">
                <Link href="/dashboard/billing">Manage Billing <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Recent updates from the gym.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {notifications.slice(0, 3).map((notif) => (
              <div key={notif.id} className="grid gap-1">
                <p className="font-semibold">{notif.title}</p>
                <p className="text-sm text-muted-foreground">{notif.message}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(notif.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
