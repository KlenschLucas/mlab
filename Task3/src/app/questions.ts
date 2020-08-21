import { QuizQuestions } from "./quiz-questions";

const questions: QuizQuestions[] = [
  {
    question: "What does COVID-19 stand for?",
    answers: [
      "It's a term for Coronavirus Disease 19, because it's the 19th strain of coronavirus discovered.",
      "It's a term that stands for Coronavirus Disease 2019, the year it was first identified.",
    ],
    answer: 1,
    info: `It's a term for Coronavirus Disease 2019, the year it was first identified.
    According to the National Institute of Allergy and Infectious Diseases, coronaviruses are a family of viruses that typically impact the respiratory tract and are common in people and many different species of animals. 
    Doctors on the frontlines of the coronavirus outbreak in Wuhan, China, posing in their protective equipment \"I Was on the Front Lines of the COVID-19 Outbreak in Wuhan\": A Doctor Shares His Story"
    A new type of coronavirus, SARS-CoV-2, has been found to cause what we now call COVID-19. The first case of COVID-19 was reported in December 2019.`,
  },
  {
    question: "What other viruses belong to the coronavirus family?",
    answers: ["SARS and influenza", "SARS and MERS", "SARS and HIV"],
    answer: 1,
    info: `In addition to this new, or novel, coronavirus, there are at least six other coronaviruses that we currently know of, according to the Centers for Disease Control and Prevention (CDC). Four of them are extremely common and generally cause only mild symptoms, like the ones you might experience if you had a cold.
    Before the current pandemic, there were two known types of coronavirus that could prove more harmful, and potentially even fatal: MERS-CoV (the coronavirus that causes Middle East Respiratory Syndrome, or MERS) and SARS-CoV (the coronavirus that causes severe acute respiratory syndrome, or SARS, pictured at right).
    SARS-CoV-2 is the third type of this kind to be discovered.`,
  },
  {
    question:
      "True or False: A vaccine stimulates your immune system to produce antibodies, like it would if you were exposed to the virus.",
    answers: ["True", "False"],

    answer: 0,
    info: `Hanneke Schuitemaker, Ph.D., Global Head of Viral Vaccine Discovery and Translational Medicine and the Disease Area Stronghold Leader for Viral Vaccines at Janssen Vaccines & Prevention, a Janssen Pharmaceutical Company of Johnson & Johnson She's a Scientist with One of the World's Most Important Jobs: Creating a Potential COVID-19 Vaccine
    Vaccines contain the same germs that cause disease, but in a weakened or inactivated form, according to the CDC. The vaccine stimulates your immune system so that after getting vaccinated you develop immunity to that disease, without having to get the disease first.`,
  },
  // {
  //   question: "There are currently vaccines for the following coronaviruses:",
  //   answers: ["SARS", "MERS", "SARS and MERS", "None of the above"],
  //   answer: 3,
  //   info: `At this time, there are no approved vaccines for SARS or MERS.`,
  // },
  // {
  //   question: "How many vaccine candidates for COVID-19 have been proposed?",
  //   answers: ["25", "100", "120+"],
  //   answer: 2,
  //   info: `According to the World Health Organization (WHO), more than 120 COVID-19 vaccines have been proposed around the world.`,
  // },
  // {
  //   question: "True or False: The virus is mutating rapidly.",
  //   answers: ["True", "False"],
  //   answer: 1,
  //   info: `The novel coronavirus is periodically changing, or mutating, in form. It doesn't, however, seem to be mutating particularly rapidly. By contrast, according to the CDC, the flu is constantly changing. This is why flu vaccines must be updated each year.
  //   `,
  // },
  // {
  //   question: "How does weather seem to affect the novel coronavirus?",
  //   answers: [
  //     "The virus can’t survive in hot, humid climates.",
  //     "Cold temperatures can kill the virus.",
  //     "It is not yet known.",
  //   ],
  //   answer: 2,
  //   info: `According to the CDC, it is not yet known whether temperature and weather have any effect on the spread and behavior of COVID-19.`,
  // },

  // {
  //   question: "Currently, which group has had more severe effects of COVID-19?",
  //   answers: ["Men", "Women"],
  //   answer: 0,
  //   info: `Two scientists in a lab "I'm Racing to Screen Thousands of Molecules": These Scientists Are Canvassing a Vast Library in Search of a Potential COVID-19 Treatment

  //   At this time, studies have shown that men tend to be more seriously impacted by the novel coronavirus.`,
  // },
  // {
  //   question:
  //     "True or False: COVID-19 has currently been detected on all seven continents.",

  //   answers: ["True", "False"],
  //   answer: 1,
  //   info: `According to the CDC, COVID-19 has been detected in Africa, the Americas, Europe, Asia and Australia—but not in Antarctica.`,
  // },
];

export default questions;
