document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Verifica se a tarefa não está vazia
        if (taskText !== '') {
            // Cria um novo elemento de lista (li)
            const li = document.createElement('li');
            li.textContent = taskText;
            
            // Adiciona a tarefa na lista (ul)
            taskList.appendChild(li);
            
            // Limpa o campo de texto e volta o foco para ele
            taskInput.value = '';
            taskInput.focus();
        }
    }

    // Adiciona evento de clique no botão
    addButton.addEventListener('click', addTask);

    // Adiciona evento de apertar a tecla Enter no input
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
