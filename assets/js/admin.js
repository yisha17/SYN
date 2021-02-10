const browse = document.getElementById('filebtn');
const chooseFile = document.getElementById('myfile');
const photoContainer = document.getElementById('image-preview');
const image = document.querySelector('.img-preview');
const imgText = document.querySelector('.image-text');

browse.addEventListener('click',choosePhoto);

function choosePhoto(){
    chooseFile.click();
    console.log("successful");
}
chooseFile.addEventListener('change',function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();

        imgText.style.display = "none";
        image.style.display = "block";

        reader.addEventListener('load',function(){
            image.setAttribute('src',this.result);
        });

        reader.readAsDataURL(file);
    }

});


