# Generated by Django 2.2.27 on 2022-09-22 00:39

from django.db import migrations, models
import django.db.models.deletion

def set_printer_id(apps, schema_editor):
    PrintEvent = apps.get_model('app', 'PrintEvent')
    for pe in PrintEvent.objects.filter(print__isnull=False, printer__isnull=True).all():
        if pe.print and not pe.printer:
            pe.printer = pe.print.printer
            pe.save()


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0068_remove_printevent_alert_muted'),
    ]

    operations = [
        migrations.RunPython(set_printer_id, migrations.RunPython.noop),
        migrations.AlterField(
            model_name='printevent',
            name='printer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Printer'),
        ),
        migrations.RenameModel(
            old_name='PrintEvent',
            new_name='PrinterEvent',
        ),
    ]
