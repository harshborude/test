'use client';

import { Fragment } from "react";
import Image from 'next/image';
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/sectionheader";
import { Card } from "@/components/card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool...",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure...",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched...",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard...",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been exceptional...",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say"
          description="Don’t just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 overflow-hidden">
          <div className="flex gap-8 animate-move-left w-max">
            {[...Array(2)].map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name + index}
                    className="max-w-xs p-6 md:max-w-md md:p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
