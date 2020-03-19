from django.urls import path

from suggestions import views

urlpatterns = [
    path('categories', views.get_categories),
    path('suggestions/create', views.save_category)
]