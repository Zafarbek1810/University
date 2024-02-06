import client from "../HHTP/client";

export default class UniversityProvider {
    static async createUniversity (body){
        return await client.post("/admin/university", body);
    }
    
    static async updateUniversity (body){
        return await client.put("/admin/university", body);
    }
    
    static async getAllAUniversity() {
        return await client.get(`/admin/university`);
    }

}
