# Generated by Django 3.1.3 on 2020-12-11 20:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_auto_20201211_2020'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='created_by',
            new_name='creator',
        ),
    ]
