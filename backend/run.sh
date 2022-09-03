python manage.py migrate && \
python manage.py collectstatic -v 2 --noinput && \
python manage.py runserver --nostatic --noreload 0.0.0.0:3334