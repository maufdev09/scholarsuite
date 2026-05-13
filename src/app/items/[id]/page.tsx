import { Button } from "@/components/ui/button";
import { coursesData as courses } from "@/data/courses";
import Link from "next/link";

export default async function DetailsPage({ params }: any) {
  const courseid = await params;

  const course = courses.find((item) => item.id === courseid.id);

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[400px] object-cover rounded-2xl"
      />

      <div className="mt-10 space-y-5 px-5">
        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full mb-4 inline-block">
          {course.category}
        </span>

        <h1 className="text-4xl font-bold">{course.title}</h1>

        <p className="text-gray-600 text-lg">{course.fullDescription}</p>

        <div className="flex gap-5">
          <p className="font-semibold">Price: ${course.price}</p>

          <p className="font-semibold">Level: {course.level}</p>
        </div>

        <Link href="/items">
          <Button className="bg-primary text-white px-5 py-7 ">
            Back To Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
