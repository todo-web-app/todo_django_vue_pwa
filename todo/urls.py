from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'list', views.ListViewSet)

urlpatterns = [
    path('list/<int:pk>', views.ListViewSet.as_view({'delete': 'destroy'})),
    path('', include(router.urls)),
    path('user/add', views.CreateUserView.as_view()),
]
