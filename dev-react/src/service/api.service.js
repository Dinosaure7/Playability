export async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
}

export async function sendData(url, data, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: http,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
    return null;
  }
}

export async function fetchApi2(urls) {
  try {
    const responses = await Promise.all(
      urls.map((url) => fetch(import.meta.env.VITE_API_URL + url))
    );

    const jsonDatas = await Promise.all(
      responses.map((response) => response.json())
    );

    return jsonDatas;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
}
