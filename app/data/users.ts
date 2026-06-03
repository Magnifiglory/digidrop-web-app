import { getToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cache } from "react";



export const loginRequired = cache(async ()=>{
    const accessToken = await getToken();
    if (!accessToken) {
        if (process.env.NODE_ENV === 'development') {
            return { isAuthenticated: true, userToken: 'mock-developer-token' }
        }
        redirect("/login")
    }
    return { isAuthenticated: true, userToken: accessToken }
})