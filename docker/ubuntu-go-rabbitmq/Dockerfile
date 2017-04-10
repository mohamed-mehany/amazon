FROM ahmaddiaa/ubuntu-go-rabbitmq
EXPOSE 5672 15672 4369 8080
COPY /start.sh /
RUN chmod +x /start.sh
COPY /rabbitmqPublisher /
ENTRYPOINT ["/bin/bash", "/start.sh"]
