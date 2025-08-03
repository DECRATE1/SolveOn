import { useMemo } from "react";

export function useCutText(text: string, maxLength: number = 100): string {
  const truncatedText = useMemo(() => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  }, [text, maxLength]);

  return truncatedText;
}
