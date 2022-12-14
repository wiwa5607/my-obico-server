# Generated by Django 2.2.24 on 2022-01-09 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0055_octoprinttunnel'),
    ]

    operations = [
        migrations.AddField(
            model_name='octoprinttunnel',
            name='deleted',
            field=models.DateTimeField(editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='octoprinttunnel',
            name='app',
            field=models.TextField(db_index=True),
        ),
        migrations.AlterField(
            model_name='octoprinttunnel',
            name='port',
            field=models.IntegerField(blank=True, db_index=True, null=True),
        ),
        migrations.AlterField(
            model_name='octoprinttunnel',
            name='subdomain_code',
            field=models.TextField(blank=True, db_index=True, null=True, unique=True),
        ),
    ]
