import { apiClient } from "@/apiClient/client";
import { loginRequired } from "../users";
import { redirect } from "next/navigation";


export async function getProfile() {
    await loginRequired()
    if (process.env.NODE_ENV === 'development') {
        return {
            id: "mock-user-123",
            names: "Developer User",
            current_pass_power: 4,
            current_pass_id: "gold",
            has_pass: true
        };
    }
    try {
        const res = await apiClient.get('/profile');
        return res.data;
    } catch (error: any) {
        if (error?.response?.status === 401) {
            redirect("/login");
        }
        throw error;
    }
}

export async function getProfileStats() {
    await loginRequired()
    if (process.env.NODE_ENV === 'development') {
        return {
            rank: 42,
            point: 1337,
            referral_count: 5
        };
    }
    try {
        const res = await apiClient.get('/profile/stats');
        return res.data;
    } catch (error: any) {
        if (error?.response?.status === 401) {
            redirect("/login");
        }
        throw error;
    }
}
 
export async function getLeaderboardstats(){
    await loginRequired()
    if (process.env.NODE_ENV === 'development') {
        return [
            { rank: 1, names: "AlphaBot", wallet: "0x7F1a9b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8S", scored_point: 99999, avatar: null },
            { rank: 2, names: "BetaTester", wallet: "0x8A2b3C4d5E6f7G8h9I0j1K2l3M4n5O6p7Q8r9S0T", scored_point: 88888, avatar: null },
            { rank: 3, names: "CryptoKing", wallet: "0x9B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7q8R9s0T1U", scored_point: 77777, avatar: null },
            { rank: 4, names: "Developer User", wallet: "0x5C6d7E8f9G0h1I2j3K4l5M6n7O8p9Q0r1S2t3U4V", scored_point: 66666, avatar: null },
            { rank: 5, names: "GamerPro", wallet: "0x2D3e4F5g6H7i8J9k0L1m2N3o4P5q6R7s8T9u0V1W", scored_point: 55555, avatar: null },
            { rank: 6, names: "NextGen", wallet: "0x3E4f5G6h7I8j9K0l1M2n3O4p5Q6r7S8t9U0v1W2X", scored_point: 44444, avatar: null },
            { rank: 7, names: "Web3Dev", wallet: "0x4F5g6H7i8J9k0L1m2N3o4P5q6R7s8T9u0V1w2X3Y", scored_point: 33333, avatar: null },
            { rank: 8, names: "StarDust", wallet: "0x5A6b7C8d9E0f1G2h3I4j5K6l7M8n9O0p1Q2r3S4T", scored_point: 22222, avatar: null },
            { rank: 9, names: "DigiRider", wallet: "0x6B7c8D9e0F1g2H3i4J5k6L7m8N9o0P1q2R3s4T5U", scored_point: 11111, avatar: null },
            { rank: 10, names: "SolanaSlayer", wallet: "0x7C8d9E0f1G2h3I4j5K6l7M8n9O0p1Q2r3S4t5U6V", scored_point: 9999, avatar: null }
        ];
    }
    try {
        const res = await apiClient.get('/leaderboard/')
        return res.data
    } catch (error: any) {
        if (error?.response?.status === 401) {
            redirect("/login");
        }
        throw error;
    }
}