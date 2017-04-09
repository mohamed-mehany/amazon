FROM ahmaddiaa/ubuntu-go-rabbitmq
EXPOSE 5672 15672 4369
COPY /start.sh /
RUN chmod +x /start.sh
COPY /setuser.sh /
RUN chmod +x /setuser.sh
ENTRYPOINT ["/bin/bash", "/start.sh"]
