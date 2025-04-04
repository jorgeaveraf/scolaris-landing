// src/components/common/VideoModalContainer.tsx
import { FC } from "react";
import { useVideoModalStore } from "./store/useVideoModalStore";
import VideoModal from "./components/common/VideoModal";

const VideoModalContainer: FC = () => {
  const { isOpen, videoId, closeVideo } = useVideoModalStore();

  if (!isOpen || !videoId) return null;

  return (
    <VideoModal
      isOpen={isOpen}
      onClose={closeVideo}
      videoId={videoId}
    />
  );
};

export default VideoModalContainer;
