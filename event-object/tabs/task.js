    // const tabs = document.querySelectorAll('.tab');
    // const contents = document.querySelectorAll('.tab__content');

    // for (let i = 0; i < tabs.length; i++) {
    //     tabs[i].addEventListener('click', () => {
    //         for (let j = 0; j < tabs.length; j++) {
    //             tabs[j].classList.remove('tab_active');
    //             contents[j].classList.remove('tab__content_active');
    //         }

    //         tabs[i].classList.add('tab_active');
    //         contents[i].classList.add('tab__content_active');
    //     });
    // }

    const tabs = document.querySelectorAll('.tab')
    const contents = document.querySelectorAll('.tab__content')

    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', () => {
            for(let j = 0; j < tabs.length; j++){
                tabs[j].classList.remove('tab_active');
                contents[j].classList.remove('tab__content_active');
            }

            tabs[i].classList.add('tab_active');
            contents[i].classList.add('tab__content_active')
        })
    }