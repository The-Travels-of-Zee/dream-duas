import Markdown from "react-markdown";
import { privacyPolicy } from "@/constants";

function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-secondary/60 via-white to-accent/40">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article
          className="
            prose prose-sm sm:prose-base md:prose-lg lg:prose-xl
            prose-headings:text-rich-black prose-headings:font-bold
            prose-p:text-rich-black/80 prose-a:text-gold prose-strong:text-rich-black
            prose-li:marker:text-gold
          "
        >
          <Markdown>{privacyPolicy.content}</Markdown>
        </article>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
