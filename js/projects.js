const projects = [
    {
    id: "maze-runner",

    title: "Maze Runner",

    subtitle:
        "A Java maze-generation and BFS pathfinding visualization application.",

    date: "2025-08-08",

    status: "Completed",

    featured: true,

    projectType: "School Project",

    description:
        "A Java Swing application that generates mazes and visualizes breadth-first search pathfinding.",

    longDescription:
        "Maze Runner is a desktop Java application developed as the final project for a Java programming course. The program generates mazes and uses breadth-first search to determine a path between a starting point and destination. The interface visually demonstrates the search process, allowing the user to see how BFS explores the maze before identifying the shortest available path.",

    role:
        "Developer",

    teamSize: 3,

    context: {
        course: "Java Programming",
        institution: "",
        semester: "",
        assignment: "Final Course Project"
    },

    highlights: [
        "Collaborated with a three-person development team to design and complete the application.",
        "Implemented breadth-first search pathfinding for navigating generated mazes.",
        "Built application functionality in Java using the Swing GUI framework.",
        "Developed the project as the final assignment for a Java-focused programming course."
    ],

    features: [
        "Maze generation",
        "Breadth-first search pathfinding",
        "Visual pathfinding demonstration",
        "Java Swing desktop interface"
    ],

    technicalDetails: {
        language: "Java",
        framework: "Swing",
        engine: "",
        libraries: [],
        tools: [
            "Git",
            "GitHub"
        ]
    },

    thumbnail:
        "assets/projects/maze-runner/screenshot-02.jpg",

    media: [
        {
            type: "image",
            src: "assets/projects/maze-runner/screenshot-01.jpg",
            alt: "Maze Runner application interface showing a generated maze."
        },

        {
            type: "image",
            src: "assets/projects/maze-runner/screenshot-02.jpg",
            alt: "Maze Runner displaying a maze during pathfinding."
        },

        {
            type: "image",
            src: "assets/projects/maze-runner/screenshot-03.jpg",
            alt: "Maze Runner application showing a completed path."
        },

        {
            type: "youtube",
            src: "https://youtu.be/WMb4osd2zvA",
            caption: "Demonstration of Maze Runner in operation."
        }
    ],

    tags: [
        "School Project",
        "Java",
        "Swing",
        "BFS"
    ],

    links: [
        {
            name: "View Source",
            url: "https://github.com/gavinbot32/MazeRunner"
        },

        {
            name: "Download Page",
            url: "https://github.com/gavinbot32/MazeRunner/releases/tag/v1.0"
        }
    ]
},
{
    id: "twitch-chat-terminal",

    title: "Twitch Chat Terminal",

    subtitle:
        "A terminal-based Twitch IRC client written in modern C++20.",

    date: "2025-06-15",

    status: "Completed",

    featured: true,

    projectType: "Personal Project",

    description:
        "A terminal-based Twitch chat client written in C++20 with asynchronous networking, OAuth validation, colored chat output, badges, highlights, and extensible slash commands.",

    longDescription:
        "Twitch Chat Terminal is a terminal-based Twitch chat client I created in June 2025 as a project for learning modern C++. The application connects directly to Twitch IRC and allows users to send and receive chat messages without using the Twitch website. Over the course of the project, I implemented asynchronous SSL networking, OAuth token validation, terminal color handling, Twitch badges, configurable highlights, JSON-based settings, and an extensible command system. The project was completed in 2025 and has only received minor maintenance since then, including updates required to remain compatible with changes to Twitch's TLS requirements.",

    role:
        "Solo Developer",

    teamSize: 1,

    duration:
        "Approximately 1 month",

    context: {
        course: "",
        institution: "",
        semester: "",
        assignment: "Personal project created to learn C++"
    },

    highlights: [
        "Built an asynchronous SSL connection to Twitch IRC using stand-alone ASIO.",
        "Implemented Twitch OAuth token validation through Twitch's authentication API.",
        "Created an extensible slash-command system using a command registry architecture.",
        "Implemented Twitch username colors, badge abbreviations, and configurable message highlighting.",
        "Added persistent JSON-based settings and credential storage using nlohmann/json.",
        "Implemented terminal color down-sampling for true-color, 256-color, and 16-color terminals.",
        "Updated the networking implementation after completion to remain compatible with changes to Twitch's TLS requirements."
    ],

    features: [
        "Live Twitch IRC chat",
        "Send and receive chat messages",
        "OAuth token validation",
        "Twitch username colors",
        "Badge display",
        "Custom user and badge highlights",
        "Persistent JSON configuration",
        "Configurable channel settings",
        "Extensible slash-command system",
        "True-color, 256-color, and 16-color terminal support"
    ],

    challenges: [
        "Managing asynchronous network communication while keeping terminal input responsive.",
        "Parsing Twitch IRC messages and metadata into usable chat information.",
        "Displaying Twitch colors across terminals with different color capabilities.",
        "Designing the command system so new commands could be added without tightly coupling them to the main client.",
        "Keeping the networking implementation compatible with Twitch's evolving connection requirements."
    ],

    solutions: [
        "Used stand-alone ASIO with SSL for asynchronous Twitch IRC communication.",
        "Separated slash commands into individual command classes registered through a command registry.",
        "Implemented automatic color conversion for terminals that do not support full 24-bit color.",
        "Stored credentials and user preferences in locally generated JSON configuration files.",
        "Updated the TLS configuration when Twitch changed its connection requirements."
    ],

    lessonsLearned: [
        "Gained practical experience with modern C++ and larger multi-file application architecture.",
        "Learned how asynchronous networking changes normal program flow and input handling.",
        "Developed a practical understanding of IRC and Twitch's chat protocol.",
        "Learned how to integrate external libraries and manage dependencies with CMake.",
        "Improved my understanding of modular architecture by building extensible command and configuration systems."
    ],

    technicalDetails: {
        language: "C++20",

        framework: "",

        engine: "",

        libraries: [
            "stand-alone ASIO",
            "OpenSSL",
            "nlohmann/json"
        ],

        APIs: [
            "Twitch IRC",
            "Twitch OAuth API"
        ],

        tools: [
            "CMake",
            "Git",
            "GitHub",
            "WSL"
        ]
    },

    thumbnail:
        "assets/projects/twitch-chat-terminal/screenshot_01.jpg",

    media: [
        {
            type: "image",
            src: "assets/projects/twitch-chat-terminal/screenshot_01.jpg",
            alt: "Twitch Chat Terminal displaying Twitch chat with colored usernames and badges.",
            caption: "Twitch chat rendered directly inside the terminal."
        },

        {
            type: "image",
            src: "assets/projects/twitch-chat-terminal/screenshot_02.jpg",
            alt: "Twitch Chat Terminal demonstrating highlighted users and badges.",
            caption: "Custom user and badge highlighting."
        },

        {
            type: "image",
            src: "assets/projects/twitch-chat-terminal/screenshot_03.jpg",
            alt: "Twitch Chat Terminal displaying its built-in command system.",
            caption: "Built-in slash commands for configuration and chat controls."
        }
    ],

    tags: [
        "Personal Project",
        "C++",
        "Networking",
        "IRC",
    ],

    links: [
        {
            name: "View Source",
            url: "https://github.com/gavinbot32/TwitchChatTerminal"
        }
    ]
},
{
    id: "voxelcraft",

    title: "VoxelCraft",

    subtitle:
        "An experimental voxel rendering project built from scratch with Java and LWJGL.",

    date: "2025-09-12",

    status: "Paused",

    featured: true,

    projectType: "Personal Project",

    description:
        "An experimental voxel world renderer built in Java with LWJGL, featuring procedural terrain generation and a free-flying camera.",

    longDescription:
        "VoxelCraft is a personal graphics programming project I created to explore low-level 3D rendering and voxel-based worlds without relying on a game engine. The current version generates a simple block-based terrain using a sine function and renders it as a 3D environment that can be explored with a free-flying camera. The project is currently paused and is not yet a complete game, but I would like to return to it in the future and expand it with player movement, collision detection, block interaction, and more advanced terrain generation.",

    role:
        "Solo Developer",

    teamSize: 1,

    duration:
        "",

    context: {
        course: "",
        institution: "",
        semester: "",
        assignment: "Personal graphics and game-engine programming project"
    },

    highlights: [
        "Built a 3D voxel world renderer using Java and LWJGL instead of a prebuilt game engine.",
        "Implemented procedural block terrain generation using a sine-based height function.",
        "Created a free-flying camera for navigating and inspecting the generated voxel world.",
        "Structured the project with separate engine, scene, input, and world systems.",
        "Used OpenGL-based rendering through LWJGL for real-time 3D graphics."
    ],

    features: [
        "Voxel-based 3D terrain",
        "Procedural sine-wave terrain generation",
        "Free-flying camera",
        "Textured blocks",
        "Real-time OpenGL rendering",
        "Chunk and world structure"
    ],

    challenges: [
        "Learning how to render a 3D scene without relying on a full game engine.",
        "Representing a voxel world efficiently as individual blocks and chunks.",
        "Generating terrain procedurally from mathematical functions.",
        "Managing camera movement and 3D transformations.",
        "Organizing rendering and game logic into separate systems."
    ],

    solutions: [
        "Used LWJGL to access OpenGL and GLFW directly from Java.",
        "Separated the application into engine and game packages to keep rendering infrastructure separate from world logic.",
        "Used mathematical height calculations to determine terrain elevation.",
        "Used JOML for vectors, matrices, and other 3D math operations."
    ],

    lessonsLearned: [
        "Learned more about the structure of a basic 3D rendering engine.",
        "Gained experience working directly with OpenGL through LWJGL.",
        "Improved my understanding of vectors, matrices, camera transformations, and coordinate systems.",
        "Learned how voxel terrain can be represented and generated procedurally.",
        "Gained a better understanding of the systems normally handled automatically by game engines."
    ],

    futurePlans: [
        "Replace the free-flying camera with a controllable player.",
        "Add gravity and collision detection.",
        "Allow the player to place and remove blocks.",
        "Improve procedural terrain generation beyond the current sine-based system.",
        "Add more block types and textures.",
        "Explore chunk loading and unloading for larger worlds.",
        "Optimize voxel rendering as the world becomes more complex."
    ],

    technicalDetails: {
        language: "Java",

        framework: "LWJGL",

        engine: "Custom",

        libraries: [
            "LWJGL",
            "OpenGL",
            "GLFW",
            "JOML",
            "STB",
            "OpenAL"
        ],

        APIs: [],

        tools: [
            "Maven",
            "Git",
            "GitHub",
            "IntelliJ IDEA"
        ]
    },

    thumbnail:
        "assets/projects/voxelcraft/screenshot-03.jpg",

    media: [
        {
            type: "image",
            src: "assets/projects/voxelcraft/screenshot-03.jpg",
            alt: "VoxelCraft displaying procedurally generated grass and dirt voxel terrain.",
            caption: "Current VoxelCraft terrain generated using a sine-based height function."
        },
        {
            type: "image",
            src: "assets/projects/voxelcraft/screenshot-02.jpg",
            alt: "An overhead point of view of the generated terrain.",
            caption: "An overhead point of view of the generated terrain."
        },
        {
            type: "image",
            src: "assets/projects/voxelcraft/screenshot-01.jpg",
            alt: "VoxelCraft displaying procedurally generated grass and dirt voxel terrain.",
            caption: "Current VoxelCraft terrain generated using a sine-based height function."
        }
    ],

    tags: [
        "Personal Project",
        "Java",
        "OpenGL",
        "3D Graphics"
    ],

    links: [
        {
            name: "View Source",
            url: "https://github.com/gavinbot32/VoxelCraft"
        }
    ]
},
{
    id: "tower-defense",

    title: "Tower Defense",

    subtitle:
        "A complete Unity tower defense game built in C# with multiple levels, progression, custom systems, and a hand-built water shader.",

    date: "2024-05-01",

    status: "Completed",

    featured: true,

    projectType: "Personal Project",

    description:
        "A Unity tower defense game featuring multiple levels, enemy waves, tower placement, progression, saving, a level-selection system, and a custom Shader Graph water shader.",

    longDescription:
        "Tower Defense is a Unity project I created while working as a teaching assistant for my high school programming teacher. Although it was not an assigned school project, students in the class were working on a similar tower defense project, and I developed my own version while helping them troubleshoot and understand their implementations. Over several weeks, I expanded my version into a more complete game with multiple playable levels, enemy waves, tower placement, scoring and progression systems, a level-selection menu, persistent progress, and a custom water shader built with Unity Shader Graph. Near the end of the school year, I stopped developing additional planned levels so I could focus on producing a stable playable build. My programming teacher later demonstrated this game, along with several of my other projects, to middle school students throughout the district while promoting the school's programming courses.",

    role:
        "Solo Developer",

    teamSize: 1,

    duration:
        "Several weeks to approximately one month",

    context: {
        course: "",
        institution: "High School Programming Program",
        semester: "",
        assignment:
            "Independent project created while serving as a programming teaching assistant"
    },

    highlights: [
        "Designed and developed a complete playable tower defense game in Unity using C#.",
        "Created multiple levels with unique enemy paths and layouts.",
        "Implemented tower placement, enemy waves, combat, health, currency, and progression systems.",
        "Built a level-selection interface with persistent completion and star ratings.",
        "Created a custom animated water shader using Unity Shader Graph.",
        "Implemented persistent save data for player progress.",
        "Developed the project alongside students while helping troubleshoot and explain similar programming concepts.",
        "Produced a stable build that was demonstrated by my programming teacher to middle school students as part of outreach for the school's programming courses."
    ],

    features: [
        "Multiple playable tower defense levels",
        "Tutorial level",
        "Enemy wave system",
        "Tower placement and construction",
        "Multiple tower and enemy types",
        "Health system",
        "Currency and purchasing",
        "Level progression",
        "Three-star level ratings",
        "Persistent save system",
        "Level-selection menu",
        "Shop interface",
        "Custom water shader",
        "3D tile-based environments"
    ],

    challenges: [
        "Coordinating multiple interconnected gameplay systems such as towers, enemies, waves, currency, and level progression.",
        "Creating a reusable level structure that could support several different map layouts.",
        "Saving level completion and star ratings between play sessions.",
        "Building an animated water effect that fit the visual style of the game.",
        "Balancing development time between expanding the project and preparing a stable playable build."
    ],

    solutions: [
        "Separated gameplay responsibilities into dedicated managers and systems rather than placing all game logic in a single script.",
        "Organized tower, enemy, tilemap, tutorial, and build functionality into separate components.",
        "Created a dedicated save system for persistent player progression.",
        "Used ScriptableObjects to organize reusable game data and configuration.",
        "Created the water material visually with Unity Shader Graph rather than relying on a stock Unity water effect.",
        "Stopped development on additional planned content near the end of the school year and focused on stabilizing the existing game for demonstration."
    ],

    lessonsLearned: [
        "Gained experience designing a larger Unity project made up of several interacting gameplay systems.",
        "Improved my understanding of organizing C# scripts into reusable systems and managers.",
        "Learned how to create persistent progression and save data in a game.",
        "Gained practical experience using ScriptableObjects to separate data from runtime behavior.",
        "Learned the basics of shader development and real-time visual effects through Unity Shader Graph.",
        "Improved my debugging and communication skills by helping other students solve problems in their own versions of the project.",
        "Learned the value of reducing scope and stabilizing a project when preparing a playable release."
    ],

    futurePlans: [
        "Finish the additional set of levels that was originally planned.",
        "Add additional tower and enemy types.",
        "Improve game balance and progression.",
        "Polish animations, effects, UI, and audio.",
        "Refactor older systems using techniques learned since the project was originally created."
    ],

    technicalDetails: {
        language: "C#",

        framework: "",

        engine: "Unity",

        libraries: [],

        APIs: [],

        tools: [
            "Unity",
            "Unity Shader Graph",
            "Git",
            "GitHub"
        ]
    },

    thumbnail:
        "assets/projects/tower-defense/screenshot-01.jpg",

    media: [
        {
            type: "image",
            src: "assets/projects/tower-defense/screenshot-01.jpg",
            alt: "Tower Defense level showing enemy paths, towers, projectiles, currency, health, and the custom water environment.",
            caption:
                "Gameplay showing tower combat, enemy waves, the game HUD, and the custom water shader."
        },

        {
            type: "image",
            src: "assets/projects/tower-defense/screenshot-02.jpg",
            alt: "Tower Defense level selection screen displaying tutorial and five playable levels with star ratings.",
            caption:
                "Level-selection screen with persistent completion and three-star ratings."
        },

        {
            type: "image",
            src: "assets/projects/tower-defense/screenshot-03.jpg",
            alt: "Three-dimensional Tower Defense map surrounded by animated water.",
            caption:
                "One of the game's 3D levels surrounded by the custom Shader Graph water effect."
        }
    ],

    tags: [
        "Personal Project",
        "C#",
        "Unity",
        "Game Development",
        "Shader Graph",
    ],

    links: [
        {
            name: "View Source",
            url: "https://github.com/gavinbot32/TowerDefense"
        },
        {
            name: "Download Page",
            url: "https://github.com/gavinbot32/TowerDefense/releases/tag/v1.0"
        }
    ]
},{
    id: "particle-simulator",

    title: "Particle Life Simulator",

    subtitle:
        "An interactive particle simulation that produces emergent behavior through configurable attraction and repulsion rules.",

    date: "2025-08-01",

    status: "Paused",

    featured: true,

    projectType: "Personal Project",

    description:
        "An interactive particle-life simulation built in Java and LWJGL where simple attraction and repulsion rules between particle groups produce complex emergent behavior.",

    longDescription:
        "Particle Life Simulator is an experimental simulation I created in the summer of 2025 after seeing a video demonstrating a similar particle-life concept. Particles are divided into configurable groups, with each group having different attraction or repulsion relationships with the others. Despite each particle following relatively simple rules, the interactions can produce surprisingly complex emergent structures including clusters, chains, orbit-like formations, and other constantly changing patterns. I also created an interactive control panel that allows the simulation parameters and relationships between particle groups to be changed in real time. I eventually paused development while beginning to explore spatial partitioning as a way to improve performance with larger particle counts.",

    role:
        "Solo Developer",

    teamSize: 1,

    duration:
        "Approximately 1–2 months",

    context: {
        setting: "Independent Development",
        institution: "",
        purpose:
            "Personal simulation project inspired by particle-life simulations.",
        outcome:
            "Created a functional interactive simulation before pausing development while exploring performance optimization."
    },

    highlights: [
        "Created a particle simulation where attraction and repulsion relationships produce emergent behavior.",
        "Implemented configurable interactions between multiple particle groups.",
        "Built a real-time GUI for modifying simulation parameters while the simulation is running.",
        "Implemented configurable force, friction, interaction distance, and particle behavior parameters.",
        "Added randomized particle placement and randomized interaction matrices for quickly generating new simulations.",
        "Added optional visualization of relationships between interacting particles.",
        "Began investigating spatial partitioning as a solution for improving simulation performance at larger particle counts."
    ],

    features: [
        "Multiple configurable particle groups",
        "Group-to-group attraction and repulsion",
        "Real-time particle simulation",
        "Interactive ImGui control panel",
        "Editable interaction matrix",
        "Randomized force relationships",
        "Randomized particle placement",
        "Adjustable simulation boundaries",
        "Adjustable particle count",
        "Adjustable force strength",
        "Adjustable friction",
        "Adjustable interaction distance",
        "Adjustable particle size",
        "Optional interaction-line visualization"
    ],

    challenges: [
        "Designing a generalized system where every particle group could have a different relationship with every other group.",
        "Calculating particle interactions continuously while maintaining responsive real-time rendering.",
        "Allowing simulation parameters to be modified while the simulation was running.",
        "Handling the rapidly increasing computational cost as the number of particles increased.",
        "Finding an optimization strategy that could avoid unnecessary particle-to-particle interaction checks."
    ],

    solutions: [
        "Represented attraction and repulsion relationships using a configurable group interaction matrix.",
        "Used LWJGL and OpenGL for real-time particle rendering.",
        "Integrated ImGui to expose simulation parameters through an interactive interface.",
        "Added randomization tools to quickly generate different initial conditions and interaction rules.",
        "Explored spatial partitioning as a future optimization for limiting calculations to nearby particles."
    ],

    lessonsLearned: [
        "Learned how simple local rules can produce complex emergent behavior in simulations.",
        "Gained additional experience with real-time simulation loops and mathematical particle interactions.",
        "Improved my understanding of organizing simulation parameters as configurable data rather than hard-coded behavior.",
        "Gained experience building development and debugging interfaces with ImGui.",
        "Encountered the performance limitations of brute-force particle interaction calculations.",
        "Learned why spatial data structures and partitioning techniques become important as simulation size increases."
    ],

    futurePlans: [
        "Implement spatial partitioning to reduce unnecessary particle interaction calculations.",
        "Increase the number of particles that can be simulated efficiently.",
        "Experiment with additional interaction and movement rules.",
        "Add presets for interesting particle ecosystems.",
        "Add tools for saving and loading interaction matrices.",
        "Improve visualization and debugging tools."
    ],

    technicalDetails: {
        language: "Java",

        framework: "LWJGL",

        engine: "Custom",

        libraries: [
            "LWJGL",
            "OpenGL",
            "GLFW",
            "JOML",
            "ImGui"
        ],

        APIs: [],

        tools: [
            "Gradle",
            "Git",
            "GitHub",
            "IntelliJ IDEA"
        ]
    },

    thumbnail:
        "assets/projects/particle-simulator/screenshot-03.jpg",

    media: [
        {
            type: "image",
            src: "assets/projects/particle-simulator/screenshot-03.jpg",
            alt: "Particle Life Simulator showing several colored particle groups forming complex structures.",
            caption:
                "Different particle groups forming clusters and orbit-like structures from simple attraction and repulsion rules."
        },

        {
            type: "image",
            src: "assets/projects/particle-simulator/screenshot-04.jpg",
            alt: "Particle Life Simulator displaying particle interaction lines.",
            caption:
                "Interaction-line visualization showing relationships between nearby particles."
        },

        {
            type: "image",
            src: "assets/projects/particle-simulator/screenshot-01.jpg",
            alt: "Particle Life Simulator showing particles forming chains and groups.",
            caption:
                "An example simulation producing chains and clusters from randomized interaction rules."
        },

        {
            type: "image",
            src: "assets/projects/particle-simulator/screenshot-02.jpg",
            alt: "Particle Life Simulator showing several large particle clusters.",
            caption:
                "Another randomized simulation demonstrating how different force relationships produce dramatically different behavior."
        },

        {
            type: "youtube",
            src: "https://youtu.be/RDbjwoo4kBI",
            caption: "Demonstration of the Particle Life Simulator"
        }
    ],

    tags: [
        "Personal Project",
        "Java",
        "OpenGL",
        "ImGui"
    ],

    links: [
        {
            name: "View Source",
            url: "https://github.com/gavinbot32/ParticleSimulator"
        }
    ]
},
{
    id: "trivia-game",

    title: "Trivia Game",

    subtitle:
        "A customizable team-based trivia game built in Unity for classroom use.",

    date: "2024-05-15",

    status: "Completed",

    featured: false,

    projectType: "Utility Project",

    description:
        "A customizable team-based trivia game built in Unity for use by my programming teacher in his classes.",

    longDescription:
        "Trivia Game is a small Unity application I built over the course of a few days while working as a teaching assistant at the Community Learning Center. My programming teacher wanted a reusable trivia game that he could use with his classes and asked me to create one. The game supports multiple teams, configurable point values, several question categories, and a board-based trivia format. I designed the question system heavily around Unity ScriptableObjects, with individual cards and categories represented as data assets rather than hard-coded into the game's logic. This made it easier to create and organize trivia content without modifying the underlying game code.",

    role:
        "Solo Developer",

    teamSize: 1,

    duration:
        "A few days",

    context: {
        setting: "Teaching Assistant",
        institution: "Community Learning Center",
        purpose:
            "Requested by my programming teacher as a reusable classroom trivia game.",
        outcome:
            "Delivered a functional trivia game that could be configured with different teams, categories, questions, and point values."
    },

    highlights: [
        "Built a functional classroom application in only a few days in response to a request from my programming teacher.",
        "Designed a data-driven trivia system using Unity ScriptableObjects.",
        "Represented trivia cards and categories as reusable data assets rather than hard-coded game content.",
        "Created a configurable team system supporting multiple teams and custom team names.",
        "Implemented team scoring with adjustable point totals.",
        "Built a category-based trivia board with questions of different point values.",
        "Created the complete game flow from team setup through question selection and the final results screen."
    ],

    features: [
        "Configurable team count",
        "Custom team names",
        "Color-coded teams",
        "Team scoring",
        "Multiple trivia categories",
        "Multiple point values per category",
        "Question and answer display",
        "Correct and incorrect answer controls",
        "Reusable trivia cards",
        "ScriptableObject-based question data",
        "ScriptableObject-based categories",
        "End-of-game winner screen",
        "New-game functionality"
    ],

    challenges: [
        "Making trivia content easy to change without rewriting gameplay code.",
        "Keeping track of scores across multiple configurable teams.",
        "Managing the relationship between categories, individual questions, and point values.",
        "Building the project quickly enough to satisfy an immediate classroom need."
    ],

    solutions: [
        "Used Unity ScriptableObjects to separate trivia content from the game's runtime logic.",
        "Represented individual trivia cards as reusable data assets containing their question information.",
        "Organized cards through category ScriptableObjects so new trivia boards could be assembled primarily through data.",
        "Created a generalized team system rather than hard-coding a fixed set of players.",
        "Kept the scope focused on the features necessary for a usable classroom game."
    ],

    lessonsLearned: [
        "Gained experience using ScriptableObjects as a data architecture rather than only as simple configuration files.",
        "Learned how separating content from game logic makes an application easier to modify and reuse.",
        "Practiced rapidly scoping and developing software around an actual user's requirements.",
        "Improved my experience managing dynamic UI and game state in Unity.",
        "Learned the value of designing tools so non-programmers can change content without modifying source code."
    ],

    futurePlans: [],

    technicalDetails: {
        language: "C#",

        framework: "",

        engine: "Unity",

        libraries: [],

        APIs: [],

        tools: [
            "Unity",
            "Unity ScriptableObjects",
            "Git",
            "GitHub"
        ]
    },

    thumbnail:
        "assets/projects/trivia-game/screenshot-02.jpg",

    media: [
        {
            type: "image",
            src: "assets/projects/trivia-game/screenshot-01.jpg",
            alt: "Trivia Game team setup screen with four configurable teams.",
            caption:
                "Team setup allows the number of teams and their names to be configured before starting a game."
        },

        {
            type: "image",
            src: "assets/projects/trivia-game/screenshot-02.jpg",
            alt: "Trivia Game board displaying categories, point values, team scores, and a trivia question.",
            caption:
                "The main trivia board tracks team scores while organizing questions by category and point value."
        },

        {
            type: "image",
            src: "assets/projects/trivia-game/screenshot-03.jpg",
            alt: "Trivia Game results screen announcing the winning team and final score.",
            caption:
                "The game concludes by displaying the winning team and its final score."
        },
        {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=Vw7_cW9a3hU",
            caption: "Video demonstration of the Trivia Game."
        }
    ],

    tags: [
        "Utility Project",
        "C#",
        "Unity",
        "Game Development",
    ],

    links: [
        {
            name: "View Source",
            url: "https://github.com/gavinbot32/TriviaGame"
        },
        {
            name: "Download Page",
            url: "https://github.com/gavinbot32/TriviaGame/releases/tag/v1.0"
        }
    ]
}
];