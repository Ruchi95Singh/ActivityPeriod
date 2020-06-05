from django.shortcuts import render, redirect
from .models import UserActivity
from django.http import JsonResponse, HttpResponse
from django.core import serializers
import json
from  .management.commands import json_data

# Create your views here.
def index(request):
    return render(request, 'Useractivity/index.html')

def create(request):
    member = UserActivity(real_name=request.POST.get('real_name'),
    time_field=request.POST.get('timezone'),
    start_time1=request.POST.get('st1'),
    end_time1=request.POST.get('et1'),
    start_time2=request.POST.get('st2'),
    end_time2=request.POST.get('et2'),
    start_time3=request.POST.get('st3'),
    end_time3=request.POST.get('et3'))
    member.save()
    return redirect('/Useractivity/')

def read(request):
    members = UserActivity.objects.all()
    context = {'members': members}
    return render(request, 'Useractivity/read.html', context)



def Json_data_func(request, pretty=False):
    data = UserActivity.objects.all()
    output = serializers.serialize('json', data,indent=2)
    if pretty:
        output = json.dumps(json.loads(output), indent=4)
    return HttpResponse(output, content_type="application/json")
    

    
def api(self):    
    return JsonResponse(json.loads(json_data.Command.handle(self)), safe=False) #the handle() method returns the data

    
