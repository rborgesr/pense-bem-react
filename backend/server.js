const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Perguntas e gabaritos do Programa 1 (1 a 30)
const questionsProgram1 = [
    {
        id: 1,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "Curto"
    },
    {
        id: 2,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: "Exercício"
    },
    {
        id: 3,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "Faro"
    },
    {
        id: 4,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "Inteligente"
    },
    {
        id: 5,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: "Músculos"
    },
    {
        id: 6,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "Carinho"
    },
    {
        id: 7,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "4 a 5"
    },
    {
        id: 8,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "10"
    },
    {
        id: 9,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: "Mamar"
    },
    {
        id: 10,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "Fechados"
    },
    {
        id: 11,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "Mãe"
    },
    {
        id: 12,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: "Dormem e mamam"
    },
    {
        id: 13,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "Olhos"
    },
    {
        id: 14,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "Irmãozinhos"
    },
    {
        id: 15,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "2 quilos"
    },
    {
        id: 16,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "Dentes"
    },
    {
        id: 17,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "Semanas"
    },
    {
        id: 18,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "Desmamar"
    },
    {
        id: 19,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "Papinha"
    },
    {
        id: 20,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "D de tigre"
    },
    {
        id: 21,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: "e de onça"
    },
    {
        id: 22,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "F de GIRAFA"
    },
    {
        id: 23,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "A de ZEBRA"
    },
    {
        id: 24,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "G de DALMATA"
    },
    {
        id: 25,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "C de JACARE"
    },
    {
        id: 26,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: "B de Cobra Coral"
    },
    {
        id: 27,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "C de passarinho azul"
    },
    {
        id: 28,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "D de cachorro"
    },
    {
        id: 29,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "B de pinto"
    },
    {
        id: 30,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: "D de sapo"
    },
];

// Perguntas e gabaritos do Programa 2 (31 a 60)
const questionsProgram2 = [
    {
        id: 31,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C'
    },
    {
        id: 32,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B'
    },
    {
        id: 33,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B'
    },
    {
        id: 34,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D'
    },
    {
        id: 35,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D'
    },
    {
        id: 36,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B'
    },
    {
        id: 37,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D'
    },
    {
        id: 38,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A'
    },
    {
        id: 39,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B'
    },
    {
        id: 40,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A'
    },
    {
        id: 41,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A'
    },
    {
        id: 42,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D'
    },
    {
        id: 43,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A'
    },
    {
        id: 44,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "vermelha"
    },
    {
        id: 45,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "finge"
    },
    {
        id: 46,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "brigar"
    },
    {
        id: 47,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: "primeiro"
    },
    {
        id: 48,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "comportada"
    },
    {
        id: 49,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: "raptam"
    },
    {
        id: 50,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: "bengala"
    },
    {
        id: 51,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Tigela ("Pongo")
    },
    {
        id: 52,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Cama de cachorro (almofada)
    },
    {
        id: 53,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Osso
    },
    {
        id: 54,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Coleira
    },
    {
        id: 55,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Bacia com esponja
    },
    {
        id: 56,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Casinha de cachorro ("Pongo")
    },
    {
        id: 57,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Lobos e ursos
    },
    {
        id: 58,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Conduzir
    },
    {
        id: 59,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Carneiros
    },
    {
        id: 60,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Rebanho
    }
];

// Perguntas e gabaritos do Programa 3 (61 a 90)
const questionsProgram3 = [
    {
        id: 61,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' // Correto: Mamífero
    },
    {
        id: 62,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: Quadrúpede
    },
    {
        id: 63,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' // Correto: Quatro
    },
    {
        id: 64,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: Sentidos
    },
    {
        id: 65,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' // Correto: Sons
    },
    {
        id: 66,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' // Correto: Faro
    },
    {
        id: 67,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 68,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 69,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 70,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 71,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 72,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 73,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 74,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 75,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 76,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 77,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 78,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 79,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 80,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 81,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 82,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 83,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 84,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 85,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 86,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 87,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 88,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 89,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 90,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    }
];    

// Perguntas e gabaritos do Programa 4 (91 a 120)
const questionsProgram4 = [
    {
        id: 91,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 92,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 93,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 94,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 95,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 96,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 97,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 98,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 99,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 100,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 101,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 102,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 103,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 104,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 105,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 106,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 107,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 108,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 109,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 110,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 111,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 112,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 113,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 114,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 115,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 116,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 117,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 118,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 119,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 120,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    }
];// Perguntas e gabaritos do Programa 4 (91 a 120)
const questionsProgram5 = [
    {
        id: 121,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 122,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 123,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 124,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 125,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 126,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 127,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 128,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 129,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 130,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 131,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 132,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 133,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 134,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 135,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 136,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 137,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 138,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 139,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 140,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 141,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 142,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 143,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 144,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 145,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 146,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'D' 
    },
    {
        id: 147,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    {
        id: 148,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'B' 
    },
    {
        id: 149,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'A' 
    },
    {
        id: 150,
        question: "",
        options: ['A', 'B', 'C', 'D'],
        answer: 'C' 
    },
    

];


app.use(cors());

// Rota para o Programa 1 (questões 1 a 30)
app.get('/questions/program1', (req, res) => {
    res.json(questionsProgram1); // Retorna questões de 1 a 30
});

// Rota para o Programa 2 (questões 31 a 60)
app.get('/questions/program2', (req, res) => {
    res.json(questionsProgram2); // Retorna questões de 31 a 60
});

// Rota para o Programa 3 (questões 61 a 90)
app.get('/questions/program3', (req, res) => {
    res.json(questionsProgram3); // Retorna questões de 61 a 90
});

// Rota para o Programa 4 (questões 91 a 120)
app.get('/questions/program4', (req, res) => {
    res.json(questionsProgram4); // Retorna questões de 91 a 120
});

// Rota para o Programa 5 (questões 121 a 150)
app.get('/questions/program5', (req, res) => {
    res.json(questionsProgram5); // Retorna questões de 121 a 150
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
