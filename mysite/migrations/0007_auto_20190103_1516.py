# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2019-01-03 18:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0006_auto_20181216_0327'),
    ]

    operations = [
        migrations.AddField(
            model_name='depoimentos',
            name='atalho',
            field=models.SlugField(default='', verbose_name='Atalho'),
        ),
        migrations.AddField(
            model_name='depoimentos',
            name='titulo',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Titulo'),
        ),
        migrations.AddField(
            model_name='parceiros',
            name='titulo',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Titulo'),
        ),
        migrations.AddField(
            model_name='quemsomos',
            name='titulo',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Titulo'),
        ),
    ]
