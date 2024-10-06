import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

// Componente da Tela Inicial
function Home() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number1 === '1' && number2 === '3' && number3 === '1') {
            navigate('/questions/program1'); // Programa 1
        } else if (number1 === '1' && number2 === '3' && number3 === '2') {
            navigate('/questions/program2'); // Programa 2
        } else if (number1 === '1' && number2 === '3' && number3 === '3') {
            navigate('/questions/program3'); // Programa 3
        } else if (number1 === '1' && number2 === '3' && number3 === '4') {
            navigate('/questions/program4'); // Programa 4
        } else if (number1 === '1' && number2 === '3' && number3 === '5') {
            navigate('/questions/program5'); // Programa 5
        } else {
            alert('Sequência incorreta! Tente novamente.');
        }
    };

    return (
        <div className="Home">
            <h1 className="header-title">Digite o programa</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        value={number1}
                        onChange={(e) => setNumber1(e.target.value)}
                        className="input-box"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={number2}
                        onChange={(e) => setNumber2(e.target.value)}
                        className="input-box"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={number3}
                        onChange={(e) => setNumber3(e.target.value)}
                        className="input-box"
                    />
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
}

// Componente do Questionário
function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('');
    const [gameFinished, setGameFinished] = useState(false); // Estado para verificar se o jogo terminou
    const location = useLocation();
    const navigate = useNavigate(); // Adiciona useNavigate para redirecionamento

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const program = location.pathname.includes('program1') ? 'program1'
                    : location.pathname.includes('program2') ? 'program2'
                    : location.pathname.includes('program3') ? 'program3'
                    : location.pathname.includes('program4') ? 'program4'
                    : 'program5'; // Assume que é o programa 5
                const response = await axios.get(`http://localhost:5000/questions/${program}`);
                setQuestions(response.data);
            } catch (error) {
                console.error("There was an error fetching the questions!", error);
            }
        };
        fetchQuestions();
    }, [location.pathname]);

    const handleAnswer = (selectedOption) => {
        const correctAnswer = questions[currentQuestionIndex].answer;
        let points = 0; // Inicializa os pontos para a pergunta atual

        // Verifica se a resposta está correta
        if (selectedOption === correctAnswer) {
            // Pontuação baseada nas tentativas
            switch (attempts) {
                case 0:
                    points = 3; // 1ª tentativa
                    break;
                case 1:
                    points = 2; // 2ª tentativa
                    break;
                case 2:
                    points = 1; // 3ª tentativa
                    break;
                default:
                    points = 0; // 0 pontos se não acertar
            }
            setScore(prevScore => prevScore + points); // Atualiza a pontuação total
            setMessage('Resposta correta!'); // Mensagem correta
            setAttempts(0); // Reinicia as tentativas
            setCurrentQuestionIndex(currentQuestionIndex + 1); // Avança para a próxima pergunta
        } else {
            setMessage('Resposta incorreta. Tente novamente.'); // Mensagem incorreta
            setAttempts(attempts + 1); // Incrementa as tentativas
            
            if (attempts >= 2) { // Se já tentou 3 vezes
                setMessage(`A resposta correta era: ${correctAnswer}`); // Mostra a resposta correta
                setCurrentQuestionIndex(currentQuestionIndex + 1); // Avança para a próxima pergunta
                setAttempts(0); // Reinicia as tentativas
            }
        }

        // Se chegar ao final
        if (currentQuestionIndex + 1 === questions.length) {
            const finalScore = score + points; // Calcula a pontuação final antes de resetar
            setGameFinished(true); // Define que o jogo terminou
        }
    };

    const resetGame = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setAttempts(0);
        setMessage('');
        setGameFinished(false); // Reseta o estado do jogo
    };

    return (
        <div className="App">
            <h1>Pense Bem</h1>
            {gameFinished ? ( // Exibe a tela de fim de jogo
                <div>
                    <h2>Fim do jogo!</h2>
                    <h3>Pontuação: {score}</h3>
                    <button onClick={resetGame} className="reset-button">
                        Reiniciar Jogo
                    </button>
                    <button onClick={() => navigate('/')} className="reset-button2">
                        Escolher outro livro
                    </button>
                </div>
            ) : (
                questions.length > 0 && currentQuestionIndex < questions.length && (
                    <div>
                        <div className="question-box">
                            <h2>{String(currentQuestionIndex + 1 + (parseInt(location.pathname.split('/').pop().replace('program', '')) - 1) * 30).padStart(3, '0')} {questions[currentQuestionIndex].question}</h2>
                        </div>
                        <div className="attempt-box">
                            <p>{`Tentativa ${attempts + 1} de 3`}</p>
                        </div>
                        <div className="button-grid">
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => handleAnswer(option.charAt(0))} // Passa apenas a letra
                                    className={`option-button option-${index}`}
                                >
                                    {option.charAt(0)} {/* Exibe apenas a letra */}
                                </button>
                            ))}
                        </div>
                        <div className="message-box">{message}</div> {/* Exibe a mensagem */}
                        {/* Botão de Reiniciar Jogo durante o jogo */}
                        <button onClick={resetGame} className="reset-button">
                            Reiniciar Jogo
                        </button>
                    </div>
                )
            )}
        </div>
    );
}


// Componente Principal
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Tela Inicial */}
                <Route path="/questions/program1" element={<Quiz />} /> {/* Tela do Programa 1 */}
                <Route path="/questions/program2" element={<Quiz />} /> {/* Tela do Programa 2 */}
                <Route path="/questions/program3" element={<Quiz />} /> {/* Tela do Programa 3 */}
                <Route path="/questions/program4" element={<Quiz />} /> {/* Tela do Programa 4 */}
                <Route path="/questions/program5" element={<Quiz />} /> {/* Tela do Programa 5 */}
            </Routes>
        </Router>
    );
}

export default App;
