class Api {
  //for GET request
  async getData(url) {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  //for POST request
  async postData(url, data) {
    try {
      const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
}

let api = new Api();
