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

  const googleDriveEmbedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="aspect-video w-full">
        <iframe
          src={googleDriveEmbedUrl}
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
