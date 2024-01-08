let allAccordion = document.querySelectorAll('.faq-options .accordion')

allAccordion.forEach((item) => {
    item.addEventListener('click', () => {
        allAccordion.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.add('active')
            })
            item.classList.remove('active')
        })
    })
})

