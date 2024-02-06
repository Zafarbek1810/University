import client from "../HHTP/client";

export default class FacultiesProvider {
    static async createFaculty (body){
        return await client.post("/admin/faculty", body);
    }
    
    static async updateFaculty (body){
        return await client.put("/admin/faculty", body);
    }
    
    static async getAllFaculty() {
        return await client.get(`/admin/faculty`);
    }

}
