import { apiClient } from "@/apiClient/client"
import { DigiPass } from "@/types/response-type"


const MOCK_PASSES: DigiPass[] = [
  {
    pass_id: 1,
    id: "black",
    name: "Black Passport",
    usd_price: "5",
    pass_type: "Black",
    point_power: 1,
    card: "/assets_icon/blackpass.webp",
    bnb_price: 0.015
  },
  {
    pass_id: 2,
    id: "white",
    name: "White Passport",
    usd_price: "15",
    pass_type: "White",
    point_power: 2,
    card: "/assets_icon/whitepass.webp",
    bnb_price: 0.045
  },
  {
    pass_id: 3,
    id: "gold",
    name: "Gold Passport",
    usd_price: "50",
    pass_type: "Gold",
    point_power: 4,
    card: "/assets_icon/goldpass.webp",
    bnb_price: 0.15
  }
];

export const getDigiPasses = async () => {
    if (process.env.NODE_ENV === 'development') {
        return MOCK_PASSES;
    }
    try {
        const entry_passes = await apiClient.get('/digi-passes')
        return entry_passes.data
    } catch (error) {
        throw error;
    }
}

export const getPassById = async (id: string): Promise<DigiPass> => {
    if (process.env.NODE_ENV === 'development') {
        const pass = MOCK_PASSES.find(p => p.id === id || String(p.pass_id) === id);
        if (pass) return pass;
        return MOCK_PASSES[2]; // Default to Gold
    }
    try {
        const single_pass = await apiClient.get(`/passes/${id}`)
        return single_pass.data
    } catch (error) {
        throw error;
    }
}