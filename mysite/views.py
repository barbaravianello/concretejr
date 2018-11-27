# -*- coding:utf-8 -*-
from django.shortcuts import render
from django.shortcuts import render_to_response
from .models import Inicio, Quemsomos, Servicos, Portfolio, Depoimentos, Parceiros
#from django.http import HttpResponse

def index(request):
    inicio = Inicio.objects.all()
    quemsomos = Quemsomos.objects.all()
    portfolio = Portfolio.objects.all()
    servicos = Servicos.objects.all() 
    depoimentos = Depoimentos.objects.all()
    parceiros = Parceiros.objects.all()

    context={
        'inicio':inicio,
        'quemsomos':quemsomos,
        'portfolio':portfolio,
        'servicos':servicos,
        'depoimentos':depoimentos,  
        'parceiros':parceiros,
    }
       
    return render(request, 'index.html', context) 