const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let wellcome = 'Wellcome!';
let AccessIsDenied = 'Access is denied!';
let canceledByUser = 'Canceled by user!';

let login = prompt('enter your login');
if (login === null) {
    alert(canceledByUser);
} else {
    if (login === adminLogin) {
        let password = prompt('enter your password');
        if (password !== null) {
            if (password === adminPassword) {
                alert(wellcome);
            } else {
                alert(AccessIsDenied);
            }
        } else {
            alert(canceledByUser);
        }
    } else {
        alert(AccessIsDenied);
    }
}

