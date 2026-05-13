import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Maruf Ahmed",
      role: "Founder & Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Sarah Khan",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Rakib Hasan",
      role: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full border px-4 py-1 text-sm font-medium">
              About ScholarSuite
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Modern School Management Made Simple
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
              ScholarSuite helps schools, teachers, students, and parents manage
              education efficiently with a powerful and user-friendly platform.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="Students learning"
              width={800}
              height={600}
              className="h-full w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Our Mission</h2>
            </div>

            <p className="text-muted-foreground leading-7">
              We aim to digitize educational management by providing an elegant,
              fast, and scalable solution for schools and educational
              institutions.
            </p>

            <p className="text-muted-foreground leading-7">
              From attendance tracking to course management and communication,
              ScholarSuite simplifies every aspect of school administration.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border p-5 shadow-sm">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Features Built
                </p>
              </div>

              <div className="rounded-2xl border p-5 shadow-sm">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Platform Access
                </p>
              </div>

              <div className="rounded-2xl border p-5 shadow-sm">
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Responsive Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Choose ScholarSuite?
            </h2>

            <p className="mt-4 text-muted-foreground">
              Everything schools need in one modern platform.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Student Management",
                description:
                  "Manage students, attendance, and performance easily.",
              },
              {
                title: "Course Tracking",
                description:
                  "Organize courses, classes, and schedules efficiently.",
              },
              {
                title: "Analytics Dashboard",
                description:
                  "Monitor reports and school performance in real time.",
              },
              {
                title: "Secure Authentication",
                description:
                  "Firebase authentication with Google login support.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Meet Our Team</h2>

          <p className="mt-4 text-muted-foreground">
            Passionate developers and designers building the future of
            education.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-3xl border bg-background shadow-sm"
            >
              <Image
                width={400}
                height={400}
                src={member.image}
                alt={member.name}
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">{member.name}</h3>

                <p className="mt-2 text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to Transform Your School?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-lg">
            Start using ScholarSuite today and simplify your school management
            system with modern technology.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button variant="default" className="flex items-center gap-2">
                Get Started
              </Button>
            </Link>

            <Link href="mailto:info@scholarsuite.com">
              <Button variant="outline" className="flex items-center gap-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
