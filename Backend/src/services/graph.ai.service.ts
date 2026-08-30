import { StateSchema, MessagesValue, StateGraph, START, END } from "@langchain/langgraph"
//every graph has a start and an end node

type Judgement = {
    winner: "solution_1" | "solution2";
    solution_1_score: number;
    solution_2_score: number;
}

// This AiBAttleState is a custom type.
// ek graph me ek state ka matlab hota hai ki "jab ek node se data dusre node pe jaarha hota hai toh w o data generally state me jaarha hota hai"
// ye state hi data ek node se dusre node pe data transfer krti hai
//ye AIbattleState ek state ka type hai jisme defined hai ki jo state ek node se dusre node jayegi us state me kya kya cheez rahegi

type AIBattleState = {
    messages: typeof MessagesValue;
    solution_1: string;
    solution_2: string;
    judgement: Judgement;
}

const state: AIBattleState = {
    messages: MessagesValue,
    solution_1: "",
    solution_2: "",
    judgement:{
        winner: "solution_1",
        solution_1_score: 0,
        solution_2_score: 0
    }
}