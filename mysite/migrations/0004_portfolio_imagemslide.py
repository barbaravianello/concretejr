# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2018-12-15 03:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0003_portfolio_titulo'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='imagemslide',
            field=models.ImageField(blank=True, null=True, upload_to='portfolio/imagenslide', verbose_name='Imagem'),
        ),
    ]