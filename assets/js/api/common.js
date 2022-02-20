class Common {
  // Decrease item quantity from cart
  async decreaseproduct(url, reqdata) {
    //request for data
    // let res = await api.postData(url, reqdata);
    // response dummy data
    let res = { removed: 1 };
  }

  // Add TO Cart
  async addToCart(url, reqdata) {
    //request for data
    // let res = await api.postData(url, reqdata);
    //response dummy data
    let res = { added: true };
  }
  // GET Cart
  async getCart(url, reqdata) {
    //request for data
    // let res = await api.postData(url, reqdata);
    //response dummy data
    let res = {
      cart_data: {
        items: [
          {
            id: 11549,
            image:
              "https://img.stage3w1.website/model/huawei-mate-9-porsche-unlocked.jpg",
            title: "Huawei Mate 9 Porsche Design Unlocked 64GB",
            site: 2,
            price: "0",
            condition: "New",
            quantity: 1,
            shippingPrice: 0,
          },
        ],
        counts: [1],
        sellSum: 0,
        shippingSum: 0,
        repairSum: 0,
        incomeSum: 0,
      },
      message: null,
    };
  }

  // Enabled Website
  async enabledWebsite(url, reqdata) {
    //request for data
    // let res = await api.postData(url, reqdata);
    // response dummy data
    let data = { buy: true, sell: true, repair: true };
  }

  // GET Customer Common settings
  async customer(url) {
    //request for data
    let data = await api.getData(url);

    //add description
    let descTag = document.createElement("meta");
    descTag.setAttribute("name", "description");
    descTag.setAttribute("content", data.info_text);
    document.getElementsByTagName("head")[0].prepend(descTag);

    // add logo to page
    let linkTag = document.createElement("link");
    linkTag.setAttribute("rel", "icon");
    linkTag.setAttribute("href", `${data.logo}`);
    linkTag.setAttribute("type", "image/png");
    document.getElementsByTagName("head")[0].prepend(linkTag);

    //add meta tag seo keywords
    let metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "keywords");
    let keywords = data.popular_searches;
    let html = "";
    keywords.map((keyword) => {
      html += `${keyword.title},`;
    });
    metaTag.setAttribute("content", html);
    document.getElementsByTagName("head")[0].prepend(metaTag);

    // add title to page
    let titleTag = document.createElement("title");
    titleTag.innerHTML = data.name;
    document.head.prepend(titleTag);
  }

  // GET testimonial
  async testimonial(url) {
    //request for data
    let data = await api.getData(url);
    console.log(data);
    let html = ""; //store html tags
    // data.forEach((testimonial) => {
    //   html += `<div class="testi-text">
    //   <p>${testimonial.testimonial_action}</p>
    //   <h6>- ${testimonial.testimonial_reviewer}</h6>
    //   <span>${testimonial.testimonial_content}</span>
    // </div>`;
    // });
    console.log(data[0]);
    html += `<div class="testi-text">
      <p>${data[0].testimonial_action}</p>
      <h6>- ${data[0].testimonial_reviewer}</h6>
      <span>${data[0].testimonial_content}</span>
    </div>`;
    html += `<div class="testi-text">
      <p>${data[1].testimonial_action}</p>
      <h6>- ${data[1].testimonial_reviewer}</h6>
      <span>${data[1].testimonial_content}</span>
    </div>`;
    document.getElementById("testimonial").innerHTML = `<div class="testi-text">
                <div class="avatar"> <img src="images/testi-1.jpg" alt=""> </div>
                <p>voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                <h6>- Rock Lancer</h6>
                <span>founder of lara consult</span> </div>
                <div class="testi-text">
                <div class="avatar"> <img src="images/testi-1.jpg" alt=""> </div>
                <p>voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                <h6>- Rock Lancer</h6>
                <span>founder of lara consult</span> </div>`;
  }

  // GET Flash Message
  async flashMessage(url) {
    //request for data
    // let data = await api.getData(url);
    //response dummy data
    let data = {
      success: ["Success message"],
      error: ["Error message"],
      info: ["Info message"],
    };
  }

  async test(url) {
    let testdata = await api.getData(url);
    console.log(testdata.data[0].id);
  }
}

let common = new Common();
