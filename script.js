document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText) {
        const notesContainer = document.getElementById('notesContainer');
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        // Buat elemen teks untuk catatan
        const noteContent = document.createElement('span');
        noteContent.textContent = noteText;

        // Buat tombol hapus
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('deleteButton');

        // Tambahkan event listener untuk tombol hapus
        deleteButton.addEventListener('click', function() {
            notesContainer.removeChild(noteDiv);
        });

        // Tambahkan elemen teks dan tombol hapus ke div catatan
        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(deleteButton);
        notesContainer.appendChild(noteDiv);
        noteInput.value = ''; // Clear the input
    } else {
        alert('Silakan masukkan catatan!');
    }
});