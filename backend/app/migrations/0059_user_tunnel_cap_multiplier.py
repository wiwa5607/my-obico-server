# Generated by Django 2.2.24 on 2022-02-03 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0058_auto_20220202_0841'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='tunnel_cap_multiplier',
            field=models.FloatField(default=1),
        ),
    ]
