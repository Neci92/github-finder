const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

let user = document.getElementById('searchUser').value;

github.getUser(user)
  .then(data => {
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  );

console.log(user);


searchUser.addEventListener('keyup', (e) => {
  ui.clearAlert();
  const userText = e.target.value;
  if (userText !== ''){
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    ui.clearProfile();
  }
});
