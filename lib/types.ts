import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  projectLink: string;
  role: string;
  projectImage: StaticImageData;
  hoverImage: StaticImageData;
};

export type LinkType = {
  id: number;
  label: string;
  link: string;
};

export type ExperienceType = {
  id: number;
  place: string;
  role: string;
  duration: string;
  description: string;
};

export type TechSkillsType = {
  title: string;
  skills: string[];
};

export type FormInputType = {
  id: number;
  label: string;
  name: string;
  inputId: string;
  type: string;
  placeholder: string;
  textArea: boolean;
};

export type ContactFormProps = {
  formData: FormInputType[];
};

export type FormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, boolean>;
};

export type ServiceType = {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
  background: string;
};

export type ProjectCardType = {
  role: string;
  title: string;
  projectLink: string;
  projectImage: StaticImageData;
  hoverImage: StaticImageData;
};

export type NavItemProps = {
  id: string | number;
  link: string;
  label: string;
  closeMenu: () => void;
};
