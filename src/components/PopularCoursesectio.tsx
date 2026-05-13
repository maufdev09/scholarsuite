import LandingPageCard from "@/components/LandingPageCard";
import { coursesData } from "@/data/courses";

export default function PopularCoursesSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">Popular Courses</h2>

        <p className="mt-4 text-muted-foreground">
          Explore our most popular and highly-rated courses.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course) => (
          <LandingPageCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
