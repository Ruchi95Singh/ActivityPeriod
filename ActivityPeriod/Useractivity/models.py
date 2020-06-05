from django.db import models
from datetime import datetime
# Create your models here.

class UserActivity(models.Model):
    real_name = models.CharField(max_length=40,null=True)
    time_field = models.CharField(max_length=40,null=True)
    start_time1 = models.DateTimeField(null=True, blank=True)
    end_time1 = models.DateTimeField(null=True, blank=True)
    start_time2 = models.DateTimeField(null=True, blank=True)
    end_time2 = models.DateTimeField(null=True, blank=True)
    start_time3 = models.DateTimeField(null=True, blank=True)
    end_time3 = models.DateTimeField(null=True, blank=True)    

    

    
