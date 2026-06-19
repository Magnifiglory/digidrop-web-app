import { getProfileStats } from "@/app/data/profile/profile";


export async function GET(req:Request) {
    try {
        const data = await getProfileStats();
        return Response.json(data)
    } catch (error: any) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
}