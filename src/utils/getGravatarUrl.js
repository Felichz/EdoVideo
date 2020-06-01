import md5 from 'md5';

function getGravatarUrl(email) {
    console.log(email);
    const baseUrl = 'https://gravatar.com/avatar/';
    const formattedEmail = email.trim().toLowerCase();
    const hash = md5(formattedEmail, { enconding: 'binary' });

    return baseUrl + hash;
}

export default getGravatarUrl;