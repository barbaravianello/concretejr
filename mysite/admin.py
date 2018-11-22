from django.contrib import admin
from .models import Inicio
from .models import Quemsomos
from .models import Servicos
from .models import Depoimentos 
from .models import Portfolio
from .models import Parceiros


admin.site.register(Inicio)
admin.site.register(Quemsomos)
admin.site.register(Servicos)
admin.site.register(Depoimentos)
admin.site.register(Portfolio)
admin.site.register(Parceiros)