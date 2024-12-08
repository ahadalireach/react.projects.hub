import { useState } from "react";
import { allQuestions } from "./data";
import Question from "./Question";

const AccordionMenu = () => {
  const [questions] = useState(allQuestions);

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="container bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 md:p-10 space-y-6">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-6 border-b-2 border-primary/20 pb-4">
          Question And Answers
        </h3>
        <section className="space-y-4">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AccordionMenu;
