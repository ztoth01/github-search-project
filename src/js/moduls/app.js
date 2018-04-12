import Ui from './ui'
import GitHub from './github';

export let app = (function() {
    //github init
    const github = new GitHub;
    //ui init
    const ui = new Ui;

    //Search input
    const searchUser = document.querySelector('#searchUser')

    searchUser.addEventListener('keyup', (e)=>{
        const userText = e.target.value;
        if(userText !== ''){
            github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show alert -UI
                    ui.showAlert('User not found', 'alert alert-danger');
                }else{
                    // Show Profile -UI
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }

            })
        }else{
            // Clear Field -UI
            ui.clearProfile();
        }
        
    })

})();


