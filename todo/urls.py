from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'list', views.ListViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
