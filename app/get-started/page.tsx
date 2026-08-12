import type { Metadata } from "next";
import GetStartedForm from "./GetStartedForm";
import "./get-started.css";

export const metadata: Metadata = {
  title: "Start a project | Bluvo Studio",
  description:
    "Tell Bluvo Studio what you are building, what it needs to achieve, and when you want to launch.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function GetStartedPage() {
  return <GetStartedForm />;
}