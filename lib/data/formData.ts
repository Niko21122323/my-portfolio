import { FormInputType } from "../types";

export const formData: FormInputType[] = [
  {
    id: 1,
    label: "Hey! What's your name? 👋",
    name: "name",
    inputId: "name",
    type: "text",
    placeholder: "Jane Smith",
    textArea: false,
  },
  {
    id: 2,
    label: "Where can I reach you?",
    name: "email",
    inputId: "email",
    type: "email",
    placeholder: "jane@awesome.com",
    textArea: false,
  },
  {
    id: 3,
    label: "Who do you represent?",
    name: "organization",
    inputId: "organization",
    type: "text",
    placeholder: "Acme Inc. (or just yourself, that's cool too!)",
    textArea: false,
  },
  {
    id: 4,
    label: "What's on your mind? ✨",
    name: "message",
    inputId: "message",
    type: "text",
    placeholder: "Tell me about your project, idea, or just say hi!",
    textArea: true,
  },
];
