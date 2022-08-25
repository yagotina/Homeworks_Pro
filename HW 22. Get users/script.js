let parseChildren = jsonObj => JSON.parse(jsonObj).children;

function getResponse(action) {
    return new Promise((resolve, reject) => {
        let xml = new XMLHttpRequest();
        xml.open('GET', action);
        xml.send();
    
        xml.addEventListener('readystatechange', () => {
            if(xml.readyState === 4) {
                xml.status > 199 && xml.status < 400 
                ? resolve(xml.response)
                : reject(xml.status);
            }
        })
    })
};

// getResponse('data.json')
//     .then(response => parseChildren(response))
//     .then(childrenListOne => {
//         getResponse('data2.json')
//             .then(response => parseChildren(response))
//             .then(childrenListTwo => childrenListOne.concat(childrenListTwo))
//             .then(allChildren => console.log(allChildren))
//             .catch(e => console.log(`Oops, something went wrong! Error ${e}`))
//     })
//     .catch(e => console.log(`Oops, something went wrong! Error ${e}`));

// Вариант с Promise.all

Promise.all([getResponse('data.json'), getResponse('data2.json')])
    .then(data => data.map(response => parseChildren(response)))
    .then(response => response.flat())
    .then(children => console.log(children))
    .catch(e => console.log(`Oops, something went wrong! Error ${e}`));