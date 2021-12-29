const questions = document.querySelectorAll(".question");
questions.forEach(function(item){
    item.addEventListener("click", function(){
        item.lastElementChild.classList.toggle("rotate");
        item.classList.toggle("extra-font-weight");
        item.nextElementSibling.classList.toggle("display");
        item.nextElementSibling.classList.toggle("extra-height-answer");
        item.parentElement.classList.toggle("extra-height-faqs");
    });
});