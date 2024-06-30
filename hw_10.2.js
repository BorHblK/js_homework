var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com>"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru>" // Нам такі не підходять
    },
];

function getTrustedEmails(arr) {
    const trustedEmails = [];
    const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

    arr.forEach(user => {
        // cleaning up emails
        const cleanedEmail = user.email.replace(/[<>]/g, '');
        // validating emails according  to regex
        if (emailPattern.test(cleanedEmail)) {
            trustedEmails.push(cleanedEmail);
        }
    });

    return trustedEmails;
}

const trustedEmails = getTrustedEmails(arr);
console.log(trustedEmails);