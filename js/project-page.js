const params = new URLSearchParams(window.location.search);

const projectId = params.get("id");

const project = projects.find(project => project.id === projectId);

if(!project){
    document.querySelector(
        ".project-page"
    ).innerHTML = `
        <div class="project-not-found">

        

            <h2>Project Not Found</h2>

            <p>
                The requested project could not be found.
            </p>
            
            <a href="index.html">
            ← Back to Projects
             </a>

            
        </div>
    `;
} else {

    loadProject(project);
}

function loadProject(project){

    document.title = 
        `${project.title} | Gavin Murdock`;

    document.getElementById("project-title").textContent = project.title;

    document.getElementById("project-description").textContent = project.description;

    document.getElementById("project-long-description").textContent = project.longDescription;

    createProjectPageTags(project.tags);

    displayProjectDate(project.date);

    createProjectLinks(project.links);

    createMediaGallery(project.media);

}

function createProjectPageTags(tags){

    const tagContainer = 
        document.getElementById(
            "project-page-tags"
        );

    tagContainer.innerHTML = 
        tags.map(tag =>{
            const colorIndex = getTagColor(tag);

            return `<span class="tag tag-color-${colorIndex}"> ${tag} </span>`;
        }).join("");

}

function getTagColor(tag) {

    const preferredColors = {

        "Java": 3,
        "C#": 1,
        "C++": 0,
        "Unity": 2,
        "Python": 0,
        "JavaScript": 6,
        "HTML": 3,
        "CSS": 0
    };

    if (
        preferredColors.hasOwnProperty(tag)
    ) {

        return preferredColors[tag];

    }
    let hash = 0;

    for (let i = 0; i < tag.length; i++) {
        hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }

    return Math.abs(hash) % 8;

}

function displayProjectDate(date){

    const dateElement = document.getElementById("project-date");

    const formattedDate = new Date(date + "T00:00:00").toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    dateElement.innerHTML = `
        <span class="detail-label">
            Date
        </span>

        <span>
            ${formattedDate}
        </span
    `;

}

function createProjectLinks(links) {

    const linkContainer =
        document.getElementById("project-links");

    linkContainer.innerHTML = "";

    links.forEach(link => {

        const linkElement =
            document.createElement("a");

        linkElement.href = link.url;

        linkElement.textContent = link.name;

        linkElement.target = "_blank";

        linkElement.rel = "noopener noreferrer";

        linkContainer.appendChild(linkElement);

    });
}

function createMediaGallery(media){
    const mainMedia = document.getElementById("main-media");

    const thumbnails = document.getElementById("media-thumbnails");

    if(!media || media.length === 0){
        document.querySelector(".media-gallery").style.display = "none";
        return;
    }  

    displayMedia(media[0]);

    thumbnails.innerHTML = "";

    media.forEach((item, index) => {

        const thumbnail = document.createElement("button");

        thumbnail.classList.add("media-thumbnail");

        if(item.type === "image"){
            thumbnail.innerHTML = `
                <img src="${item.src}"
                alt="Project media">
            `;
        }

        if(item.type === "video"){
            thumbnail.innerHTML = `
                <video src="${item.src}">
                </video>
            `;
        }

        if (item.type === "youtube") {

            const videoId =
                getYouTubeVideoId(item.src);

                thumbnail.innerHTML = `
                    <img
                        src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg"
                        alt="Video thumbnail">
                `;
        }

           thumbnail.addEventListener(
            "click",
            () => {

                displayMedia(item);

                document
                    .querySelectorAll(".media-thumbnail")
                    .forEach(button =>
                        button.classList.remove("active")
                    );

                thumbnail.classList.add("active");
            }
        );

        thumbnails.appendChild(
            thumbnail
        );

    });
}

function displayMedia(item) {

    const mainMedia =
        document.getElementById("main-media");

    if (item.type === "image") {

        mainMedia.innerHTML = `
            <img
                src="${item.src}"
                alt="${item.alt || "Project media"}">
        `;

    }

    if (item.type === "video") {

        mainMedia.innerHTML = `
            <video
                src="${item.src}"
                controls>
            </video>
        `;

    }

    if (item.type === "youtube") {

        const videoId =
            getYouTubeVideoId(item.src);

        mainMedia.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${videoId}"
                title="Project video"
                frameborder="0"
                allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture;
                    web-share
                "
                allowfullscreen>
            </iframe>
        `;

    }
}

function getYouTubeVideoId(url) {

    const parsedUrl =
        new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.substring(1);
    }

    return parsedUrl.searchParams.get("v");
}