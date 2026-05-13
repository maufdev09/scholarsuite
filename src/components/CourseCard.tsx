"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function CourseCard({ course }: any) {
  return (
    <div className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition-all">
      <img
        src={course.image}
        alt={course.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">
            {course.category}
          </span>

          <span className="font-bold text-primary">${course.price}</span>
        </div>

        <h2 className="text-xl font-bold">{course.title}</h2>

        <p className="text-gray-600 line-clamp-2">{course.shortDescription}</p>

        <Link href={`/items/${course.id}`}>
          <Button className="w-full mt-3  hover:bg-indigo-700 text-white py-3 rounded-xl transition-all">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
