    const fontSizeControls = document.querySelectorAll('.font-size');
    const bookElement = document.getElementById('book');

    for (let i = 0; i < fontSizeControls.length; i++) {
        fontSizeControls[i].addEventListener('click', function(event) {
            event.preventDefault();

            for (let j = 0; j < fontSizeControls.length; j++) {
                fontSizeControls[j].classList.remove('font-size_active');
            }

            fontSizeControls[i].classList.add('font-size_active');

            bookElement.classList.remove('book_fs-small', 'book_fs-big');


            if (fontSizeControls[i].dataset.size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (fontSizeControls[i].dataset.size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        });
    }

