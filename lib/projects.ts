import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export const getProjectBySlug = async (slug: string) => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return { frontmatter: data, content, slug };
  } catch (error) {
    return null;
  }
};

export const getAllProjectSlugs = () => {
  const files = fs.readdirSync(rootDirectory);
  return files.map((file) => file.replace(/\.mdx$/, ""));
};
