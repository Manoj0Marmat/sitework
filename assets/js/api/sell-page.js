class Sell {
  parentCategory(url) {
    // request to get category
    // let data = api.getData(url);
    // response dummy data
    let data = [
      {
        category_image: "https://www.google.com",
        category_id: 1,
        category_slug: "cell-phone",
        category_title: "Cell Phone",
      },
      {
        category_image: "https://www.google.com",
        category_id: 1,
        category_slug: "cell-phone",
        category_title: "Cell Phone",
      },
    ];
  }
  firstLevelChild(url) {
    // request to get category
    // let data = api.getData(url);
    // response dummy data
    let data = {
      model_id: 1,
      model_name: "LG",
      model_image: "https://www.google.com",
    };
  }

  secondLevelChild(url) {
    // request to get category
    // let data = api.getData(url);
    // response dummy data
    let data = {
      carrier_id: 1,
      carrier_name: "Verizon",
      carrier_image: "https://www.google.com",
    };
  }

  thirdLevelChild(url) {
    // request to get category
    // let data = api.getData(url);
    // response dummy data
    let data = {
      product_id: 1,
      product_name: "Samsung 3310",
      product_slug: "samsung-b3310",
      product_image: "https://www.google.com",
    };
  }
}

let sell = new Sell();
