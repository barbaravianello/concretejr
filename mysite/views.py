# -*- coding:utf-8 -*-
from django.shortcuts import render
from django.shortcuts import render_to_response
from .models import Quemsomos, Servicos, Portfolio, Depoimentos, Parceiros
from .forms import ContactForm

def index(request):
#    inicio = Inicio.objects.last()
    quemsomos = Quemsomos.objects.last()
    portfolio = Portfolio.objects.all()
    servicos = Servicos.objects.all() 
    depoimentos = Depoimentos.objects.all()
    parceiros = Parceiros.objects.all()

    context={
    #    'inicio':inicio,
        'quemsomos':quemsomos,
        'portfolio':portfolio,
        'servicos':servicos,
        'depoimentos':depoimentos,
        'parceiros':parceiros,
    }
    
    if request.method == 'POST':
        form = ContactForm(request.POST or None)
        if form.is_valid():
            context['is_valid'] = True
            form.send_mail()
            form = ContactForm()
    else:
        form = ContactForm()

    context['form'] = form
    return render(request, 'index.html', context)