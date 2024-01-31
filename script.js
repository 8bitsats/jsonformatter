// Initial data
let meta = {
    name: "",
    slug: "",
    supply: "",
    description: "",
    twitter_link: "",
    discord_link: "",
    website_link: "",
    inscription_icon: ""
};
let inscriptions = [];

// Functions to handle input changes and update JSON output
function handleInputChange(event) {
    const { id, value } = event.target;
    meta[id] = value;
    updateJsonOutput();
}

function addInscription() {
    // Logic to add a new inscription would go here
    inscriptions.push({ /* new inscription data */ });
    updateJsonOutput();
}

function updateJsonOutput() {
    document.getElementById('metaJsonOutput').textContent = JSON.stringify(meta, null, 2);
    document.getElementById('inscriptionsJsonOutput').textContent = JSON.stringify(inscriptions, null, 2);
}

// Functions to download JSON data as a file
function downloadJson(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function downloadMetaJson() {
    downloadJson(meta, 'meta.json');
}

function downloadInscriptionsJson() {
    downloadJson(inscriptions, 'inscriptions.json');
}

function resetMetaForm() {
    // Clearing META inputs
    Object.keys(meta).forEach(key => {
        meta[key] = "";
        const input = document.getElementById(key);
        if (input) {
            input.value = "";
        }
    });
    updateJsonOutput();
}

function resetInscriptions() {
    // Clearing inscriptions
    inscriptions = [];
    updateJsonOutput();
}

// Adding event listeners to all META input elements
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(meta).forEach(key => {
        const input = document.getElementById(key);
        if (input) {
            input.addEventListener('change', handleInputChange);
        }
    });
    document.getElementById('addInscription').addEventListener('click', addInscription);

    // Initialize JSON output
    updateJsonOutput();
});
