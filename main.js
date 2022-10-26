// selectors

const faqDiv = document.querySelector(".faq-list");



// addeventListener

faqDiv.addEventListener('click', (event) => {
    let target = event.target;
    let content = event.target.parentElement.parentElement.nextElementSibling;
    if(event.target.className == "plus-icon"){
        collapseFAQ();
        target.src = "./details/cancel-icon.png";
        target.className = "cancel-icon";
        content.classList.add('show-faq-body');
    } else if(event.target.className == "cancel-icon"){
        target.src = "./details/plus-icon.png";
        target.className = "plus-icon";
        content.classList.remove('show-faq-body');
    }
});


// functions

function collapseFAQ(){
    faqDiv.querySelectorAll('.faq-body').forEach((faqItem) => {
        faqItem.classList.remove('show-faq-body');
        faqItem.previousElementSibling.querySelector('.faq-icon img').src = "./details/plus-icon.png"
    });
}



