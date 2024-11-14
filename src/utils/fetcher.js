export class Fetcher {
  static url = import.meta.env.VITE_API_URL;

  static async get(endpoint) {
    try {
      const response = await fetch(`${this.url}${endpoint}`, { method: "GET" });

      if (!response.ok) {
        console.error(response);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
