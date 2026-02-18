let completedLessons = new Set(JSON.parse(localStorage.getItem('backendCompletedLessons') || '[]'));
let currentTheme = localStorage.getItem('theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderSidebar();
    renderModulesGrid();
    updateProgress();
    setupEventListeners();
    hljs.highlightAll();
});

function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = '';

    BACKEND_CURRICULUM.forEach((module, moduleIndex) => {
        const moduleSection = document.createElement('div');
        moduleSection.className = 'module-section';

        const moduleHeader = document.createElement('div');
        moduleHeader.className = 'module-header';
        if (moduleIndex === 0) moduleHeader.classList.add('expanded');

        moduleHeader.innerHTML = `
            <div class="module-title">
                <span class="module-number">M${module.id}</span>
                <h3>${module.title.replace('Module ' + module.id + ': ', '')}</h3>
            </div>
            <svg class="module-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        `;

        const lessonsList = document.createElement('div');
        lessonsList.className = 'lessons-list';
        if (moduleIndex === 0) lessonsList.classList.add('expanded');

        if (module.lessons_data && module.lessons_data.length > 0) {
            module.lessons_data.forEach(lesson => {
                const lessonItem = document.createElement('div');
                lessonItem.className = 'lesson-item';
                if (completedLessons.has(lesson.id)) lessonItem.classList.add('completed');

                lessonItem.innerHTML = `
                    <span class="lesson-title">${lesson.title}</span>
                    <svg class="lesson-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                `;

                lessonItem.addEventListener('click', () => loadLesson(lesson));
                lessonsList.appendChild(lessonItem);
            });
        }

        moduleHeader.addEventListener('click', () => toggleModule(moduleHeader, lessonsList));

        moduleSection.appendChild(moduleHeader);
        moduleSection.appendChild(lessonsList);
        nav.appendChild(moduleSection);
    });
}

function renderModulesGrid() {
    const grid = document.getElementById('modules-grid');
    grid.innerHTML = '';

    BACKEND_CURRICULUM.forEach(module => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <div class="module-card-header">
                <span class="module-icon">${module.icon}</span>
                <span class="module-card-number">Module ${module.id}</span>
            </div>
            <h3>${module.title.replace('Module ' + module.id + ': ', '')}</h3>
            <p>${module.description}</p>
            <div class="module-card-meta">
                <span>📚 ${module.lessons} lessons</span>
                <span>⏱️ ${module.duration}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            if (module.lessons_data && module.lessons_data.length > 0) {
                loadLesson(module.lessons_data[0]);
            }
        });

        grid.appendChild(card);
    });
}

function loadLesson(lesson) {
    currentLesson = lesson;

    const welcomeScreen = document.getElementById('welcome-screen');
    const lessonContent = document.getElementById('lesson-content');

    welcomeScreen.style.display = 'none';
    lessonContent.style.display = 'block';

    document.querySelectorAll('.lesson-item').forEach(item => item.classList.remove('active'));

    lessonContent.innerHTML = `
        <div class="lesson-header">
            <div class="lesson-meta">
                <span class="lesson-badge">${lesson.module}</span>
            </div>
            <h1>${lesson.title}</h1>
        </div>
        
        ${lesson.story || ''}
        
        <div class="lesson-body">
            ${lesson.content || '<p>Lesson content coming soon...</p>'}
        </div>
        
        <div class="lesson-navigation">
            <button class="nav-button" onclick="previousLesson()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <div class="nav-button-content">
                    <div class="nav-button-label">Previous</div>
                    <div class="nav-button-title">Lesson</div>
                </div>
            </button>
            
            <button class="nav-button" onclick="markComplete()" style="flex: 0.5; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none;">
                <span style="flex: 1; font-weight: 600;">Mark Complete</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </button>
            
            <button class="nav-button" onclick="nextLesson()">
                <div class="nav-button-content">
                    <div class="nav-button-label">Next</div>
                    <div class="nav-button-title">Lesson</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `;

    lessonContent.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
    });

    window.scrollTo(0, 0);
}

function markComplete() {
    if (currentLesson) {
        completedLessons.add(currentLesson.id);
        localStorage.setItem('backendCompletedLessons', JSON.stringify([...completedLessons]));
        updateProgress();
        renderSidebar();
        nextLesson();
    }
}

function toggleModule(header, lessonsList) {
    header.classList.toggle('expanded');
    lessonsList.classList.toggle('expanded');
}

function startLearning() {
    if (BACKEND_CURRICULUM[0].lessons_data && BACKEND_CURRICULUM[0].lessons_data.length > 0) {
        loadLesson(BACKEND_CURRICULUM[0].lessons_data[0]);
    }
}

function updateProgress() {
    const totalLessons = BACKEND_CURRICULUM.reduce((sum, module) => sum + (module.lessons_data?.length || 0), 0);
    const completed = completedLessons.size;
    const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-count').textContent = totalLessons;
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = percentage + '% Complete';
}

function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    navigator.clipboard.writeText(codeBlock.textContent);
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = 'Copy', 2000);
}

function setupEventListeners() {
    document.getElementById('theme-toggle').addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.lesson-item').forEach(item => {
            const title = item.querySelector('.lesson-title').textContent.toLowerCase();
            item.style.display = title.includes(query) ? 'flex' : 'none';
        });
    });
}

function nextLesson() {
    if (!currentLesson) return;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex < allLessons.length - 1) {
        loadLesson(allLessons[currentIndex + 1]);
    }
}

function previousLesson() {
    if (!currentLesson) return;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex > 0) {
        loadLesson(allLessons[currentIndex - 1]);
    }
}

function getAllLessons() {
    const all = [];
    BACKEND_CURRICULUM.forEach(module => {
        if (module.lessons_data) {
            all.push(...module.lessons_data);
        }
    });
    return all;
}
