cd /app
/home/obico/.local/bin/python manage.py migrate && \
/home/obico/.local/bin/python manage.py collectstatic -v 2 --noinput && \
/home/obico/.local/bin/python manage.py runserver --nostatic --noreload 0.0.0.0:3334
