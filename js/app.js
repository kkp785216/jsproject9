console.log('this is drag and drop utility');

const imageBox = document.querySelector('.imageBox');
const whiteBoxs = document.getElementsByClassName('whiteBox');


// Event listeners for dragable element imageBox
imageBox.addEventListener('dragstart', (e)=>{
    console.log('dragging started');
    setTimeout(()=>{e.target.style.display = 'none'}, 0);
});
imageBox.addEventListener('dragend', (e)=>{
    console.log('dragend');
    e.target.style.display = 'unset'
})

for(whiteBox of whiteBoxs){
    whiteBox.addEventListener('dragover', (e)=>{
        console.log('dragover is triggerd');
        e.preventDefault()
    })
    whiteBox.addEventListener('dragenter', (e)=>{
        console.log('dragenter is triggerd');
        e.target.classList.add('hold');
    })
    whiteBox.addEventListener('dragleave', (e)=>{
        console.log('dragleave is triggerd');
        e.target.classList.remove('hold');
    })
    whiteBox.addEventListener('drop', (e)=>{
        console.log('dropped');
        e.target.append(imageBox);
        e.target.classList.remove('hold');
    })
}