"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { notifications } from "@/lib/data";

export default function NotificationsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Send Notification</CardTitle>
            <CardDescription>
              Compose and send a notification to all members.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="e.g. Holiday Closure" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                className="min-h-[120px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Send Notification</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Notification History</CardTitle>
            <CardDescription>
              A log of all previously sent notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {notifications.map((notif) => (
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
    </div>
  );
}
