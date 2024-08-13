FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt requirements.txt
COPY app.py .
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]

# docker build -t flask_app .
# docker run -d -p 5000:5000 flask_app
