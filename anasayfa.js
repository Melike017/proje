document.addEventListener('DOMContentLoaded', function() {
    // Alışkanlıklar
    const habitForm = document.getElementById('habit-form');
    const habitInput = document.getElementById('habit-input');
    const habitList = document.querySelector('.habit-list');

    habitForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newHabit = habitInput.value.trim();
        if (newHabit) {
            addHabit(newHabit);
            habitInput.value = '';
        }
    });

    habitList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    function addHabit(habit) {
        const habitItem = document.createElement('div');
        habitItem.classList.add('habit-item');
        habitItem.innerHTML = `
            <span>${habit}</span>
            <button class="delete-btn">Sil</button>
        `;
        habitList.appendChild(habitItem);
    }

    // Günlük İşler
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.querySelector('.section:nth-child(2) .task-list');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTask = taskInput.value.trim();
        if (newTask) {
            addTask(newTask, taskList);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    function addTask(task, list) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Sil</button>
        `;
        list.appendChild(taskItem);
    }

    // Görevler
    const goalForm = document.getElementById('goal-form');
    const goalInput = document.getElementById('goal-input');
    const goalList = document.querySelector('.section:nth-child(3) .task-list');

    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newGoal = goalInput.value.trim();
        if (newGoal) {
            addTask(newGoal, goalList);
            goalInput.value = '';
        }
    });

    goalList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});

