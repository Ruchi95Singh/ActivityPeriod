from django.core.management.base import BaseCommand, CommandError
from django.shortcuts import render, redirect
from Useractivity.models import UserActivity
from django.core import serializers
import json




def json_data():
    data = UserActivity.objects.all()
    output = serializers.serialize('json', data,indent=2)
    out = json.dumps(json.loads(output), indent=4)
    
    return out

class Command(BaseCommand):
    def handle(self, **options):  
        data = json_data() 
        return data
     

    

        