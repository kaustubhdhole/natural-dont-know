curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 8.12.0
cd client
npm install
npm run build
cd ..
pip install -r requirements.txt