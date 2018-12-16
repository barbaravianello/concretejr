from django import forms
from django.core.mail import send_mail
from django.conf import settings
from . import views
#form .models import 

class ContactForm(forms.Form):
	nome = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'data-rule':'minlen:4', 'data-msg': 'Por favor, insira pelo menos 4 caracteres.'}))
	email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control', 'data-rule':'email', 'data-msg': 'Por favor, insira um email válido.'}))
	empresa = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	telefone = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
#	sbjct = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Assunto', 'data-rule':'minlen:4', 'data-msg': 'Por favor, insira pelo menos 8 caracteres no assunto.'}))
	message = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control', 'rows': '5', 'data-rule':'required', 'data-msg': 'Por favor, insira sua mensagem.'}))

	def send_mail(self):
		message = '------------------------------------------------------------------------------\n'
		message += '	E-mail enviado pelo Contato do site da Concrete  \n'
		message += '-----------------------------------------------------------------------------\n'
		message = ' Nome: %(nome)s', ' Empresa: %(empresa)s \n'
		message = ' Telefone: %(telefone)s', ' E-mail: %(email)s \n'
		message = ' Mensagem: %(message)s \n'
		
		context = {
			'nome' : self.cleaned_data['nome'],
			'email': self.cleaned_data['email'],
			'empresa': self.cleaned_data['empresa'],
			'telefone': self.cleaned_data['telefone'],
			'message': self.cleaned_data['message'],
		}
		
		subject = "Novo e-mail no site da Concrete"
		message = message % context
		send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [settings.CONTACT_EMAIL], fail_silently=False)
