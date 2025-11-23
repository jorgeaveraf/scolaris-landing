import { ScolarisChatBubble } from "@scolaris/chat-widget";

const ChatWidget = () => {
  const baseUrl = import.meta.env.VITE_AGENT_API_BASE;

  if (!baseUrl) {
    console.warn(
      "[chat-widget] VITE_AGENT_API_BASE no está definido; el widget no se renderizará."
    );
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ScolarisChatBubble
        baseUrl={baseUrl}
        language="es"
        placement="bottom-right"
        role="ventas"
      />
    </div>
  );
};

export default ChatWidget;
