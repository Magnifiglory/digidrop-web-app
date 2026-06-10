import { startTask } from "@/actions/app";


export async function POST(
   request: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
    const { taskId } = await params
  const data = await startTask(Number(taskId));
  return Response.json(data);
}