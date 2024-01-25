
body = document.querySelectorAll('body')[0]
// body.style.backgroundColor = 'red'

li = document.querySelectorAll('li');

head1 = document.querySelector('h1')
head1.addEventListener('click', function(){
    body.style.backgroundColor = 'white';
});

li[0].addEventListener('click', function(){
    body.style.backgroundColor = 'blue';
});

li[1].addEventListener('click', function(){
    body.style.backgroundColor = 'red';
});

li[2].addEventListener('click', function(event){
    body.style.backgroundColor = 'green';
    alert(event);
});

const color1 = 'yellow'

li[3].addEventListener('click', function(event){
    body.style.backgroundColor = color1;
   
});


