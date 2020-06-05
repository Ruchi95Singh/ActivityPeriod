from django.conf.urls import url
from . import views
from .management.commands import json_data

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.create, name='create'),
    url(r'^read$', views.read, name='read'),
    url(r'^Json_data_func$', views.Json_data_func, name='Json_data_func'),
    url(r'^json_data$', views.api, name='handle')

    
    
]
