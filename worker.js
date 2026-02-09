export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return new Response("Only POST allowed", { status: 405 });
    }

    // 读取表单（虽然暂时不处理，但保留）
    await request.formData();

    // 返回固定 JSON
    const result = {
      next: "/thanks?language=zh",
      ok: true
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    });
  }
};
