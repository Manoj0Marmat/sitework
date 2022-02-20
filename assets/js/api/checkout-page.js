class Checkout {
  sellLocation(url) {
    // request to get category
    // let data = api.postData(url);
    // response dummy data
    let data = [
      {
        id: 16,
        name: "Miramar store #1",
        description: "6100 Miramar pkwy Miramar FL 4342",
        address: null,
        city: null,
        zip: null,
        hours: "9:00 AM - 9:30 AM",
        phone: "+1(000)123-45-67",
        services: [1, 2, 3],
        inPerson: null,
        hideLocation: null,
      },
      {
        id: 17,
        name: "Miami Flagler Street",
        description:
          "? Sell and Buy used iPhones, Android devices, iPads, and Apple Macbooks online - easily, with security and fair pricing ?",
        address: "3813 E WOODSCAPE DR",
        city: "MIRAMAR",
        zip: "33023",
        hours: "8-5",
        phone: "786-543-0565",
        services: [3, 1, 2],
        inPerson: true,
        hideLocation: false,
      },
    ];
  }

  buyLocation(url) {
    // request to get category
    // let data = api.postData(url);
    // response dummy data
    let data = [
      {
        id: 16,
        name: "Miramar store #1",
        description: "6100 Miramar pkwy Miramar FL 4342",
        address: null,
        city: null,
        zip: null,
        hours: "9:00 AM - 9:30 AM",
        phone: "+1(000)123-45-67",
        services: [1, 2, 3],
        inPerson: null,
        hideLocation: null,
      },
      {
        id: 17,
        name: "Miami Flagler Street",
        description:
          "? Sell and Buy used iPhones, Android devices, iPads, and Apple Macbooks online - easily, with security and fair pricing ?",
        address: "3813 E WOODSCAPE DR",
        city: "MIRAMAR",
        zip: "33023",
        hours: "8-5",
        phone: "786-543-0565",
        services: [3, 1, 2],
        inPerson: true,
        hideLocation: false,
      },
    ];
  }

  repairLocation(url) {
    // request to get category
    // let data = api.postData(url);
    // response dummy data
    let data = [
      {
        id: 16,
        name: "Miramar store #1",
        description: "6100 Miramar pkwy Miramar FL 4342",
        address: null,
        city: null,
        zip: null,
        hours: "9:00 AM - 9:30 AM",
        phone: "+1(000)123-45-67",
        services: [1, 2, 3],
        inPerson: null,
        hideLocation: null,
      },
      {
        id: 17,
        name: "Miami Flagler Street",
        description:
          "? Sell and Buy used iPhones, Android devices, iPads, and Apple Macbooks online - easily, with security and fair pricing ?",
        address: "3813 E WOODSCAPE DR",
        city: "MIRAMAR",
        zip: "33023",
        hours: "8-5",
        phone: "786-543-0565",
        services: [3, 1, 2],
        inPerson: true,
        hideLocation: false,
      },
    ];
  }

  checkoutCommonSettings(url) {
    // request to get category
    // let data = api.getData(url);
    // response dummy data
    let data = {
      is_paypal_express_enabled: true,
      paypal_express_environment: "sandbox",
      fedex_config: "",
      paypal:
        "\u003Cpaypal-express-button on-payment=\u0022vm.onPayment()\u0022 on-authorize=\u0022vm.onAuthorize(data, actions)\u0022 on-cancel=\u0022vm.onCancel(data, actions)\u0022 valid-form=\u0022vm.validForm\u0022 environment=\u0022sandbox\u0022 \u003E\u003C/paypal-express-button\u003E",
    };
  }
}

let checkout = new Checkout();
