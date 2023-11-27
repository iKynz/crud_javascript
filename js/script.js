'use strict';

const openModal = () => document.getElementById('modal').classList.add('active')
const closeModal = () => document.getElementById('modal').classList.remove('active')

// Funções
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (db_client) => localStorage.setItem('db_client', JSON.stringify(db_client));

// CRUD -> Create Read Update Delete

// CREATE
const createClient = (client) => {
    const db_client = getLocalStorage();
    db_client.push(client);
    setLocalStorage(db_client);
};

// READ 
const readClient = () => getLocalStorage();

// UPDATE
const updadeClient = (index, client) => {
    const db_client = readClient();
    db_client[index] = client;
    setLocalStorage(db_client);
}

// DELETE
const deleteClient = (index) => {
    const db_client = readClient();
    db_client.splice(index, 1);
    setLocalStorage(db_client);
}

// Interação com layout
const isValidFields = () => {
    return document.getElementById('form_client').reportValidity();
};

const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value,
        };
        createClient(client);
        alert('Cliente Criado com sucesso!');
    };
};

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveClient);