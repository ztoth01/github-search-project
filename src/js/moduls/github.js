export default class GitHub{
    constructor(){
        this.client_id = 'e514ecc6875ac18ddcc6';
        this.client_secret = 'be75f2ba334264f26709ee9c651acef2cd00be73';
        this.reops_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reops_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }

    }

}