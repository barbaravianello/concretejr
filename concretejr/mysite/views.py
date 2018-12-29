# -*- coding:utf-8 -*-
from django.shortcuts import render
from django.shortcuts import render_to_response
from .models import Inicio, Quemsomos, Servicos, Portfolio, Depoimentos, Parceiros

def index(request):
        inicio = inicio.objects.all()
        quemsomos = Quemsomos.objects.all()
        portfolio = portfolio.objects.all()
        servicos = Servicos.objects.all() 
        depoimentos = depoimentos.objects.all()
        parceiros = parceiros.objects.all()

        context={
                    'inicio':inicio,
                    'quemsomos':quemsomos,
                    'portfolio':portfolio,
                    'servicos':servicos,
                    'depoimentos':depoimentos,  
                    'parceiros':parceiros,

        }
       
return render(request, 'index.html', context) 