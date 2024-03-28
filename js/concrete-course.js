document.addEventListener('DOMContentLoaded', () => {

let materialLists = document.querySelectorAll('.material-list')

materialLists.forEach((materialList) => {

    let btn = materialList.querySelector('.title')

    btn.addEventListener('click', toggleListActivity)

     function toggleListActivity(){

        btn.classList.toggle('active')
        btn.querySelector('img').classList.toggle('active')

        let list = materialList.querySelector('.list')
         list.classList.toggle('active')

    }
})

})

