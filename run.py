from main import create_app
from config import DevConfig, ProdConfig
import os
app = create_app(ProdConfig)

#run with 
if __name__ == "__main__":
    app.run()