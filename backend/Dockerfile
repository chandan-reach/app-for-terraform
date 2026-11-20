
# Use lightweight Python image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code
COPY . .

# Expose Flask port
EXPOSE 8000

# Start Flask application
CMD ["python", "app.py"]
