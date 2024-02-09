import client from "../HHTP/client";

class StudentProvider {
  static async getStudentInfo() {
    return await client.get("/student/getStudent");
  }

  static async createStudent(body) {
    return await client.post(`/auth/register`, body);
  }

  static async getStudent() {
    return await client.get("/admin/student");
  }

  static async deleteStudent(id) {
    return await client.delete(`/admin/student/${id}`);
  }

  static async paymentAdd(id, body) {
    return await client.post(`/admin/payment?id=${id}`, body);
  }

  static async uploadFile(userId, file) {
    const formdata = new FormData();
    formdata.append("file", file);

    return await client.post(`/admin/upload?userId=${userId}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  static async fileDownload(hashId) {
    return await client
      .get(
        `/student/download?hashId=${hashId}`,
        // {
        //   headers: {
        //     "Content-Type": "application/pdf",
        //   },
        // },
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  static async imgPreview(hashId) {
    return await client
      .get(`/student/preview?hashId=${hashId}`, { responseType: "blob" })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

export default StudentProvider;
