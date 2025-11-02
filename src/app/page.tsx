
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Bell, CreditCard, Users, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Header from "@/components/header";
import Footer from "@/components/footer";

const featureCards = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Member Management",
    description: "Add, update, and track member profiles with ease. Keep all member information organized and accessible.",
    image: PlaceHolderImages.find(img => img.id === 'feature-member-management')
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Billing & Payments",
    description: "Generate bills, assign fee packages, and track payments seamlessly. Never miss a due date again.",
    image: PlaceHolderImages.find(img => img.id === 'feature-billing')
  },
  {
    icon: <Bell className="h-8 w-8 text-primary" />,
    title: "Automated Notifications",
    description: "Send automated fee reminders and gym updates to all members, keeping everyone informed.",
    image: PlaceHolderImages.find(img => img.id === 'feature-notifications')
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Reporting & Analytics",
    description: "Gain insights into membership trends and revenue with comprehensive reports and analytics.",
    image: PlaceHolderImages.find(img => img.id === 'feature-reporting')
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
           {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative mx-auto px-4 text-center text-primary-foreground">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
                Digitize Your Gym, Simplify Management
              </h1>
              <p className="mb-8 text-lg text-gray-200 md:text-xl">
                Smart, secure, and simple — the modern way to manage your gym.
                Track members, automate billing, and grow your fitness business
                effortlessly.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="w-full bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
                A Smarter Way to Run Your Gym
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                GymWise provides all the tools you need to streamline your operations and enhance member experience.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((feature, index) => (
                <Card key={index} className="flex flex-col overflow-hidden text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
              Ready to Upgrade Your Gym?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
              Join dozens of gyms who have made their management smarter with GymWise.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Link href="/login">
                Access Your Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
