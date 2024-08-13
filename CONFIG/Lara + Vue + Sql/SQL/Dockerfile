FROM mysql:latest
ENV MYSQL_DATABASE=laravel
ENV MYSQL_USER=laravel
ENV MYSQL_PASSWORD=laravel
ENV MYSQL_ROOT_PASSWORD=rootlaravel
EXPOSE 3306
COPY schema.sql /docker-entrypoint-initdb.d/