# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-10-13 19:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carddata',
            name='id',
        ),
        migrations.RemoveField(
            model_name='company',
            name='id',
        ),
        migrations.AlterField(
            model_name='carddata',
            name='card_id',
            field=models.PositiveIntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='company',
            name='company_id',
            field=models.PositiveIntegerField(primary_key=True, serialize=False),
        ),
    ]