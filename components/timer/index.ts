import dynamic from "next/dynamic";

export const Timer = dynamic(
  async () => {
    const { Timer } = await import("./logic");
    return Timer;
  },
  { ssr: false }
);
