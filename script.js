let roomMembers = [];

const memberForm = document.querySelector("#member-form");
const grid = document.querySelector("#participant-grid");
const totalDisplay = document.querySelector("#total-count");

memberForm.addEventListener("submit", (e)  => {
    e.preventDefault();

    const name = document.querySelector("#member-name").value;
    const role = document.querySelector("#member-role").value;

    const newMember = {
        id: Date.now(),
        name: name,
        role: role,
        avatarInitials: name.charAt(0).toUpperCase()
    };


    roomMembers.push(newMember);

    updateUI();
    memberForm.requestFullscreen();

});


function updateUI() {
    grid.innerHTML = "";

    roomMembers.forEach((member) => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <button class="remove-btn" onclick="removeMember(${member.id})">x</button>
            <div vlass="avatar">${member.avatarInitials}</div>
            <h4>${member.name}</h4>
            <p class="role-tag">${member.role === 'Speaker' ? '🎙️ Speaker' : '👂 Listener'}</p>
        `;

        grid.appendChild(card);
    });

    totalDisplay.innerText = roomMembers.length;
}

window.removeMember = function(id){
    roomMembers = roomMembers.filter(member => member.id !== id);
    updateUI();
};