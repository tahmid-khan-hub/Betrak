"use client"
import { useState } from "react";

interface Question {
    id: string;
    question: string;
}

const MentalHealthQuestions = ({ back }:{ back: () => void; }) => {
    const[questions, setQuestions] = useState<Question[]>([]);
    
    return (
        <div>
            
        </div>
    );
};

export default MentalHealthQuestions;