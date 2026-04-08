
const MentalHealthQuestions = ({ back }:{ back: () => void; }) => {
    return (
        <div>
            questions
            <button onClick={back} className="text-white">back</button>
        </div>
    );
};

export default MentalHealthQuestions;