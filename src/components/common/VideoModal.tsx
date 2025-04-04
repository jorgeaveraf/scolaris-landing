// components/common/VideoModal.tsx
import ReactDOM from "react-dom";
import Modal from "./Modal";
import { FC } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal: FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  const portalRoot = document.getElementById("portal-root");
  if (!isOpen || !portalRoot) return null;

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video tutorial"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-xl"
        />
      </div>
    </Modal>,
    portalRoot
  );
};

export default VideoModal;
