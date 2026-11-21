
#!/bin/bash

# Update packages
apt-get update -y

# Install Python and Node.js
apt-get install -y python3 python3-pip python3-venv nodejs npm

# Create Python virtual environment
python3 -m venv /opt/flask-venv

# Upgrade pip
/opt/flask-venv/bin/pip install --upgrade pip

# Verify installations
python3 --version
node --version
npm --version
