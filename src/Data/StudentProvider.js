import client from "../HHTP/client";

class StudentProvider {
  static async getStudentInfo() {
    return await client.get("/student/getStudent");
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
