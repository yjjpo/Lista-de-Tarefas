document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const errorMessage = document.getElementById('errorMessage');

    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Verifica se a tarefa não está vazia
        if (taskText !== '') {
            errorMessage.style.display = 'none';

            // Cria um novo elemento de lista (li)
            const li = document.createElement('li');
            
            // Cria um elemento span para o texto da tarefa
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            
            // Cria um contêiner para os botões
            const btnContainer = document.createElement('div');
            btnContainer.className = 'btn-container';

            // Cria o botão de concluir
            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Concluir';
            completeBtn.className = 'complete-btn';
            
            // Adiciona a funcionalidade de concluir a tarefa
            completeBtn.addEventListener('click', () => {
                taskSpan.classList.toggle('completed-text');
                li.classList.toggle('completed-li');
            });

            // Cria o botão de excluir
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.className = 'delete-btn';
            
            // Adiciona a funcionalidade de excluir a tarefa
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            // Adiciona os botões no contêiner
            btnContainer.appendChild(completeBtn);
            btnContainer.appendChild(deleteBtn);

            // Adiciona o texto e os botões dentro do li
            li.appendChild(taskSpan);
            li.appendChild(btnContainer);
            
            // Adiciona a tarefa na lista (ul)
            taskList.appendChild(li);
            
            // Limpa o campo de texto e volta o foco para ele
            taskInput.value = '';
            taskInput.focus();
        } else {
            // Mostra a mensagem de erro se estiver vazio
            errorMessage.style.display = 'block';
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
