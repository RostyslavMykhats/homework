const TABS = document.querySelectorAll('.main__nav_item');
const CONTENT = document.querySelectorAll('.mains');

TABS.forEach((tab) => {
    tab.addEventListener('click', () => {
        TABS.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        // get data-atribute
        const DATA_ATRIBUTE = tab.getAttribute('data-page');
        CONTENT.forEach((item) => {
            item.classList.add('d-none');
            if (item.getAttribute('data-page') == DATA_ATRIBUTE) {
                item.classList.remove('d-none');
            }
        });
    })
})

const MESSAGE_TABS = document.querySelectorAll('.nav-message_user');
const MESSAGE_CONTENT = document.querySelectorAll('.messages-selected-user')

MESSAGE_TABS.forEach((user) => {
    user.addEventListener('click', () => {
        MESSAGE_TABS.forEach((user) => {
            user.classList.remove('selected');
        })
        user.classList.add('selected');
        const DATA_ATRIBUTE = user.getAttribute('data-user');
        MESSAGE_CONTENT.forEach((item)=> {
            item.classList.add('d-none')
            if (item.getAttribute('data-user') == DATA_ATRIBUTE) {
                item.classList.remove('d-none');
            }
        })
    })
})