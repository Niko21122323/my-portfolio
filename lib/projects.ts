import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectPageTypes } from "./types";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export const getProjectBySlug = async (
  slug: string,
): Promise<ProjectPageTypes | null> => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      frontmatter: data as ProjectPageTypes["frontmatter"],
      content,
      slug,
    };
  } catch (error) {
    return null;
  }
};

export const getAllProjectSlugs = (): string[] => {
  if (!fs.existsSync(rootDirectory)) return [];
  const files = fs.readdirSync(rootDirectory);
  return files.map((file) => file.replace(/\.mdx$/, ""));
};
