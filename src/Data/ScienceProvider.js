import client from "../HHTP/client";

export default class ScienceProvider {
  static async createScience(id, body) {
    return await client.post(`/admin/science?fieldOfStudyId=${id}`, body);
  }

  static async updateScience(body) {
    return await client.put("/admin/science", body);
  }

  static async getAllScience() {
    return await client.get(`/admin/science`);
  }

  static async uploadFile(scienceId, customName, file) {
    const formdata = new FormData();
    formdata.append("file", file);

    return await client.post(
      `/admin/upload?scienceId=${scienceId}&customName=${customName}`,
      formdata,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  }
}
