let envioImagem = document.getElementById('photoProduct')
let previewContainer = document.getElementById('preview');
let previewImage = previewContainer.querySelector('.imagePreview')
let previewDefaultText = previewContainer.querySelector('.imagePreview-defaultText')




envioImagem.addEventListener("change", function(){
    const file = this.files[0];
    
    if (file){
        const reader = new FileReader();

        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";

        reader.addEventListener("load", function(){
            console.log(this)
            previewImage.setAttribute("src", this.result);
        } )
        reader.readAsDataURL(file);
    }else {
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", "");

    }
})

imgData = getBase64Image(envioImagem);
localStorage.setItem("imgData", imgData);


function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


