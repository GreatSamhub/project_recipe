from main import create_app
from config import DevConfig, ProdConfig

# Use the secret key you generated
SECRET_KEY = "b9f82ab43272cfba1ea307171adc9a49c5d1be5c7e406e68eae99c9f1ee63a1cfa58a749"

app = create_app(ProdConfig)
app.config['SECRET_KEY'] = SECRET_KEY

# Run with Gunicorn
if __name__ == "__main__":
    app.run()
