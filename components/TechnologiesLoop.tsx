const technologies = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "React.js" },
  { id: 4, name: "Next.js" },
  { id: 5, name: "Astro.js" },
  { id: 6, name: "Node.js" },
  { id: 7, name: "NestJS" },
  { id: 8, name: "GraphQL" },
  { id: 9, name: "Prisma" },
  { id: 10, name: "Jest" },
  { id: 11, name: "HTML" },
  { id: 12, name: "CSS" },
  { id: 13, name: "SCSS" },
  { id: 14, name: "Tailwind CSS" },
  { id: 15, name: "MongoDB" },
  { id: 16, name: "Supabase" },
  { id: 17, name: "Firebase" },
  { id: 18, name: "SQL" },
  { id: 19, name: "NoSQL" },
  { id: 20, name: "Shopify" },
];

const TechnologiesLoop = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex overflow-hidden w-full">
          <div className="flex shrink-0 gap-2 pr-2 animate-scroll">
            {technologies.map((tech) => (
              <span
                key={tech.id}
                className="block bg-ring/5 px-20 py-10 whitespace-nowrap text-foreground text-sm font-normal"
              >
                {tech.name}
              </span>
            ))}
          </div>

          <div
            className="flex shrink-0 gap-2 pr-2 animate-scroll"
            aria-hidden="true"
          >
            {technologies.map((tech) => (
              <span
                key={tech.id}
                className="block bg-ring/5 px-20 py-10 whitespace-nowrap text-foreground text-sm font-normal"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesLoop;
