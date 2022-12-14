# Generated by Django 2.2.27 on 2022-02-15 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0060_user_last_active_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='printevent',
            name='event_type',
            field=models.CharField(choices=[('STARTED', 'STARTED'), ('ENDED', 'ENDED'), ('PAUSED', 'PAUSED'), ('RESUMED', 'RESUMED'), ('ALERT_MUTED', 'ALERT_MUTED'), ('ALERT_UNMUTED', 'ALERT_UNMUTED'), ('FILAMENT_CHANGE_REQ', 'FILAMENT_CHANGE_REQ'), ('USER_INTERACTION_REQ', 'USER_INTERACTION_REQ')], max_length=20, null=True),
        ),
    ]
