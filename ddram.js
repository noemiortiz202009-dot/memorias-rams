

        function goToPage(pageNumber) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById('page-' + pageNumber).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
 