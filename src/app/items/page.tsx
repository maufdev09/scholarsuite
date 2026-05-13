"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { coursesData } from "@/data/courses";

export type CourseTs = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  price: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
};

export default function ItemsPage() {
  const [courses, setCourses] = useState<CourseTs[]>(() => {
    if (typeof window !== "undefined") {
      const storedCourses = JSON.parse(localStorage.getItem("courses") || "[]");
      return [...storedCourses, ...coursesData];
    }
    return [];
  });
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-10 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search courses..."
          className="border rounded-xl px-4 py-3 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-xl px-4 py-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
