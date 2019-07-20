from django.db import models


class List(models.Model):
    title = models.CharField(max_length=100)
    done = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('created',)
