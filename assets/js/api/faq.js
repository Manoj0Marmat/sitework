class Faq {
  getFaq(url) {
    // request to get category
    // let data = api.getData(url);
    // response dummy data
    let data = [
      {
        category_title: "General Questions",
        category_questions: [
          {
            question_id: 1,
            question_title: "Question one",
            answer_text: "answer one",
          },
          {
            question_id: 2,
            question_title: "Question two",
            answer_text: "answer two",
          },
        ],
      },
      {
        category_title: "General Questions",
        category_questions: [
          {
            question_id: 1,
            question_title: "Question one",
            answer_text: "answer one",
          },
          {
            question_id: 2,
            question_title: "Question two",
            answer_text: "answer two",
          },
        ],
      },
    ];
  }
}

let faq = new Faq();
