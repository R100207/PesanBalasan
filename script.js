document.getElementById('saveButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText) {
        // Ambil catatan yang sudah ada dari Local Storage
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        // Tambahkan catatan baru ke array
        notes.push(noteText);
        // Simpan kembali ke Local Storage
        localStorage.setItem('notes', JSON.stringify(notes));
        // Tampilkan catatan
        displayNotes();
        // Kosongkan input
        noteInput.value = '';
    } else {
        alert('Silakan masukkan catatan!');
    }
});

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = ''; // Kosongkan daftar catatan

    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;

        // Buat tombol hapus
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Jangan Pernah Kamu Tekan!!!';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', function() {
            deleteNote(index);
        });

        li.appendChild(deleteButton);
        notesList.appendChild(li);
    });
}

function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // Hapus catatan berdasarkan index
    notes.splice(index, 1);
    // Simpan kembali ke Local Storage
    localStorage.setItem('notes', JSON.stringify(notes));
    // Tampilkan catatan yang sudah diperbarui
    displayNotes();
}

// Tampilkan catatan saat halaman dimuat
window.onload = displayNotes;