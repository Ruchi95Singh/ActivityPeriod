from django.forms import ModelForm
from .models import UserActivity

class UserForm(ModelForm):
    class Meta :
        model = UserActivity
        fields = '__all__'
    