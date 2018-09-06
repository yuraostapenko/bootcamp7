const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let wellcome = 'Wellcome!';
let AccessIsDenied = 'Access is denied!';
let canceledByUser = 'Canceled by user!';




let attempts = 3;
do {
    let password = prompt('enter your password');
    if (password === null) {
        alert(canceledByUser);
        break;
    }
    if (passwords.includes(password)) {
        alert(wellcome);
        break;
    } else {
        attempts--;
        if (attempts > 0) {
            alert(`${AccessIsDenied} you have ${attempts} tries`);
        } else {
            alert('attemps is over');
            break;
        }

    };
} while (attempts > 0);