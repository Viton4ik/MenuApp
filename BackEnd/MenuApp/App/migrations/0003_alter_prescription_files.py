# Generated by Django 4.2.1 on 2023-05-30 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0002_remove_category_description_alter_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prescription',
            name='files',
            field=models.ManyToManyField(related_name='pictures', to='App.file'),
        ),
    ]
