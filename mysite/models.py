from django.db import models
from django.utils import timezone

class Inicio(models.Model):
    titulo = models.TextField('Titulo', max_length = 100, null = True, blank= True)
    imagem = models.ImageField('Imagem', upload_to= 'quemsomos/imagens')
    descricao = models.TextField('Descricao', blank= True , null = True)
    
    class Meta:
        verbose_name = "Inicio"
        verbose_name_plural = "Inicio"      

class Quemsomos(models.Model):
    titulo = models.CharField('Titulo', max_length = 100, blank= True , null = True)
    imagem = models.ImageField('Imagem', upload_to= 'quemsomos/imagens')
    descricao = models.TextField('Descricao', blank= True , null = True)

    class Meta:
        verbose_name = "Quem somos"
        verbose_name_plural = "Quem somos"

class Servicos(models.Model):
    titulo = models.TextField('Titulo', max_length = 100, null = True, blank= True)
    imagem = models.ImageField('Imagem', upload_to= 'servicos/imagens')
    descricao = models.TextField('Descricao1', blank= True , null = True)     
    
    class Meta:
        verbose_name = "Servicos"
        verbose_name_plural = "Servicos"
        ordering = ['titulo']

class Portfolio(models.Model):
    titulo = models.TextField('Titulo', max_length = 100, null = True, blank= True)
    imagem = models.ImageField('Imagem', upload_to= 'portfolio/imagens')
    imagemslide = models.ImageField('Imagem', upload_to= 'portfolio/imagenslide', null = True, blank= True)
    descricao = models.TextField('Descricao', blank= True , null = True)

    class Meta:
        verbose_name = "Portfolio"
        verbose_name_plural = "Portfolio"

class Depoimentos (models.Model):
    titulo = models.CharField('Titulo', max_length = 100, blank= True , null = True)
    imagem = models.ImageField('Imagem', upload_to= 'depoimentos/imagens',  blank= True , null = True)
    descricao = models.TextField('Descricao', blank= True , null = True)
    autor = models.CharField(max_length=200)
    atalho = models.SlugField('Atalho', default='test')
    prepopulated_fields = {'atalho': ['titulo']}

    class Meta:
        verbose_name = "Depoimentos"
        verbose_name_plural = "Depoimentos" 

class Parceiros(models.Model):
    titulo = models.CharField('Titulo', max_length = 100, blank= True , null = True)
    imagem = models.ImageField('Imagem', upload_to= 'parceiros/imagens')

    class Meta:
        verbose_name = "Parceiros"
        verbose_name_plural = "Parceiros"

