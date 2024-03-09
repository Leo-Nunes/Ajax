
$(document).ready(function(){

    $('#link').click(function(){
        
        
        const endPoint = "https://api.github.com/users/Leo-Nunes";

        fetch(endPoint)
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            const nome = json.name;
            const username = json.login;
            const avatar = json.avatar_url;
            const following = json.following;
            const followers = json.followers;
            const repositorio = json.public_repos;
            const link = json.html_url;

            $('#name').text(nome);
            $('#username').text(username);
            $('#avatar').attr('src', avatar);
            $('#following').text(following);
            $('#followers').text(followers);
            $('#repositorio').text(repositorio);
            $('#link').attr('href', link);

        })
        .catch(function() {
            alert('Ocorreu um erro ao buscar o endereço, tente novamente mais tarde');
        })

    })

})





