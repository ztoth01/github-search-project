export default class Ui{

    //constructor
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //Show Profile
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a  href="${user.html_url}" target="_blank" class="btn btn-primary btn-block my-4">View Profile</a>
                     </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br>
                        <ul class="list-group my-3 ml-3">
                            <li class="list-item">Company: ${user.company}</li>
                            <li class="list-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                            <li class="list-item">Location: ${user.location }</li>
                            <li class="list-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //Show repos
    showRepos(repos){
        const reposPlaceHolder = document.querySelector('#repos');
        console.log(repos);
        
        let result = '';
        repos.forEach(repo => {
            result +=`
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchares: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        });
        reposPlaceHolder.innerHTML = result;
    }

    // Show Alert message
    showAlert(message, className){
        //clear alert
        this.clearAlert();
        //Create class
        const div = document.createElement('div');
        //Add class name
        div.className = className;
        //Add message
        div.appendChild(document.createTextNode(message));
        //Get parent
        const parent = document.querySelector('.searchContainer');
        //Get search box
        const search = document.querySelector('.search');
        //insert
        parent.insertBefore(div, search);

        setTimeout(() => {
            div.remove();
        }, 2500);
    }

    //Clear alert modal
    clearAlert(){
        const alert = document.querySelector('.alert') || false;
        if(alert){
            alert.remove()
        }
    }

    //Clear Profile
    clearProfile(){
        this.profile.innerHTML = "";
        //document.querySelector('#searchUser').value = ''
    }



}
