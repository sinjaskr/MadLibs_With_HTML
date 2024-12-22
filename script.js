const prompts = [
    { label: "विशेषणं", example: "happy" },
    { label: "संज्ञा", example: "cat" },
    { label: "विशेषणं", example: "colorful" },
    { label: "क्रियापदम्", example: "jump" },
    { label: "संज्ञा", example: "tree" },
    { label: "विशेषणं", example: "sparkly" },
    { label: "संज्ञा", example: "castle" },
    { label: "क्रियापदम्", example: "dance" },
    { label: "विशेषणं", example: "brave" },
    { label: "संज्ञा", example: "sword" },
    { label: "संज्ञा", example: "dragon" },
    { label: "विशेषणं", example: "fierce" },
    { label: "क्रियापदम्", example: "fly" },
    { label: "संज्ञा", example: "treasure" },
    { label: "विशेषणं", example: "shiny" },
    { label: "संज्ञा", example: "mountain" },
    { label: "क्रियापदम्", example: "explore" },
    { label: "विशेषणं", example: "mysterious" },
    { label: "संज्ञा", example: "map" },
    { label: "विशेषणं", example: "legendary" },
    { label: "संज्ञा", example: "adventure" }
];

let userInputs = new Array(prompts.length).fill("");
let currentIndex = 0;

const storyText = `
In a <span class="blank" data-index="0">______</span> village, a <span class="blank" data-index="1">______</span> girl named Elara loved <span class="blank" data-index="2">______</span>. She dreamed of <span class="blank" data-index="3">______</span> the world.

One day, Elara found a <span class="blank" data-index="4">______</span> hidden in the woods. Curious, she opened it and saw a <span class="blank" data-index="5">______</span> with magical <span class="blank" data-index="6">______</span>.

Elara touched it and felt a <span class="blank" data-index="7">______</span> of energy. “What is this?” she wondered. Suddenly, a <span class="blank" data-index="8">______</span> appeared, saying, “I am your <span class="blank" data-index="9">______</span>!”

The creature challenged Elara to a <span class="blank" data-index="10">______</span> of courage. First, she had to cross a <span class="blank" data-index="11">______</span> river filled with <span class="blank" data-index="12">______</span>.

Next, she faced a <span class="blank" data-index="13">______</span> forest, where shadows danced. Elara took a deep breath and <span class="blank" data-index="14">______</span> forward.

Finally, she met a <span class="blank" data-index="15">______</span> dragon who guarded a <span class="blank" data-index="16">______</span> treasure. “Prove your <span class="blank" data-index="17">______</span>,” the dragon roared.

With a <span class="blank" data-index="18">______</span>, Elara faced her fears and <span class="blank" data-index="19">______</span> her way to victory! The dragon smiled and shared its treasure, making Elara the <span class="blank" data-index="20">______</span> of her village.
`;

const storyDiv = document.getElementById("story");
const inputField = document.getElementById("inputField");
const instructionDiv = document.getElementById("instruction");

function initStory() {
    const storyParts = storyText.split(/(<span class="blank" data-index="\d">______<\/span>)/);
    storyDiv.innerHTML = storyParts.join('');
    instructionDiv.textContent = `अधुना, लिखत ${prompts[currentIndex].label}`;
    inputField.placeholder = `उदाहरणतया "${prompts[currentIndex].example}"`;
    inputField.focus();
}

inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && currentIndex < prompts.length) {
        const userInput = inputField.value.trim();
        if (userInput) {
            userInputs[currentIndex] = userInput; 
            const blank = storyDiv.querySelector(`span[data-index="${currentIndex}"]`);
            blank.textContent = userInput; 
            blank.classList.remove("blank"); 
            inputField.value = ""; 
            currentIndex++; 

            if (currentIndex < prompts.length) {
                instructionDiv.textContent = `अधुना, लिखत ${prompts[currentIndex].label}`;
                inputField.placeholder = `उदाहरणतया "${prompts[currentIndex].example}"`;
            } else {
                instructionDiv.textContent = "सर्वाणि रिक्तस्थानानि पूरितानि! अत्र भवतः कथा अस्ति:";
                inputField.style.display = "none"; 
            }
            inputField.focus(); 
        }
    }
});

initStory();
