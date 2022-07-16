const fs = require('fs');
const chalk = require('chalk');


const listNotes = () => {
    const notes = loadNotes();

    console.log("Your notes");

    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();

    const targetNote = notes.find(x => x.title === title);

    if (targetNote) {
        console.log(chalk.green(targetNote.title));
        console.log(targetNote.body);
    }
    else {
        console.log("Note not found");
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find(x => x.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green("Note added"));
    }
    else {
        console.log(chalk.red("Title already taken"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const updatedNotes = notes.filter(x => x.title !== title);
    if (notes.length === updatedNotes.length) {
        console.log(chalk.red("Note not found!"));
    }
    else {
        saveNotes(updatedNotes);

        console.log(chalk.green("Note removed"));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
};