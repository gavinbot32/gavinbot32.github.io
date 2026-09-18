const projectGrid =
    document.getElementById("project-grid");

const filterButtons =
    document.getElementById("filter-buttons");

const sortProjects =
    document.getElementById("sort-projects");


let activeTag = "All";


function createProjectCard(project) {

    const card =
        document.createElement("article");

    card.classList.add("project-card");

    card.innerHTML = `
        <div class="project-image">
            <img
                src="${project.thumbnail}"
                alt="${project.title}">
        </div>

        <div class="project-content">

            <h3>${project.title}</h3>

            <p>
                ${project.description}
            </p>

            <div class="project-tags">
                ${createTags(project.tags)}
            </div>

        </div>
    `;

    card.addEventListener("click", () => {
        window.location.href = `project.html?id=${project.id}`;
    });

    return card;
}


function createTags(tags) {

    return tags
        .map(tag => {
            const colorIndex = getTagColor(tag);

            return `
                <span class="tag tag-color-${colorIndex}">
                    ${tag}
                </span>
            `;
        })
        .join("");
}

function getTagColor(tag) {

    const preferredColors = {
        "Java": 3,
        "C#": 1,
        "C++": 0,
        "Unity": 5,
        "Python": 0,
        "JavaScript": 6,
        "HTML": 4,
        "CSS": 0
    };

    if (preferredColors.hasOwnProperty(tag)) {
        return preferredColors[tag];
    }

    let hash = 0;

    for (let i = 0; i < tag.length; i++) {
        hash =
            tag.charCodeAt(i) +
            ((hash << 5) - hash);
    }

    return Math.abs(hash) % 8;
}


function getAllTags() {

    const tags = new Set();

    projects.forEach(project => {

        project.tags.forEach(tag => {
            tags.add(tag);
        });

    });

    return [
        "All",
        ...Array.from(tags).sort()
    ];
}


function createFilterButtons() {

    const tags = getAllTags();

    filterButtons.innerHTML = "";

    tags.forEach(tag => {

        const button =
            document.createElement("button");

        button.textContent = tag;

        button.classList.add("filter-button");

        if (tag !== "All") {
            const colorIndex = getTagColor(tag);

            button.classList.add(
                `tag-color-${colorIndex}`
            );
        }

        if (tag === activeTag) {
            button.classList.add("active");
        }

        button.addEventListener(
            "click",
            () => {

                activeTag = tag;

                updateProjects();
                updateActiveFilter();

            }
        );

        filterButtons.appendChild(button);

    });
}


function updateActiveFilter() {

    const buttons =
        document.querySelectorAll(
            ".filter-button"
        );

    buttons.forEach(button => {

        button.classList.toggle(
            "active",
            button.textContent === activeTag
        );

    });
}


function filterProjects(projectList) {

    if (activeTag === "All") {
        return projectList;
    }

    return projectList.filter(project =>
        project.tags.includes(activeTag)
    );
}


function sortProjectList(projectList) {

    const sortedProjects =
        [...projectList];

    const sortMode =
        sortProjects.value;


    if (sortMode === "newest") {

        sortedProjects.sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

    }


    if (sortMode === "oldest") {

        sortedProjects.sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    }


    if (sortMode === "alphabetical") {

        sortedProjects.sort(
            (a, b) =>
                a.title.localeCompare(b.title)
        );

    }


    return sortedProjects;
}


function updateProjects() {

    let visibleProjects =
        filterProjects(projects);

    visibleProjects =
        sortProjectList(visibleProjects);

    projectGrid.innerHTML = "";

    visibleProjects.forEach(project => {

        const projectCard =
            createProjectCard(project);

        projectGrid.appendChild(
            projectCard
        );

    });

}


sortProjects.addEventListener(
    "change",
    updateProjects
);


createFilterButtons();

updateProjects();