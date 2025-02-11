document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText) {
        const notesList = document.getElementById('notesList');
        const li = document.createElement('li');
        li.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', function() {
            notesList.removeChild(li);
        });

        li.appendChild(deleteButton);
        notesList.appendChild(li);
        noteInput.value = ''; // Clear input field
    } else {
        alert('Silakan masukkan catatan!');
    }
});