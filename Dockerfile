# Usamos una imagen ligera de Nginx para servir la web
FROM nginx:alpine

# Copiamos nuestro archivo index.html a la carpeta que Nginx usa por defecto
COPY index.html /usr/share/nginx/html/index.html

# Exponemos el puerto 80
EXPOSE 80
