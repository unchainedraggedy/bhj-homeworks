
        let activeIndex = 0;
        const cases = document.querySelectorAll('.rotator__case');

        const rotate = () => { 
            cases[activeIndex].classList.toggle('rotator__case_active');
            activeIndex = (activeIndex + 1) % cases.length;
            const activeCase = cases[activeIndex];
            activeCase.classList.toggle('rotator__case_active');

            activeCase.style.color = activeCase.dataset.color;
            setTimeout(rotate, activeCase.dataset.speed);
        };

        rotate();
