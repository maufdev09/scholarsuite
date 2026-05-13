"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ManagePage() {
  const [courses, setCourses] = useState<CourseTs[]>(() => {
    if (typeof window !== "undefined") {
      const storedCourses = JSON.parse(localStorage.getItem("courses") || "[]");
      return [...storedCourses, ...coursesData];
    }
    return [];
  });

  const handleDelete = (id: string) => {
    const filtered = courses.filter((course: any) => course.id !== id);

    setCourses(filtered);

    localStorage.setItem("courses", JSON.stringify(filtered));

    toast.success("Deleted Successfully");
  };

  return (
    <PrivateRoute>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-10">Manage Courses</h1>

        {courses.length === 0 ? (
          <p>No Courses Added Yet</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course: any) => (
              <div
                key={course.id}
                className="border rounded-2xl overflow-hidden shadow-sm"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5 space-y-3">
                  <h2 className="text-2xl font-bold">{course.title}</h2>

                  <p className="text-gray-600">{course.category}</p>

                  <p className="font-semibold">${course.price}</p>

                  <div className="flex gap-3">
                    <Link href={`/items/${course.id}`}>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl">
                        View
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(course.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-xl"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PrivateRoute>
  );
}
