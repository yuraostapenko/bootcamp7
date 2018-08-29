//  let sharm = 15;
//  let hurgada = 25;
//  let taba = 6;
//  let weAreSorry = 'We are sorry, come again later!';
//  let placesToHurgada = 'We have places in group to Hurgada, do you want to visit it?';
//  let niceTriptoHurgada = 'Have a nice trip to Hurgada!';
//  let niceTriptoSharm = 'Have a nice trip to Sharm!';
//  let placesToSharm = 'We have places in group to Sharm, do you want to visit it?';

// let numberOfVacationers = +prompt('enter numbers of vacationers');
// if (numberOfVacationers > 0 && !isNaN(numberOfVacationers) && Number.isInteger(numberOfVacationers)) {
//     if (numberOfVacationers > 25) {
//         alert('Sorry, we do not have so many places in any group!');
//     } else {
//         if (numberOfVacationers <= hurgada && numberOfVacationers > sharm) {
//             let answer = confirm(placesToHurgada);
//             if (answer) {
//                 alert(niceTriptoHurgada);
//             } else {
//                 alert(weAreSorry);
//             }
//         } else {
//             if (numberOfVacationers <= sharm && numberOfVacationers > taba) {
//                 let answer = confirm(placesToHurgada);
//                 if (answer) {
//                     alert(niceTriptoHurgada);
//                 } else {
//                     let answer = confirm(placesToSharm);
//                     if (answer) {
//                         alert(niceTriptoSharm);
//                     } else {
//                         alert(weAreSorry);
//                     }
//                 }
//             } else {
//                 if (numberOfVacationers <= taba) {
//                     let answer = confirm(placesToHurgada);
//                     if (answer) {
//                         alert(niceTriptoHurgada);
//                     } else {
//                         let answer = confirm(placesToSharm);
//                         if (answer) {
//                             alert(niceTriptoSharm);
//                         } else {
//                             let answer = confirm('we have places in group to Taba, do you want to visit it?');
//                             if (answer) {
//                                 alert('Have a nice trip to Taba!');
//                             } else {
//                                 alert(weAreSorry);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// } else {
//     alert('Input error');
// }

let sharm = 15;
let hurgada = 25;
let taba = 6;
let weAreSorry = 'We are sorry, come again later!';
let placesToHurgada = 'We have places in group to Hurgada, do you want to visit it?';
let niceTripToHurgada = 'Have a nice trip to Hurgada!';
let niceTripToSharm = 'Have a nice trip to Sharm!';
let placesToSharm = 'We have places in group to Sharm, do you want to visit it?';
let placesToTaba = 'We have places in group to Taba, do you want to visit it?';

let numberOfVacationers = +prompt('enter numbers of vacationers');
if (numberOfVacationers > 0 && !isNaN(numberOfVacationers) && Number.isInteger(numberOfVacationers)) {
    if (numberOfVacationers > sharm && numberOfVacationers > hurgada && numberOfVacationers > taba) {
        alert('Sorry, we do not have so many places in any group!');
    } else if (numberOfVacationers <= hurgada && numberOfVacationers > sharm) {
        let answer = confirm(placesToHurgada) ? alert(niceTripToHurgada) : alert(weAreSorry);
    } else if (numberOfVacationers <= sharm && numberOfVacationers > taba) {
        let answer = confirm(placesToHurgada) ? alert(niceTripToHurgada) : answer = confirm(placesToSharm) ? alert(niceTripToSharm) : alert(weAreSorry);
    } else if (numberOfVacationers <= taba) {
        let answer = confirm(placesToHurgada) ? alert(niceTripToHurgada) : answer = confirm(placesToSharm) ? alert(niceTripToSharm) : answer = confirm(placesToTaba) ? alert('Have a nice trip to Taba!') :alert(weAreSorry);
    }
} else {
    alert('Input error');
}