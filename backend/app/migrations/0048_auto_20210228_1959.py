# Generated by Django 2.2.10 on 2021-02-28 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0047_user_pushover_tokens'),
    ]

    operations = [
        migrations.AddField(
            model_name='historicalprint',
            name='video_archived_at',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
        migrations.AddField(
            model_name='print',
            name='video_archived_at',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
    ]
