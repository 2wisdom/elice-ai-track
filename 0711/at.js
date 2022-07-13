// attribute

const link = document.querySelector('a');
// element. 요소
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.google.com');
link.innerHTML = '역시 검색은 구글';

const msg = document.querySelector('p');

// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color:green');

msg.classList.remove('error');
msg.classList.add('success');

// get // 가져오다. // read. 값을 읽는다는 의미

// set // 값을 세운다. // write. 값을 쓴다.