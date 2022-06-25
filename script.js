const addButton = document.querySelector("#add");
const updateLSData =() =>{
  const textAreaData =document.querySelectorAll('textarea');
  const notes =[];
  textAreaData.forEach((note)=>{
    return notes.push(note.value);
  })
  localStorage.setItem('notes',JSON.stringify(notes));
}
const addNewNote = (text = '') => {
  const note = document.createElement('div');
  note.classList.add('note');

  const htmlData = `<div class="operation">
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "":"hidden"}"></div>
<textarea class="${text ?"hidden":""}"></textarea>`;

    note.insertAdjacentHTML('afterbegin',htmlData);
    console.log(note);

    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const  mainButton= note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    delButton.addEventListener('click',()=>{
      note.remove();
      updateLSData();

    })
        textarea.value = text;
          mainButton.innerHTML =text;
  
   editButton.addEventListener('click',()=>{
    mainButton.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
    updateLSData();
   })

   textarea.addEventListener('change',(event) =>{

  const value = event.target.value;
    mainButton.innerHTML =value;

   })


    document.body.appendChild(note);
}
// getting data back from local storage 
const notes =JSON.parse(localStorage.getItem('notes'));
if(notes){
  notes.forEach((note) => addNewNote(note))} 

addButton.addEventListener('click', () => addNewNote());
