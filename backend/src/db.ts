import { JsonDB, Config } from "node-json-db";

import { Question, Answer, Result } from "./types";

const db = new JsonDB(new Config("db", true, false, "/"));

export interface Test {
  id: number,
  name: string;
  questions: Question[];
  answers: Answer[];
  results: Result[];
}

function createData(
  id: number,
  name: string,
  questions: Question[],
  answers: Answer[],
  results: Result[]
): Test {
  return { id, name, questions, answers, results };
}

const questions: Question[] = [
  { id: 1, name: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:" },
  { id: 2, name: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:" },
  { id: 3, name: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:" },
  { id: 4, name: "You are taking part in a guided tour of a museum. You:" },
  { id: 5, name: "During dinner parties at your home, you have a hard time with people who:" },
  { id: 6, name: "You crack a joke at work, but nobody seems to have noticed. You:" },
  { id: 7, name: "This morning, your agenda seems to be free. You:" },
  { id: 8, name: "During dinner, the discussion moves to a subject about which you know nothing at all. You:" },
  { id: 9, name: "You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You:" },
  { id: 10, name: "At work, somebody asks for your help for the hundredth time. You:" },
  { id: 11, name: "You’ve been see a movie with your family and the reviews are mixed. You:" },
  { id: 12, name: "A friend arrives late for your meeting. You:" },
  { id: 13, name: "You can’t find your car keys. You:" },
  { id: 14, name: "It’s time for your annual appraisal with your boss. You:" },
];

const answers: Answer[] = [
  { id: 1, questionId: 1, name: "Don’t dare to interrupt them" },
  { id: 2, questionId: 1, name: "Think it’s more important to give them some of your time; work can wait" },
  { id: 3, questionId: 1, name: "Listen, but with only with half an ear" },
  { id: 4, questionId: 1, name: "Interrupt and explain that you are really busy at the moment" },
  { id: 5, questionId: 2, name: "Look at your watch every two minutes" },
  { id: 6, questionId: 2, name: "Bubble with inner anger, but keep quiet" },
  { id: 7, questionId: 2, name: "Explain to other equally impatient people in the room that the doctor is always running late" },
  { id: 8, questionId: 2, name: "Complain in a loud voice, while tapping your foot impatiently" },
  { id: 9, questionId: 3, name: "Don’t dare contradict them" },
  { id: 10, questionId: 3, name: "Think that they are obviously right" },
  { id: 11, questionId: 3, name: "Defend your own point of view, tooth and nail" },
  { id: 12, questionId: 3, name: "Continuously interrupt your colleague" },
  { id: 13, questionId: 4, name: "Are a bit too far towards the back so don’t really hear what the guide is saying" },
  { id: 14, questionId: 4, name: "Follow the group without question" },
  { id: 15, questionId: 4, name: "Make sure that everyone is able to hear properly" },
  { id: 16, questionId: 4, name: "Are right up the front, adding your own comments in a loud voice" },
  { id: 17, questionId: 5, name: "Ask you to tell a story in front of everyone else" },
  { id: 18, questionId: 5, name: "Talk privately between themselves" },
  { id: 19, questionId: 5, name: "Hang around you all evening" },
  { id: 20, questionId: 5, name: "Always drag the conversation back to themselves" },
  { id: 21, questionId: 6, name: "Think it’s for the best — it was a lame joke anyway" },
  { id: 22, questionId: 6, name: "Wait to share it with your friends after work" },
  { id: 23, questionId: 6, name: "Try again a bit later with one of your colleagues" },
  { id: 24, questionId: 6, name: "Keep telling it until they pay attention" },
  { id: 25, questionId: 7, name: "Know that somebody will find a reason to come and bother you" },
  { id: 26, questionId: 7, name: "Heave a sigh of relief and look forward to a day without stress" },
  { id: 27, questionId: 7, name: "Question your colleagues about a project that’s been worrying you" },
  { id: 28, questionId: 7, name: "Pick up the phone and start filling up your agenda with meetings" },
  { id: 29, questionId: 8, name: "Don’t dare show that you don’t know anything about the subject" },
  { id: 30, questionId: 8, name: "Barely follow the discussion" },
  { id: 31, questionId: 8, name: "Ask lots of questions to learn more about it" },
  { id: 32, questionId: 8, name: "Change the subject of discussion" },
  { id: 33, questionId: 9, name: "Notice that they’re alone, but don’t go over to talk with them" },
  { id: 34, questionId: 9, name: "Go and have a chat with them" },
  { id: 35, questionId: 9, name: "Shoot some friendly smiles in their direction" },
  { id: 36, questionId: 9, name: "Hardly notice them at all" },
  { id: 37, questionId: 10, name: "Give them a hand, as usual" },
  { id: 38, questionId: 10, name: "Accept — you’re known for being helpful" },
  { id: 39, questionId: 10, name: "Ask them, please, to find somebody else for a change" },
  { id: 40, questionId: 10, name: "Loudly make it known that you’re annoyed" },
  { id: 41, questionId: 11, name: "Don’t share your point of view with anyone" },
  { id: 42, questionId: 11, name: "Didn’t like the film, but keep your views to yourself when asked" },
  { id: 43, questionId: 11, name: "State your point of view with enthusiasm" },
  { id: 44, questionId: 11, name: "Try to bring the others round to your point of view" },
  { id: 45, questionId: 12, name: "Say, ‘It’s not a problem,’ even if that’s not what you really think" },
  { id: 46, questionId: 12, name: "Give them a filthy look and sulk for the rest of the evening" },
  { id: 47, questionId: 12, name: "Tell them, ‘You’re too much! Have you seen the time?’" },
  { id: 48, questionId: 12, name: "Make a scene in front of everyone" },
  { id: 49, questionId: 13, name: "Don’t want anyone to find out, so you take the bus instead" },
  { id: 50, questionId: 13, name: "Panic and search madly without asking anyone for help" },
  { id: 51, questionId: 13, name: "Grumble without telling your family why you’re in a bad mood" },
  { id: 52, questionId: 13, name: "Accuse those around you for misplacing them" },
  { id: 53, questionId: 14, name: "Go with great hesitation as these sessions are torture for you" },
  { id: 54, questionId: 14, name: "Look forward to hearing what your boss thinks about you and expects from you" },
  { id: 55, questionId: 14, name: "Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting" },
  { id: 56, questionId: 14, name: "Go along unprepared as you are confident and like improvising" },
];

const results: Result[] = [
  { id: 1, name: 'You are more of an introvert', description: 'You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing out in one. You are perpetually tormented by the idea of doing things wrong, not understanding or not being alert enough or intelligent enough to do what others expect of you. You lack in self-confidence and you seem to believe that others are better than you. While in a conversation, for example, you would be more likely to go along with the other’s points of view as you don’t fully respect your own opinions. Where there’s a low level task to complete or a service to be allotted, it’s you who volunteers. When people want to get out of a task, they naturally come to you as they know that you never say ‘no’. It’s not surprising that you sometimes have the impression of being permanently exploited, but you don’t really know how to break this vicious circle. On the rare occasions that you’ve tried to do so, this uncharacteristic defiance has caused uproar and you’ve ended up backing down. You are afraid of contact with others as you imagine that they are constantly judging you and that their probing looks will obviously find your faults. So, you try to remain the most transparent and discreet possible. How far will you take this logic of self-denigration? Try and stop projecting onto others the bad image you have about yourself. Have a good look around you and you’ll see that they too have faults, weaknesses and shortcomings, so stop finding excuses for everything. Maybe you were brought up in an atmosphere of ‘You’ll never make the grade’ as a child — a poison that you need progressively to get out of your system. Learn to look after your own interests — everyone else does, so why not you? You too have desires, dreams and opinions — express them. If you think that by saying no or thinking differently from others that you will no longer be loved, it just isn’t so. Others will learn to respect you because you respect yourself.' },
  { id: 2, name: 'You are more of a public extrovert and private introvert', description: 'In public and at work you are a ball of energy perpetually on the move. You take the initiative, encourage others, hate waiting and are endlessly anticipating what’s going on around you. You take real pleasure in managing everything, much like the conductor of an orchestra. You enjoy being noticed by your work peers and your anxiety is linked more to the thought of leaving others indifferent. You need other’s attention to fully exist, but once you’ve crossed the threshold of your home, it’s another matter. You no longer take initiatives, but leave others to decide in your place. When your partner asks you to make a choice or give an opinion about holiday destinations, dinner menus or the children’s activities, you offer little or no input. You’re not comfortable and don’t know how to react and those around you often interpret your passiveness as a lack of interest or a certain reticence. The reactions of those around you may make you feel the need to revise your behaviour to close the gap between the two poles of your life. People feel that you compensate in one area of life (public), which you have trouble handling on the other side (private). The public over-activity into which you throw yourself prevents you from expressing your emotions and feelings. At work, rationality and efficiency is asked of you, but even there, emotions and feelings are unavoidable. It’s not by denying or pushing them out of your attention that they cease to exist. Instead, by forcing them out of your conscious mind, they govern you unconsciously. Why are you so afraid of your emotions? What are you afraid of finding deep within yourself? This over-investment in public and professional life could well be, to a certain degree, running away from whatever it is that you don’t master or control. You’d win some inner serenity if you accepted to walk the road of self-knowledge.' }
];

export const init = async () => {
  const tests: Test[] = [
    createData(
      1,
      "Psychological Test",
      questions,
      answers,
      results,
    ),
  ];

  await db.push("/tests", tests);

  console.log("Database initialized");
};

export default db;
