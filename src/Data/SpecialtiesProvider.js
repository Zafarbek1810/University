import client from "../HHTP/client";

export default class SpecialtiesProvider {
    static async createSpecial (body){
        return await client.post("/admin/fieldOfStudy", body);
    }
    
    static async updateSpecial (body){
        return await client.put("/admin/fieldOfStudy", body);
    }
    
    static async getAllSpecial() {
        return await client.get(`/admin/fieldOfStudy`);
    }

}
