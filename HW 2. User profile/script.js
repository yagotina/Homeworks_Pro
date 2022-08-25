firstName = prompt('Please, enter your first name:');
lastName = prompt('Please, enter your last name:');
email = prompt('Please, enter your email:');
birthYear = prompt('Please, enter your year of birth:');

firstName = firstName.trim();
lastName = lastName.trim();
email = email.replaceAll(' ', '');
email = email.toLowerCase();
birthYear = birthYear.replaceAll(' ', '');

if (email.indexOf('@') === -1) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (!email.indexOf('@')) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.indexOf('@') === email.length-1) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}

date = new Date();
currentYear = date.getFullYear();
age = currentYear - birthYear;

document.write(`
    <ul>
        <li>Full name: <b>${firstName} ${lastName}</b></li>
        <li>Email: ${email}</li>
        <li>Age: <b>${age}</b></li>
    </ul>
`);
