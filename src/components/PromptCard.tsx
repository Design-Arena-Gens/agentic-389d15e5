import { motion } from "framer-motion";
import { useState } from "react";
import type { GeneratedPrompt } from "../lib/buildPrompts";
import { cn } from "../lib/utils";

type PromptCardProps = {
  prompt: GeneratedPrompt;
  accent?: "primary" | "secondary";
  index: number;
};

export function PromptCard({ prompt, index }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 120 }}
      className="relative flex h-full flex-col rounded-3xl border border-base-200 bg-white p-6 shadow-panel backdrop-blur-sm"
    >
      <header className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-500">
            Série Ultra-Stable
          </p>
          <h3 className="text-lg font-semibold text-base-800">{prompt.title}</h3>
        </div>
        <span className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
          {String(index + 1).padStart(2, "0")}
        </span>
      </header>
      <p className="mb-4 text-sm leading-relaxed text-base-500">
        {prompt.description}
      </p>
      <div className="relative flex-1 rounded-2xl border border-dashed border-primary-200/60 bg-base-50/80 p-4 text-sm leading-relaxed text-base-700">
        {prompt.content}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "mt-5 inline-flex items-center justify-center gap-2 rounded-2xl border border-transparent px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2",
          copied
            ? "bg-primary-700 text-white shadow-lg shadow-primary-500/30"
            : "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700"
        )}
      >
        {copied ? "Copié ✓" : "Copier le prompt"}
      </button>
    </motion.article>
  );
}
