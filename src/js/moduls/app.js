import Ui from './ui'
import GitHub from './github';

export let app = (function() {

    const github = new GitHub;
    const ui = new Ui;

    //Search input
    const searchUser = document.querySelector('#searchUser')

    searchUser.addEventListener('keyup', (e)=>{
        const userText = e.target.value
        if(userText !== ''){
            github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show alert
                }else{
                    // Show Profile
                }


            })
        }else{
            // Clear Field
        }
        
    })

})();


