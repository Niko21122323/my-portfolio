import { usePageStore } from "@/lib/store/usePageStore";

export const usePageReady = () => {
  const isPreloaderDone = usePageStore((state) => state.isPreloaderDone);
  const isTransitioning = usePageStore((state) => state.isTransitioning);

  return isPreloaderDone && !isTransitioning;
};
