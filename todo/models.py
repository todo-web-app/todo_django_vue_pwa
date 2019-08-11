from django.db import models
from django.contrib.auth.models import User


class List(models.Model):
    title = models.CharField(max_length=100)
    done = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, default=None)

    class Meta:
        ordering = ('created',)
