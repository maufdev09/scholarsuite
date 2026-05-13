"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  price: number;
  level: string;
  image: string;
}

interface LandingPageCardProps {
  course: Course;
}

const LandingPageCard = ({ course }: LandingPageCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <Badge variant="secondary">{course.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <Badge variant="outline">{course.level}</Badge>

          <span className="text-lg font-bold">${course.price}</span>
        </div>

        <div>
          <h3 className="line-clamp-1 text-2xl font-bold">{course.title}</h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {course.shortDescription}
          </p>
        </div>

        <Link href={`/items/${course.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageCard;
