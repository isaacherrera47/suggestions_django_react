from django.conf import settings
from django.contrib.auth.models import User
from django.db import models

SUGGESTION_CATEGORIES = [('HR', 'Human Resources'), ('O', 'Office'), ('F', 'Food'), ('G', 'General')]


class Suggestion(models.Model):
    text = models.TextField(max_length=500)
    type = models.CharField(choices=SUGGESTION_CATEGORIES, max_length=10, blank=False, null=False, default='G')


class Comment(models.Model):
    suggestion = models.ForeignKey(Suggestion, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField(max_length=500)
