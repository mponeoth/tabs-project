const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about-center');
const articles = document.querySelectorAll('.content');

        about.addEventListener('click',function(e) {
                console.log(e.target.dataset.id);
            const id = e.target.dataset.id; // class ="tab-btn data-id="history""  e.target.dataset.id diyerek  html mizdeki btn-container daki  verilerimizi  id mize atadik
            if(id){
                // remove active from other buttons
                btns.forEach(function(btn) {
                    btn.classList.remove('active');
                    e.target.classList.add('active');
                })
                //hide other articles
                articles.forEach(function(article){
                    article.classList.remove('active');
                })

               const element = document.getElementById(id)  //contentlerimizin icindeki idlerimizi active yapiyoruz active ise display:block yapar 
               element.classList.add('active');
            }
        })
