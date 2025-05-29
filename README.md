
# Blood Group Classification Using Fingerprint Images

This project uses a Convolutional Neural Network (CNN) to classify ABO and Rh blood groups based on fingerprint images. The model is integrated into a Flask web application that allows real-time fingerprint upload and blood group prediction.

## Features

- CNN model built using TensorFlow and Keras.
- Image preprocessing with OpenCV (grayscale conversion, normalization).
- Flask web app for uploading fingerprint images and getting predictions.
- Includes `.h5` trained model for prediction.

## Project Structure

```

├── app.py                # Flask application
├── model
│   └── blood\_group\_model.h5   # Trained CNN model
├── static
│   ├── style.css         # CSS styling
│   └── script.js         # Frontend JavaScript
├── templates
│   └── index.html        # HTML frontend
├── images                # (Optional) Folder for images
├── README.md             # Project documentation
└── requirements.txt      # Python dependencies (optional)

````

## Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/dineshreddynani/Blood-Group-Classification.git
cd Blood-Group-Classification
````

2. **Create a virtual environment (recommended):**

```bash
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
```

3. **Install dependencies:**

```bash
pip install -r requirements.txt
```

4. **Run the Flask app:**

```bash
python app.py
```

5. **Open your browser at** `http://127.0.0.1:5000` to use the app.

## Contact

Chinnagulagari Dinesh Kumar Reddy
Email: [chinnagulagaridineshreddy@gmail.com](mailto:chinnagulagaridineshreddy@gmail.com)
LinkedIn: [https://www.linkedin.com/in/dineshhreddy](https://www.linkedin.com/in/dineshhreddy)

```
```
