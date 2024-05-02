import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";
import { Button } from "./ui/button";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button
        className="text-center dark:bg-orange-400"
        onClick={() => setChatBoxOpen(true)}
      >
        <Bot size={20} className="dark:text-white" />
      </Button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
