
export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };

    const json = (data, status = 200) =>
      new Response(JSON.stringify(data), {
        status,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    if (!path.startsWith("/api/")) {
  return env.ASSETS.fetch(request);
}

    try {
      if (path === "/api/health") {
        return json({ success: true, message: "Backend aktif" });
      }

      if (!env.DB) {
        return json({ success: false, message: "Database D1 belum terhubung" }, 500);
      }

      if (path === "/api/users" && request.method === "GET") {
        const result = await env.DB.prepare(
          "SELECT * FROM users ORDER BY id DESC"
        ).all();
        return json(result.results);
      }

      if (path === "/api/users" && request.method === "POST") {
        const data = await request.json();

        const result = await env.DB.prepare(`
          INSERT INTO users (nama, nip, jabatan, descriptor, foto)
          VALUES (?, ?, ?, ?, ?)
        `).bind(
          data.nama,
          data.nip,
          data.jabatan,
          JSON.stringify(data.descriptor),
          data.foto || null
        ).run();

        return json({ success: true, id: result.meta.last_row_id });
      }

      if (path === "/api/users" && request.method === "DELETE") {
        const id = url.searchParams.get("id");
        if (!id) return json({ error: "ID pengguna diperlukan" }, 400);

        await env.DB.prepare("DELETE FROM users WHERE id = ?").bind(id).run();
        return json({ success: true });
      }

      if (path === "/api/attendance" && request.method === "GET") {
        const result = await env.DB.prepare(
          "SELECT * FROM attendance ORDER BY tanggal DESC, waktu DESC"
        ).all();
        return json(result.results);
      }

      if (path === "/api/attendance" && request.method === "POST") {
        const data = await request.json();

        await env.DB.prepare(`
          INSERT INTO attendance
          (userId, nama, nip, jabatan, tanggal, waktu, status, skorKemiripan)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          data.userId,
          data.nama,
          data.nip,
          data.jabatan,
          data.tanggal,
          data.waktu,
          data.status,
          data.skorKemiripan == null ? null : String(data.skorKemiripan)
        ).run();

        return json({ success: true });
      }

      return json({ error: "Endpoint tidak ditemukan" }, 404);

    } catch (error) {
      return json({
        success: false,
        message: error.message
      }, 500);
    }
  }
};
