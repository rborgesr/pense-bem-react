import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Home() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number1 === '1' && number2 === '3' && number3 === '1') {
            navigate('/questions/book1'); // Navega para o questionário do Programa 1
        } else if (number1 === '1' && number2 === '3' && number3 === '2') {
            navigate('/questions/book2'); // Navega para o questionário do Programa 2
        } else {
            alert('Sequência incorreta! Tente novamente.');
        }
    };

    return (
        <div className="App">
            <h1>Pense Bem - Acesso ao Livro</h1>
            <form onSubmit={handleSubmit}>
                <div className="number-box">
                    <label>
                        Número 1:
                        <input
                            type="text"
                            value={number1}
                            onChange={(e) => setNumber1(e.target.value)}
                        />
                    </label>
                </div>
                <div className="number-box">
                    <label>
                        Número 2:
                        <input
                            type="text"
                            value={number2}
                            onChange={(e) => setNumber2(e.target.value)}
                        />
                    </label>
                </div>
                <div className="number-box">
                    <label>
                        Número 3:
                        <input
                            type="text"
                            value={number3}
                            onChange={(e) => setNumber3(e.target.value)}
                        />
                    </label>
                </div>
                <div className="enter-box">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Home;
