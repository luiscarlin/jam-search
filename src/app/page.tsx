import { Button } from "@/components/ui/button";
import { handler } from "./action";
import { Chat } from "./chat";

export const runtime = "edge";

export default function Page() {
  return (
    <div className="h-full min-h-full">
      <div className="p-2">
        <Chat handler={handler} />
      </div>
      <Button>hello</Button>
    </div>
  );
}
