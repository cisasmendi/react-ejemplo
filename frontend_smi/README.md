docker build --no-cache --pull -t  py_presentacion/frontend_smi:latest .

docker run -d -p 5001:80 py_presentacion/frontend_smi:latest