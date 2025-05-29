document.getElementById('upload-form').onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const resultText = document.getElementById('result');
    resultText.innerText = "Processing...";

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.prediction) {
            resultText.innerText = `🧬 Prediction: ${result.prediction} (Confidence: ${result.confidence})`;
        } else {
            resultText.innerText = `❌ Error: ${result.error}`;
        }

    } catch (error) {
        resultText.innerText = `❌ Error: ${error.message}`;
    }
};

// Preview Uploaded Image
document.getElementById('file-input').addEventListener('change', function (e) {
    const previewContainer = document.getElementById('preview-container');
    const previewImage = document.getElementById('preview-image');
    
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (event) {
            previewImage.src = event.target.result;
            previewImage.style.display = "block";
            previewContainer.classList.add('show');
        }
        
        reader.readAsDataURL(file);
    }
});