import React, { useState } from "react";
import { Plus, Dash } from 'react-bootstrap-icons';

const FAQ = () => {
    // Create an array to store the state of each FAQ item
    const [showAnswer, setShowAnswer] = useState([false, false]);

    const toggleAnswer = (index) => {
        // Create a copy of the showAnswer array to avoid directly mutating state
        const newShowAnswer = [...showAnswer];
        newShowAnswer[index] = !newShowAnswer[index];
        setShowAnswer(newShowAnswer);
    };

    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-semibold">FAQ (Pertanyaan Umum)</h2>
            <div className="p-8  rounded-lg shadow-lg">
                <div className="flex justify-between items-center cursor-pointer transition duration-300 transform " onClick={() => toggleAnswer(0)}>
                    <h3 className="text-xl font-semibold mb-2">Berapa biaya pembuatan website?</h3>
                    <div className={`w-8 h-8 ${showAnswer[0] ? "rotate-45" : ""}`}>
                        {showAnswer[0] ? <Dash size={20} /> : <Plus size={20} />}
                    </div>
                </div>
                <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${showAnswer[0] ? "max-h-20" : "max-h-0"}`}>
                    <p>
                        Biaya pembuatan website dapat bervariasi tergantung pada kompleksitas dan fitur yang Anda inginkan. Hubungi kami untuk penawaran yang sesuai dengan anggaran Anda.
                    </p>
                </div>
            </div>
            <div className="p-8  rounded-lg shadow-lg">
                <div className="flex justify-between items-center cursor-pointer transition duration-300 transform " onClick={() => toggleAnswer(1)}>
                    <h3 className="text-xl font-semibold mb-2">Berapa lama proses pembuatan website?</h3>
                    <div className={`w-8 h-8 ${showAnswer[1] ? "rotate-45" : ""}`}>
                        {showAnswer[1] ? <Dash size={20} /> : <Plus size={20} />}
                    </div>
                </div>
                <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${showAnswer[1] ? "max-h-20" : "max-h-0"}`}>
                    <p>
                        Waktu pembuatan website juga bervariasi, tergantung pada skala proyek. Kami akan memberikan perkiraan waktu yang lebih akurat setelah konsultasi awal.
                    </p>
                </div>
            </div>
            {/* Add more FAQ items here following the same structure. */}
        </div>
    );
};

export default FAQ;
