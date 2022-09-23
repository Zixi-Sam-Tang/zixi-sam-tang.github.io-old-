const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function transitions(){
    //section transition
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            sectionBtn.forEach((btn) => {
                btn.classList.remove('active-btn');
            })

            e.target.classList.add('active-btn');

            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

transitions();