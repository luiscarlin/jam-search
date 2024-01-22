import { handler } from "./action";
import { Chat } from "./chat";

export const runtime = "edge";

export default function Page() {
  return (
    <div className="grid grid-cols-2 h-full min-h-full">
      <div className="p-2">
        <Chat handler={handler} />
      </div>
    </div>
  );
}
