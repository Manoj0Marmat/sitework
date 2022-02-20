class Contact {
  getContact(url) {
    // request to get category
    // let data = api.getData(url);
    // response dummy data
    let data = [
      {
        id: 33,
        name: "Sell My iPhone Miami",
        description:
          "\ud83d\udd25 #1 BUYBACK MAIL-IN SERVICE. SERVING SOUTH FLORIDA SINCE 2015 \ud83d\ude0d",
        address: "21135 nw 14th pl\r\nUnit 257",
        city: "Miami Gardens",
        zip: "33169",
        hours: "Monday - Friday 9am-6pm\r\nSaturday \u0026 Sunday 12pm-3pm",
        phone: "(786) 254-1686",
        services: [2, 1, 3],
        inPerson: true,
        hideLocation: false,
      },
      {
        id: 50,
        name: "#1 BUYBACK MAIL-IN SERVICE. SERVING SOUTH FLORIDA SINCE 2015",
        description:
          "\ud83d\udd25 #1 BUYBACK MAIL-IN SERVICE. SERVING SOUTH FLORIDA SINCE 2015 \ud83d\ude0d",
        address: null,
        city: null,
        zip: null,
        hours: "Mail-in ONLY!",
        phone: "786-254-1686",
        services: [2, 1],
        inPerson: false,
        hideLocation: false,
      },
    ];
  }
}

let contact = new Contact();
