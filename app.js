function toggleFAQ(ele){
    const faqItem = ele.parentElement;
    const faqAnswer = faqItem.querySelector(".faq-answer");
    const faqToggle = faqItem.querySelector(".faq-toggle");
    const allFaqs = document.querySelectorAll(".faq-item");

    allFaqs.forEach((item) => {
        if(item !== faqItem){
            item.classList.remove("active");
            item.querySelector(".faq-answer").classList.remove("active");
            item.querySelector(".faq-toggle").classList.remove("active");
        }
    });

    faqItem.classList.toggle("active");
    faqAnswer.classList.toggle("active");
    faqToggle.classList.toggle("active");
};
const FAQ = document.querySelectorAll(".faq-question")
FAQ.forEach((question) => {
    question.addEventListener("click", function(){
        toggleFAQ(this);
    })
})
