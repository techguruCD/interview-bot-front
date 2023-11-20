import React from "react";

type QuestionFieldProps = {
    onDelete: () => void;
    question: string;
    answer: string;
    onChangeQuestion: (value: string) => void;
    onChangeAnswer: (value: string) => void;
};

const QuestionField: React.FC<QuestionFieldProps> = ({
    onDelete,
    question,
    answer,
    onChangeQuestion,
    onChangeAnswer
}) => {
    return (
        <div className="mb-4 w-[100%] ml-2">
            <input
                className="text-lg font-semibold mt-2 mb-2 h-[40px] w-[100%]"
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => onChangeQuestion(e.target.value)}
            />
            <textarea
                value={answer}
                onChange={(e) => onChangeAnswer(e.target.value)}
                placeholder="Enter your answer here..."
            />
            <button className="text-white p-2 rounded-md bg-red-500" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default QuestionField;
